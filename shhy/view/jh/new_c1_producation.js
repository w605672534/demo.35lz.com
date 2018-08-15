define({
	refreshTime:0,
	url:'',
	widget:'webkit/table',
	dataset:'HYMII/JH/c1_producation_qry',
	series:[
		{
			name:'物料',
			data:'PRODUCT_NAME',
			attributes:{
				style:'width:140px;'
			}
		},
		{
			name:'本日',
			data:'CURRENT',
			className:'text-right'
		},
		{
			name:'比上日',
			data:'CURRENT',
			format:function(){
				var value = (this.row.model.get('CURRENT') - this.row.model.get('DPLAN')).toFixed(0);
				var style = value > 0 ? 'text-success' : 'text-danger';
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
		},
		{
			name:'月累计',
			data:'MTD',
			className:'text-right'
		},
		{
			name:'年累计',
			data:'YTD',
			format:function(){
				return this.model.get('value')*5;
			},
			className:'text-right'
		},
		{
			name:'库存量',
			data:'CURRENT',
			className:'text-right'
		},
		{
			name:'月计划完成率',
			data:'MONTH_RATE',
			format:function(){
				var progress = (this.row.model.get('MTD')/this.row.model.get('MPLAN')*100).toFixed(0) - 0;
				var style = progress > 50 ? 'progress-bar-success' : 'progress-bar-danger';
				return '<div class="clearfix"><div class="pull-left" style="width:60px;margin:0 -10px 0 20px;"><div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
  			+ '<div class="progress-bar ' + style + '" role="progressbar" aria-valuenow="'+ progress +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
    		+ '<span class="sr-only">'+ progress +'%</span>'
  			+ '</div>'
				+ '</div></div><div class="pull-right" >'+ progress +'%</div></div>';
			},
			className:'text-right',
			attributes:{
				style:'width:122px;'
			}
		},
		{
			name:'年计划完成率',
			data:'MONTH_RATE',
			format:function(){
				var progress = (this.row.model.get('YTD')/this.row.model.get('YPLAN')*100).toFixed(0) - 0;
				var style = progress > 25 ? 'progress-bar-success' : 'progress-bar-danger';
				return '<div class="clearfix"><div class="pull-left" style="width:60px;margin:0 -10px 0 20px;"><div class="progress" style="margin:5px 5px 5px 0;height:10px;" title="'+ progress +'">'
  			+ '<div class="progress-bar ' + style + '" role="progressbar" aria-valuenow="'+ progress +'" aria-valuemin="0" aria-valuemax="100" style="width: '+ progress +'%">'
    		+ '<span class="sr-only">'+ progress +'%</span>'
  			+ '</div>'
				+ '</div></div><div class="pull-right" >'+ progress +'%</div></div>';
			},
			className:'text-right',
			attributes:{
				style:'width:122px;'
			}
		}
	]
});