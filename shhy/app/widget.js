define(function(require){
	var _ = require('underscore');
	var Backbone = require('backbone');
	var Dataset = require('app/dataset');
	var Widget = Backbone.View.extend({
		initialize:function(options){
			this.view = options.view;
			this.dashboard = this.view.dashboard;
			this.setParams();
			this.datasets = {};
			this.loadDataset();
			this.timeTicket = null;
			this.view.on('remove',function(){
				this.trigger('remove');
				this.params = null;
				this.remove();
			},this);
		},
		setParams:function(){
			this.params = new Backbone.Model;
			_.each(this.model.get('params'),function(item, key){
				if(this.dashboard.params.has(key)){
					this.params.set(key, this.dashboard.params.get(key));
				}else{
					item && this.params.set(key, item);
				}

				this.dashboard.params.on('change:' + key, function(e){
					this.params && this.params.set(key, this.dashboard.params.get(key));
				},this);

			}, this);

			this.params.on('change', function(e){
				this.datasets['t'] && this.datasets['t'].params.set(e.changed);
			}, this);
		},
		render:function(){
			return this;
		},
		resize:function(){
			
		},
		getDataset:function(name){
			return this.datasets[name] || this.createDataset(name);
		},
		createDataset:function(name){
			this.datasets[name] = new Dataset({
				name:name,
				params:this.params.toJSON()
			});
			this.datasets[name].query();
			return this.datasets[name];
		},
		loadDataset:function(){
			
			var getDataset = function(name, key){
				this.datasets[key] = this.getDataset(name);
				this.datasets[key].exist && this.update();
				this.datasets[key].on('change',function(){
					this.update();
				},this);
			};

			typeof this.model.get('dataset') === 'object' 
			&& _.each(this.model.get('dataset'), getDataset, this);

			typeof this.model.get('dataset') === 'string' 
			&& getDataset.apply(this, [this.model.get('dataset'),'t']);

		},
		getName:function(name, isDataset){
			var a = name.split('.');
			var dataset = a[1] ? a[0] : 't';
			return isDataset ? dataset : (a[1] ? a[1] : a[0]);
		},
		getData:function(name){
			name = name ? this.getName(name, true) : 't';
			var rows = this.datasets[name] && this.datasets[name].getRows();
			return rows;
		},
		getColumn:function(name){
			var cols = this.datasets['t'] && this.datasets['t'].getColumn(name);
			return cols;
		},
		update:function(){
			this.trigger('update');
		},
		refresh:function(){
			
		},
		reload:function(){
			
		},
		destory:function(){
			clearInterval(this.timeTicket);
		},
		component:function(name, data){
			return _.template(
				$('#' + name).html()
			)(data);
		}
	});
	return Widget;
});