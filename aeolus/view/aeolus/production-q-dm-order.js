define({
	widget:'webkit/table',
	dataset:'AL/dm-production',
	params:{
    '产品':null
  },
	maxLength:4,
	series:[
		{
			name:'排名',
			data:'部门',
			format:function(value, row){
				return '<span class="label label-success badges-round">' + (row['_index'] + 1) + '</span>';
			}
		},
		{
			name:'部门',
			data:'部门'
		},
		{
			name:'本周',
			data:'周产量',
			className:'text-right'
		},
		{
			name:'合格数',
			data:'合格数',
			className:'text-right'
		},
		{
			name:'合格率',
			data:'合格率',
			format:function(value,row){
				var progress = parseInt(value * 100);
				progress = progress === 'NA' ? '-' : progress;
				var style = progress < 96 ? 'warning' : 'success';
				style = progress < 92 ? 'danger' : style;
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