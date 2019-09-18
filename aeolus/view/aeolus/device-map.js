define({
	widget:'webkit/block',
	series:[
		{
			id:'1',
			title:'',
			column:12,
			height:380,
			view:'view/aeolus/device-graph',
			url:{
				view:'view/aeolus/device-overview',
				height:'415',
				title:'机台设备详情',
				size:'modal-lg'
			}
		},
		{
			id:'2',
			title:'',
			column:6,
			height:200,
			view:'view/aeolus/device-status'
		},
		{
			id:'4',
			title:'',
			column:2,
			height:200
		},
		{
			id:'3',
			title:'',
			column:3,
			height:200,
			view:'view/aeolus/device-group'
		}
	]
});