define({
	params:{
		'UNIT_ID':null,
		'FACTORY_ID':null
	},
	widget:'webkit/table',
	dataset:'HYMII/UOM/corp_equ_qry',
	series:[
		{
			name:'设备',
			data:'EQU_NAME'
		},
		{
			name:'状态',
			data:'EQU_STATE_VALUE',
			format:function(value){
				return value == '1' ? 
					'<span class="glyphicon glyphicon-ok text-success"></span>' : 
						'<span class="glyphicon glyphicon-ban-circle text-danger"></span>';
			},
			className:'text-center'
		}
	]
});