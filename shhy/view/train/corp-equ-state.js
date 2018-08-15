define({
	widget:'webkit/table',
	dataset:'Train/TRAIN/corp_equ_qry',
	series:[
		{
			name:'设备名称',
			data:'EQU_NAME'
		},
		{
			name:'位号',
			data:'EQU_STATE_TAG'
		},
		{
			name:'状态',
			data:'EQU_STATE_VALUE',
			format:function(value){
				console.info(value);
				return value == 1 ? 
					'<span class="glyphicon glyphicon-ok text-success"></span>' : 
						'<span class="glyphicon glyphicon-ban-circle text-danger"></span>';
			},
			className:'text-center'
		},
		{
			name:'时间',
			data:'EQU_STATE_TIME',
			className:'text-center'
		}
	]
});