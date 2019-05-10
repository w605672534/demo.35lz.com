define({
	name:'im',
	params:[
		{
			name:'AREA_ID'
		}
	],
	views:[
		{
			id:'1',
			title:'罐区/仓库',
			column:4,
			height:664,
			view:'view/im/storage-area-status'
		},
		{
			id:'2',
			title:'实时数据',
			column:8,
			height:664,
			view:'view/im/tanks-status',
			url:{
				view:'view/dd/im-tag-drilldown',
				height:'400',
				title:'储罐实时数据监控'
			}
		}
	]
});