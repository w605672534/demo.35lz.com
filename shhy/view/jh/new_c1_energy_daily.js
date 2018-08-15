define({
	title:{
		text:'标题',
		subtext:'副标题'
	},
	refreshTime:0,
	url:'',
	widget:'webkit/grid',
	dataset:'HYMII/JH/c1_energy_qry',
	maxLength:3,
	series:{
		template:$('#tpl-grid-energy').html(),
		className:'col-xs-12 col-sm-4',
		format:function(){

			//$('[data-toggle="tooltip"]').tooltip();
		},
		display:function(){
			if(this.model.get('ENERGY_NAME') === '水'){
				this.$('div').addClass('bg-info');
			}
		},
		attributes:{
			style:'margin:5px 0; padding-left: 5px; padding-right:5px; cursor:pointer;'
		}
	}
});