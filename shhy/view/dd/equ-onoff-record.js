define({
	widget:'webkit/table',
	dataset:'HYMII/UOM/equ_stop_record_qry',
	params:{
		'EQU_ID':null
	},
	series:[
		{
			name:'停车时间',
			data:'EQU_STOP_TIME'
		},
		{
			name:'开车时间',
			data:'EQU_START_TIME'
		},
		{
			name:'停机类型',
			data:'RECORD_TYPE'
		}
	]
});