define({
	title:{
		text:'标题',
		subtext:'副标题'
	},
	refreshTime:0,
	url:'',
	widget:'webkit/table',
	dataset:'HYMII/BAS/storage_area_qry',
	series:[
		{
			name:'工厂',
			data:'FACTORY_NAME',
			rowspan:true,
			attributes:{
				style:'vertical-align: middle;'
			}
		},
		{
			name:'罐区/仓库',
			data:'AREA_NAME',
			display:function(value, row){
				var _this = this;
				this.row.$el.on('click', function(){
					_this.table.dashboard.params.set('AREA_ID', _this.row.model.get('AREA_ID'));
				});

				this.table.dashboard.params.on('change', function(e){
					if(this.table.dashboard.params.get('AREA_ID') == row.AREA_ID){
						this.$el.parent().addClass('info');
					}else{
						this.$el.parent().removeClass('info');
					}
				}, this);
				
				this.table.dashboard.params.get('AREA_ID') == row.AREA_ID 
				&& this.row.$el.addClass('info');
			},
			attributes:{
				style:'vertical-align: middle;'
			}
		},
		{
			name:'储罐/库位数量',
			data:'AREA_NAME',
			format:function(){
				var progress = (Math.random()*50).toFixed(0) - 0;
				return progress;
			},
			className:'text-right'
		},
		{
			name:'库存率',
			data:'AREA_NAME',
			format:function(){
				var progress = (Math.random()*100).toFixed(0) - 0;
				var style = (progress > 20 && progress < 80) ? 'progress-bar-success' : 'progress-bar-danger';
				return ''
				+ '<div class="clearfix">'
					+ '<div class="pull-left" style="width:60px; margin:0 0 0 20px;">'
						+ '<div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
	  					+ '<div class="progress-bar ' + style + '" role="progressbar" aria-valuenow="'+ progress +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
	    					+ '<span class="sr-only">'+ progress +'%</span>'
	  					+ '</div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="pull-right">'+ progress +'%</div>'
				+'</div>';
			},
			className:'text-right'
		}
	]
});