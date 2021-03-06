define({
	title:{
		text:'标题',
		subtext:'副标题'
	},
	refreshTime:0,
	url:'',
	widget:'webkit/grid',
	dataset:'HYMII/BAS/storage_block_qry',
	maxLength:4,
	series:{
		template:$('#tpl-grid-tank').html(),
		className:'col-xs-6 col-sm-3',
		format:function(){
			var key = (Math.random()*2).toFixed(0) - 0;
			var list = ['default','success','danger'];
			this.model.set('value',(Math.random()*46).toFixed(0) - 0);
			this.model.set('status',list[key]);
			//$('[data-toggle="tooltip"]').tooltip();
		},
		display:function(){
			this.$('.tank-body').animate({height: this.model.get('value') + 'px'}, 600);
		},
		attributes:{
			style:'margin:8px 0; padding-left: 5px; padding-right:5px; cursor:pointer;'
		}
	}
});