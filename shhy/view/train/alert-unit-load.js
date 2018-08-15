define({
	title:{
		text:'标题',
		subtext:'副标题'
	},
	refreshTime:0,
	url:'',
	widget:'webkit/table',
	dataset:'Train/TRAIN/unit_load_alert_qry',
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
			name:'报警',
			data:'START_EVENT',
			format:function(){
				var value = this.rowData.START_EVENT;
				var style = (value==='HIGH') ? 'text-danger' : 'text-primary';
				return value==='HIGH' ?
					'<span class="glyphicon glyphicon-arrow-up ' + style + '"></span>' : 
					'<span class="glyphicon glyphicon-arrow-down ' + style + '"></span>';
			},
			className:'text-center',
			attributes:{
				style:'width:80px;'
			}
		},
		{
			name:'时间',
			data:'EVENT_TIME',
			className:'text-center'
		}
	]
});