define({
	widget:'webkit/table',
	dataset:'AL/production-device',
	params:{
		'工段':'成型工段'
	},
	series:[
		{
			name:'机台设备',
			data:'机台设备'
		},
		{
			name:'早',
			data:'早',
			className:'text-right'
		},
		{
			name:'中',
			data:'中',
			className:'text-right'
		},
		{
			name:'晚',
			data:'夜',
			className:'text-right'
		},
		{
			name:'合计',
			data:'完成量',
			className:'text-right'
		},
		{
			name:'计划',
			data:'计划',
			className:'text-right'
		},
		{
			name:'完成率',
			data:'完成率',
			format:function(value, row){
				var progress = value * 100;
				progress = progress === 'NA' ? '-' : progress;
				var style = progress < 90 ? 'warning' : 'success';
				style = progress < 80 ? 'danger' : style;
				return ''
				+ '<div class="clearfix">'
					+ '<div class="pull-right text-' + style + '">'+ progress +'%</div>'
				+'</div>';
			},
			className:'text-right'
		}
	]
});