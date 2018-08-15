define(function(require){
	require('underscore');
	require('bootstrap');
	var Backbone = require('backbone');
	var data = require('document/dataset/dataset');
	var cases = require('document/dataset/use-cases');
	var Table = Backbone.View.extend({
		initialize:function(options){
			this.tpl = options.tpl;
		},
		render:function(){
			this.$el.html(_.template(this.tpl)(this.model.toJSON()));
			return this;
		}
	});

	var Doc = Backbone.View.extend({
		template:_.template($('#tpl-doc').html()),
		initialize:function(options){
			this.tableTpl = options.tableTpl;
		},
		render:function(){
			this.$el.html(this.template(this.model.toJSON()));
			this.collection.each(this.renderTable, this);
			return this;
		},
		renderTable:function(model, index){
			model.set('_index',index);
			var table = new Table({
				model:model,
				tpl:this.tableTpl
			});
			table.render();
			this.$el.append(table.el);
			return this;
		}
	});

	var doc1 = new Doc({
		model:new Backbone.Model({title:'SHHY MII 数据集设计文档'}),
		collection:new Backbone.Collection(data.Sheet1),
		tableTpl:$('#tpl-dataset').html()
	}).render();

	doc1.$el.appendTo($('#document-container'));

	var doc2 = new Doc({
		model:new Backbone.Model({title:'SHHY MII 视图用例设计文档'}),
		collection:new Backbone.Collection(cases.UseCases),
		tableTpl:$('#tpl-case').html()
	}).render();

	doc2.$el.appendTo($('#document-container'));

});