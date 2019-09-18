define({
	name:'pm',
	params:[
		{
			name:'产品',
			title:'产品',
			index:0
		}
	],
	views:[
		{
			id:'1',
			title:'产品质量周报',
			column:6,
			height:613,
			view:'view/aeolus/production-qweekly',
			scroll:'auto'
		},
		{
			id:'2',
			title:'产品质量详情',
			column:6,
			height:370,
			view:'view/aeolus/production-q-detail',
			display:function(){
				this.dashboard.params.on('change:产品', function(e){
					this.$('.panel-heading>strong').text(this.dashboard.params.get('产品') + this.model.get('title'));
				}, this);
			}
		},
		{
			id:'3',
			title:'产品质量部门排行榜',
			height:180,
			view:'view/aeolus/production-q-dm-order',
			display:function(){
				this.dashboard.params.on('change:产品', function(e){
					this.$('.panel-heading>strong').text(this.dashboard.params.get('产品') + this.model.get('title'));
				}, this);
			}
		}
	]
});