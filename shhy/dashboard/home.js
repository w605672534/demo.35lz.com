define({
	name:'home',
	params:{},
	views:[
		{
			id:'1',
			title:'核心产品KPI',
			column:4,
			height:180,
			view:'view/kpi/group'
		},
		{
			id:'2',
			title:'各公司月累计计划完成情况',
			column:8,
			height:180,
			view:'view/pm/com-month-plan-complete',
			url:'#pm'
		},
		{
			id:'3',
			title:'原料库存',
			column:4,
			height:200,
			view:'view/im/com-raw-storage',
			url:'#rm'
		},
		{
			id:'4',
			title:'库存率',
			height:151,
			view:'view/kpi/storage',
			url:'#pm'
		},
		{
			id:'5',
			title:'各公司运行状态',
			column:8,
			height:414,
			view:'view/uom/com-uom-overview',
			url:'#uom'
		}
	]
});