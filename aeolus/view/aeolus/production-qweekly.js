define({
	widget:'webkit/table',
	dataset:'AL/production',
	series:[
		{
			name:'产品',
			data:'产品',
			display:function(value, row){
				var _this = this;
				this.row.$el.on('click', function(e){
					if($(e.target).is('a')){
						return;
					}
					_this.table.dashboard.params.set('产品', row['产品']);
				});

				this.table.dashboard.params.on('change', function(e){
					if(this.table.dashboard.params.get('产品') == row['产品']){
						this.row.$el.addClass('info');
					}else{
						this.row.$el.removeClass('info');
					}
				}, this);

				if(!this.table.dashboard.params.get('产品')){
					this.table.dashboard.params.set('产品', this.row.model.get('产品'));
				}
				
				this.table.dashboard.params.get('产品') == row['产品']
				&& this.row.$el.addClass('info');
			}
		},
		{
			name:'本周',
			data:'周产量',
			className:'text-right hidden-xs'
		},
		{
			name:'合格数',
			data:'合格数',
			className:'text-right hidden-xs'
		},
		{
			name:'合格率',
			data:'合格率',
			format:function(value){
				var progress = parseInt(value * 100);
				progress = progress === 'NA' ? '-' : progress;
				var style = progress < 96 ? 'warning' : 'success';
				style = progress < 92 ? 'danger' : style;
				return ''
				+ '<div class="clearfix">'
					+ '<div class="pull-left" style="width:60px; margin:0 -20px 0 30px;">'
						+ '<div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
	  					+ '<div class="progress-bar progress-bar-' + style + '" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
	    					+ '<span class="sr-only">'+ progress +'%</span>'
	  					+ '</div>'
						+ '</div>'
					+ '</div>'
					+ '<div class="pull-right text-' + style + '">'+ progress +'%</div>'
				+'</div>';
			},
			className:'text-right',
			attributes:{
				style:'width:130px;'
			}
		}
	]
});