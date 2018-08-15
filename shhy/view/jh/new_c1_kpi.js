define({
	widget:'webkit/table',
	dataset:'HYMII/JH/c1_kpi_qry',
	series:[
		{
			name:'项名称',
			data:'NAME',
			format:'<strong><%=value%></strong>'
		},
		{
			name:'单位',
			data:'UNIT',
		},
		{
			name:'本月值',
			data:'VALUE',
			className:'text-right',
			format:function(value){
				return value.toFixed(3);
			}
		},
		{
			name:'目标',
			data:'TARGET',
			format:function(value){
				return value.toFixed(3);
			},
			className:'text-right'
		},
		{
			name:'偏差',
			data:'VALUE',
			format:function(){
				var value = (this.row.model.get('VALUE') - this.row.model.get('TARGET')).toFixed(3);
				var sign = this.row.model.get('TYPE') ? -1 : 1;
				var style = sign * value < 0 ? 'text-success' : 'text-danger';
				return value > 0 ?
					'<span class="' + style + '">' + value
					+ '</span> <span class="glyphicon glyphicon-arrow-up ' + style + '"></span>' : 
						'<span class="' + style + '">' + value 
					+ '</span> <span class="glyphicon glyphicon-arrow-down ' + style + '"></span>';
			},
			className:'text-right',
			attributes:{
				style:'width:80px;'
			}
		}
	]
});