define({
	widget:'webkit/table',
	dataset:'HYMII/RM/raw_stock_qry',
	params:{
		'FACTORY_ID':null
	},
	series:[
		{
			name:'原料',
			data:'RAW_NAME'
		},
		{
			name:'库存(吨/m³)',
			data:'STOCK_VAL',
			className:'text-right'
		},
		{
			name:'库存率',
			data:'STOCK_RATE',
			format:function(){
				var progress = this.model.get('value');
				progress = progress === 'NA' ? '-' : progress;
				var style = progress < 20 ? 'danger' : 'success';
				style = progress > 80 ? 'warning' : style;
				return ''
				+ '<div class="clearfix">'
					+ '<div class="pull-left" style="width:60px; margin:0 -20px 0 30px;">'
						+ '<div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
	  					+ '<div class="progress-bar progress-bar-' + style + '" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
	    					+ '<span class="sr-only">'+ progress +'%</span>'
	  					+ '</div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="pull-right text-' + style + '">'+ progress +'%</div>'
				+'</div>';
			},
			className:'text-right',
			attributes:{
				style:'width:130px;'
			}
		}
	]
});