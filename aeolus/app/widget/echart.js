define(function(require, exports, module){
	var Chart = require('app/widget/chart');
	var ec = require('echarts');
	var common = require('app/widget/echart/common');
	var dark = require('app/widget/echart/dark');
	require('app/utils/cookie');
	require('echarts/chart/line');
  require('echarts/chart/bar');
  require('echarts/chart/gauge');
  require('echarts/chart/pie');
  require('echarts/chart/funnel');
	var EChart = Chart.extend({
		initialize:function(options){
			this.option = this.model.toJSON();
			_.defaults(this.option, common);
			Chart.prototype.initialize.apply(this, arguments);
		},
		render:function(){
			var cookie = $.cookie('dashboard_theme');
			var theme =  (cookie == 'blue' || cookie == 'dark' || module.config().theme == 'dark') ? dark : {};
			this.view.$('.dashboard-panel-body').removeClass('mobile-auto-height');
			this.$el.height(this.view.$('.dashboard-panel-body').height());
			this.chart = ec.init(this.el, theme);
			!this.model.get('dataset') && this.setOption();
			//this.getData() && this.update();
			var _this = this;
			$(window).on('resize', function(){
	      _this.chart.resize();
	    });
	    $(document).on('switchTheme', function(e){
	    	_this.render();
	    	_this.update();
	    });
			return this;
		},
		setOption:function(){
			this.chart.clear();
			this.chart.setOption(this.option, true);
		},
		setData:function(){
			var items = ['legend','xAxis','yAxis','series'];
			for(var i = 0; i < items.length; i++){
				var item = items[i];
				if(this.option[item]){
					if(_.isArray(this.option[item])){
						for(var j = 0; j < this.option[item].length; j++){
							this.setItemData(this.option[item][j]);
						}
					}else{
						this.setItemData(this.option[item]);
					}
				} 
			}

			if(typeof this.option.title === 'function'){
				this.option.title = this.option.title.apply(this);
			}

			if(!this.option.legend || !this.option.legend.data){
				this.option.legend = this.option.legend ? this.option.legend : {data:null};
				this.option.legend.data = _.pluck(this.option.series, 'name');
			}
		},
		setItemData:function(item){

			//if(!_.isArray(item.data)){
				item._data = item._data ? item._data : item.data;
			//}
			
			if(item._data && typeof item._data === 'function'){
				item.data = item._data.apply(this, [this.getData()]);
				return;
			}

			if(item._data && (item.type === 'pie' || item.type === 'funnel')){
				item.data = [];
				var rows = this.getData();
				if(rows.length){
					item.data = _.map(rows, function(row){
						return {name:row[item._data[0]], value:row[item._data[1]]}
					});
					if(!this.option.legend || !this.option.legend.data){
						this.option.legend = this.option.legend ? this.option.legend : {data:null};
						this.option.legend.data = _.pluck(rows, item._data[0]);
					}
				}

				return;
			}

			if(item._data && typeof item._data === 'string'){
				var data = this.getColumn(item._data);
				item.data = data ? data : [];
			}
		},
		toImage:function(type){
			type = type ? type : 'png';
			return this.chart.getDataURL(type).slice(22);
		},
		update:function(){
			var rows = this.getData();
			this.setData();
			if(rows.length){
				this.setOption();
			}else{
				this.chart.clear();
			}
			return this;
		},
		resize:function(){
			
		}
	});
	return EChart;
});