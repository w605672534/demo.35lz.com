define(function(require){
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Webkit = require('app/widget/webkit');

	var Item = Backbone.View.extend({
		tagName:'li',
		events:{
			'click':'onClick'
		},
		initialize:function(options){
			this.table = options.table;
		},
		render:function(){
			var tpl = '<a href="javascript:void(0);"><%=name%></a>';
			this.$el.html(_.template(tpl)(this.model.toJSON()));
			return this;
		},
		onClick:function(){
			this.$el
				.addClass('active')
				.siblings()
				.removeClass('active');
			this.table.model.set({page:this.model.get('num')});
		}
	});

	var Pagination = Backbone.View.extend({
		tagName:'ul',
		className:'pagination',
		attributes:{
			style:'margin: 0;'
		},
		initialize:function(options){
			this.table = options.table;
		},
		render:function(){
			var size = 9;
			var s,lt,rt;
			var count = this.model.get('count');
			var current = 1;
			if(count > size){
				s = Math.floor(size/2);
				rt = current + s;
				rt = rt > count ? count : rt;
				lt = rt - size + 1;
				lt = lt < 1 ? 1:lt;
			}else{
				size = count;
				lt = 1;
			}
			
			if(count > 1){
				for(var i = lt; i < lt + size; i++){
					this.renderItem(new Backbone.Model({num:i, name:i}) ,i);
				}
			}

			return this;
		},
		renderItem:function(model, i){
			var item = new Item({
				model: model,
				table: this.table
			});
			this.$el.append(item.render().el);
			i === this.table.model.get('page') && item.$el.addClass('active');
		}
	});

	var Cell = Backbone.View.extend({
		tagName:'td',
		initialize:function(options){
			this.row = options.row;
			this.table = this.row.table;
			this.isHead = options.isHead;
			if(!this.isHead){
				this.events = this.model.get('events');
			}
			this.model.set('_row',this.row.model.toJSON());
		},
		format:function(){
			var tpl = '<%=_value%>';
			if(!this.isHead){
				var format = this.model.get('format');
				typeof format === 'string' && (tpl = format);
				typeof format === 'function' && (tpl = format.apply(this, [this.model.get('_value'),this.row.model.toJSON()]));
			}
			return tpl;
		},
		rowspan:function(){
			var key = '_rowspan_' + this.model.get('name');
			if(!this.table.model.get(key) || this.table.model.get(key).value != this.model.get('_value')){
				this.table.model.set(key, {value:this.model.get('_value'), cell:this, rowspan:1});
			}else{
				var r = this.table.model.get(key);
				r.rowspan += 1;
				r.cell.$el.attr('rowspan', r.rowspan);
				this.$el.hide();
			}
			return this;
		},
		render:function(){
			this.$el.html(_.template('<div class="table-cell">' + this.format() + '</div>')(this.model.toJSON()));
			this.model.get('className') && this.$el.addClass(this.model.get('className'));
			this.model.get('rowspan') && !this.isHead && this.rowspan();
			var display = this.model.get('display');
			!this.isHead && typeof display === 'function' && display.apply(this, [this.model.get('value'), this.row.model.toJSON()]);
			return this;
		}
	});

	var Row = Backbone.View.extend({
		tagName:'tr',
		initialize:function(options){
			this.cellType = options.isHead ? 'th' : 'td';
			this.table = options.table;
			this.columns = options.columns;
			this.isHead = options.isHead;
			this.column = options.column;
		},
		render:function(){
			if(this.column) return this.renderRow();
			this.renderBody();
			return this;
		},
		renderBody:function(model, isHead){
			model = model ? model : this.model;
			_.each(this.columns, function(item){
				var name = this.table.getName(item.data);
				item._value = '';
				if(this.column && this.column != name){
					return;
				}

				if(this.isHead && !this.column){
					item._value = item.name;
				}else{
					model.get(name) !== undefined && (item._value = model.get(name));
				}

				if(item.rowGroup){
					!this.isHead && this.table.renderRowGroup(item._value, name, this.columns.length - 1);
					return;
				}

				this.renderCell(new Backbone.Model(item), this.$el, isHead);
			}, this);
			return this;
		},
		renderRow:function(){
			var rows = this.table.getData();
			var head = {};
			head[this.column] = this.model.get('name');
			this.renderBody(new Backbone.Model(head), true);
			_.each(rows, function(row, index){
				this.renderBody(new Backbone.Model(row));
			}, this);
			return this;
		},
		renderCell:function(model, $el, isHead){
			var cell = new Cell({
				model:model,
				tagName:this.cellType,
				row:this,
				isHead:isHead ? isHead : this.isHead,
				attributes:model.get('attributes')
			});
			cell.render().$el.appendTo($el);
		}
	});

	var Table = Webkit.extend({
		tagName:'table',
		className:'table table-condensed table-hover widget-table',
		initialize:function(options){
			Webkit.prototype.initialize.apply(this, arguments);
			this.hasTotal = this.model.get('hasTotal');
			this.pagination = this.model.get('pagination');
			this.rowToColumn = $(window).width() < 768 ? null : this.model.get('rowToColumn');
			!this.model.get('page') && this.model.set('page', 1);
			this.pagination && this.model.on('change:page', function(){
				this.renderBody();
			}, this);
			this.rowGroup = {};
		},
		render:function(){
			this.getData() && this.update();
			return this;
		},
		renderHead:function(){
			if (this.rowToColumn) return;
			var columns = this.model.get('series');
			var row = {};
			this.renderRow(new Backbone.Model(row), 0, true);
		},
		renderBody:function(){
			if (this.rowToColumn) return this.renderColumn();
			var rows = this.getData(this.model.get('series')[0]['data']);
			var limit = this.model.get('limit');
			var count = rows.length;
			if(limit){
				rows = rows.slice(limit[0],limit[1]);
			}

			if(this.pagination){
				rows = rows.slice((this.model.get('page') - 1) *  this.pagination, this.model.get('page') * this.pagination);
				this.renderFooter(count);
			}

			this.$('tbody').empty();

			_.each(rows, function(row, index){
				if(this.model.get('maxLength') && index + 1 > this.model.get('maxLength')){
					return;
				}
				this.renderRow(new Backbone.Model(row), index);		
			}, this);
		},
		renderFooter:function(len){
			var colspan = this.$('thead>tr>th').size();
			var $footer = $('<tfoot><tr><td colspan="' + colspan + '"><div class="clearfix"></div></td></tr></tfoot>');
			$footer.find('.clearfix').append('<div class="pull-left">共计 ' + len + ' 条</div><div class="pull-right"></div>');
			this.$('tfoot').remove();
			this.$el.append($footer);
			var pageCount = Math.ceil(len / this.pagination);
			var page = new Pagination({
				model: new Backbone.Model({count: pageCount}),
				table:this
			}).render();
			$footer.find('.pull-right').html(page.el);
			return this;
		},
		renderColumn:function(){
			var columns = this.model.get('series');
			_.each(columns, function(column, index){
				this.renderRow(new Backbone.Model(column), index, column.data == this.rowToColumn, column.data);		
			}, this);
		},
		copyHeader:function(){
			var $table = $('<table><thead></thead></table>');
			$table.addClass(this.$el.attr('class'));
			var $thead = this.$('thead');
			var $list = $thead.find('th');
			var $copy = $($thead.html());
			var $copyList = $copy.find('th');
			$table.height($thead.height());
			$table.width($thead.outerWidth());
			this.$el.css('margin-top', - $thead.height() - 1);
			$copyList.each(function(index, el){
				$(el).css('width', $list.eq(index).outerWidth());
			});
			$table.find('thead').append($copy);
			return $table;
		},
		toArray:function(){
			var array = [];
			this.$('tr').each(function(index, el){
				var arr = [];
				$(this).find('.table-cell').each(function(i, e){
					arr.push($(this).text());
				});
				array.push(arr);
			});
			return array;
		},
		update:function(){
			this.$el.html('<thead></thead><tbody></tbody>');
			this.renderHead();
			this.renderBody();
			this.display();
			this.trigger('update');
			return this;
		},
		renderRow:function(model, index, isHead, column){
			var columns = this.model.get('series');
			var $container = this.$(isHead ? 'thead' : 'tbody');
			model.set('_index',index);
			var row = new Row({
				model:model,
				columns:columns,
				table:this,
				isHead:isHead,
				column:column
			});
			row.render().$el.appendTo($container);
			return row;
		},
		renderRowGroup:function(value, name, num){
			value = value === null ? '&nbsp;' : value;
			if(this.rowGroup[name] == value){
				return;
			}
			this.rowGroup[name] = value;
			$group = $('<tr><th class="th-group" colspan="' + num + '">' + value + '</th></tr>');
			this.$('tbody').append($group);
			return this;
		}
	});
	return Table;
});