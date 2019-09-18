define({
	widget:'webkit/table',
	dataset:'AL/production',
	series:[
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
			format:function(){
				var progress = parseInt(this.model.get('value') * 100);
				progress = progress === 'NA' ? '-' : progress;
				var style = progress < 90 ? 'warning' : 'success';
				style = progress < 70 ? 'danger' : style;
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