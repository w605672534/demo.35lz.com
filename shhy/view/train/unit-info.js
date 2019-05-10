define({
	widget:'webkit/table',
	dataset:'Train/TRAIN/bas_unit_qry',
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
			name:'装置类型',
			data:'UNIT_TYPE'
		},
		{
			name:'序号',
			data:'UNIT_SORT'
		}
	]
});