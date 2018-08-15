define({
	widget:'webkit/table',
	dataset:'Train/TRAIN/production_daily_qry',
	params:{
		'FACTORY_ID':null
	},
	series:[
		{
			name:'公司',
			data:'FACTORY_NAME',
			rowspan:true,
			attributes:{
				style:'vertical-align: middle;',
				'class':'hidden-xs'
			}
		},
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
			name:'月累',
			data:'MONTH_PRODUCTION',
			className:'text-right'
		},
		{
			name:'月计划',
			data:'PLAN_VAL',
			className:'text-right'
		},
		{
			name:'库存量',
			data:'STOCK_VAL',
			className:'text-right'
		},
		{
			name:'月计划完成率',
			data:'MONTH_RATE',
			format:function(value){
				return this.table.component(
					'tpl-template-process-bar',
					{
						progress : value,
						style : 'progress-bar-success',
						width : 60,
						max : 100
					}
				);
			},
			className:'text-right',
			attributes:{
				style:'width:120px;'
			}
		}
	]
});