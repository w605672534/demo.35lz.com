define({
	widget:'webkit/table',
	dataset:'Train/TRAIN/corp_unit_qry',
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
			name:'装置',
			data:'UNIT_NAME'
		},
		{
			name:'状态',
			data:'UNIT_STATE_VALUE',
			format:function(value){
				return value == 1 ? 
					'<span class="glyphicon glyphicon-ok text-success"></span>' : 
						'<span class="glyphicon glyphicon-ban-circle text-danger"></span>';
			},
			className:'text-center'
		},
		{
			name:'负荷',
			data:'UNIT_LOAD_VALUE',
			format:function(){
				var progress = (Math.random()*100).toFixed(0) - 0;
				progress = parseFloat(this.model.get('value')).toFixed(0);
				var style = 'progress-bar-success';
				return ''
				+ '<div class="clearfix">'
					+ '<div class="pull-left" style="width:60px; margin:0 -20px 0 30px;">'
						+ '<div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
	  					+ '<div class="progress-bar ' + style + '" role="progressbar" aria-valuenow="'+ progress +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
	    					+ '<span class="sr-only">'+ progress +'%</span>'
	  					+ '</div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="pull-right">'+ progress +'</div>'
				+'</div>';
			},
			className:'text-right',
			attributes:{
				style:'width:130px;'
			}
		}
	]
});