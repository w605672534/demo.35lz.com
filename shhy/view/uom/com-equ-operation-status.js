define({
	params:{
		'FACTORY_ID':null
	},
	widget:'webkit/table',
	dataset:'HYMII/UOM/corp_equ_qry',
	rowEvents:{
		'click':function(){

		}
	},
	series:[
		{
			name:'设备',
			data:'EQU_NAME',
			display:function(value, row){
				var _this = this;
				this.row.$el.on('click', function(){
					_this.table.dashboard.params.set('EQU_ID', _this.row.model.get('EQU_ID'));
				});

				this.table.dashboard.params.on('change', function(e){
					if(this.table.dashboard.params.get('EQU_ID') == row.EQU_ID){
						this.$el.parent().addClass('info');
					}else{
						this.$el.parent().removeClass('info');
					}
				}, this);
				
				this.table.dashboard.params.get('EQU_ID') == row.EQU_ID 
				&& this.row.$el.addClass('info');
			}
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