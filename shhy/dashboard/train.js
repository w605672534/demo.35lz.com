define({
	name:'train',
	params:[
		{
			name:'PRODUCT_ID',
			title:'产品',
			index:0,
			value:10
		}
	],
	views:[
		{
			id:'1',
			title:'生产绩效',
			column:6,
			height:300,
			view:'view/train/production-daily',
			scroll:'auto'
		},
		{
			id:'4',
			title:'产品产量30日趋势',
			column:6,
			height:300,
			view:'view/train/production-trend',
			scroll:'auto'
		},
		{
			id:'3',
			title:'45万吨甲醇合成负荷趋势',
			column:6,
			height:300,
			view:'view/train/corp-unit-load-history',
			scroll:'auto'
		},
		{
			id:'2',
			title:'装置停车统计',
			column:6,
			height:300,
			view:'view/train/unit-onoff-count',
			scroll:'auto'
		}
	]
});