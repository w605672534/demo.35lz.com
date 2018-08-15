define({
	widget:'webkit/grid',
	dataset:'HYMII/BAS/storage_block_qry',
	maxLength:1,
	series:{
		template:$('#tpl-grid-tank').html(),
		className:'col-sm-12',
		format:function(){
			var key = (Math.random()*2).toFixed(0) - 0;
			var list = ['default','success','danger'];
			this.model.set('value',(Math.random()*46).toFixed(0) - 0);
			this.model.set('status',list[key]);
		},
		display:function(){
			this.$('.tank-body').animate({height: this.model.get('value') + 'px'}, 600);
		},
		attributes:{
			style:'margin:50px 0; padding-left: 5px; padding-right:5px; cursor:pointer;'
		}
	}
});