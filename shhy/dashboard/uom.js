define({
	name:'uom',
	params:[
		{
			name:'UNIT_ID'
		},
		{
			name:'UNIT_LOAD_TAG'
		}
	],
	views:[
		{
			id:'1',
			title:'装置运行状态（一）',
			column:4,
			height:670,
			view:'view/uom/unit-operation-status',
			url:{
				view:'view/uom/unit-status-details',
				height:'400',
				title:'装置运行详情',
				size:'modal-lg'
			},
			limit:[0,20]
		},
		{
			id:'2',
			title:'装置运行状态（二）',
			column:4,
			height:670,
			view:'view/uom/unit-operation-status',
			url:{
				view:'view/uom/unit-status-details',
				height:'400',
				title:'装置运行详情',
				size:'modal-lg'
			},
			limit:[20,40]
		},
		{
			id:'3',
			title:'装置运行状态（三）',
			column:4,
			height:670,
			view:'view/uom/unit-operation-status',
			url:{
				view:'view/uom/unit-status-details',
				height:'400',
				title:'装置运行详情',
				size:'modal-lg'
			},
			limit:[40]
		}
	]
});