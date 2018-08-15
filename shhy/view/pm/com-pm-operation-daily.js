define({
	widget:'webkit/table',
	dataset:'HYMII/PM/production_ensemble_qry',
	params:{
		'FACTORY_ID':null
	},
	series:[
		{
			name:'产品',
			data:'PRODUCT_NAME',
			display:function(value, row){
				var _this = this;
				this.row.$el.on('click', function(){
					_this.table.dashboard.params.set('PRODUCT_ID', _this.row.model.get('PRODUCT_ID'));
				});

				this.table.dashboard.params.on('change', function(e){
					if(this.table.dashboard.params.get('PRODUCT_ID') == row.PRODUCT_ID){
						this.row.$el.addClass('info');
					}else{
						this.row.$el.removeClass('info');
					}
				}, this);

				if(!this.table.dashboard.params.get('PRODUCT_ID')){
					//this.table.dashboard.params.set('PRODUCT_ID', this.row.model.get('PRODUCT_ID'));
				}
				
				this.table.dashboard.params.get('PRODUCT_ID') == row.PRODUCT_ID 
				&& this.row.$el.addClass('info');
			}
		},
		{
			name:'日产量',
			data:'PRODUCTION_VAL',
			className:'text-right'
		},
		{
			name:'月累计',
			data:'MONTH_PRODUCTION',
			className:'text-right'
		},
		{
			name:'年累计',
			data:'MONTH_PRODUCTION',
			format:function(){
				return this.model.get('value')*5;
			},
			className:'text-right'
		},
		{
			name:'库存量',
			data:'STOCK_VAL',
			className:'text-right'
		},
		{
			name:'月计划',
			data:'PLAN_VAL',
			className:'text-right'
		},
		{
			name:'月计划完成率',
			data:'MONTH_RATE',
			format:function(value){
				var progress = (Math.random()*100).toFixed(1) - 0;
				progress = value;
				//var style = progress > 50 ? 'progress-bar-success' : 'progress-bar-danger';
				var style = 'progress-bar-success'
				return '<div class="clearfix"><div class="pull-left" style="width:60px;margin:0 -10px 0 20px;"><div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
  			+ '<div class="progress-bar ' + style + '" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
    		+ '<span class="sr-only">'+ progress +'%</span>'
  			+ '</div>'
				+ '</div></div><div class="pull-right" >'+ progress +'%</div></div>';
			},
			className:'text-right',
			attributes:{
				style:'width:120px;'
			}
		}
	]
});