define({
	widget:'webkit/grid',
	dataset:'HYMII/UOM/corp_unit_qry',
  params:{
    'UNIT_ID':null
  },
  tooltip:true,
  maxLength:1,
	series:{
		template:$('#tpl-unit-detail').html()
	}
});