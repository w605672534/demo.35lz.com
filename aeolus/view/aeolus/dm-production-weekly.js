define({
  widget:'echart',
  legend: {
        x : 8,
        y : 8,
        data:[
            '制造一部','制造二部','制造三部','制造四部'
        ]
    },
  series : [
        {
            type : 'pie',
            center : ['20%', '55%'],
            radius : [35,48],
            x: '0%', // for funnel
            itemStyle: {
				        normal : {
				            label : {
				                formatter : function (a,b,c){return 100 - c + '%'},
				                textStyle: {
				                    baseline : 'top'
				                }
				            }
				        },
				    },
            data : [
                {name:'other', value:6,itemStyle:{
																			    normal : {
																			        color: '#ccc',
																			        label : {
																			            show : true,
																			            position : 'center'
																			        },
																			        labelLine : {
																			            show : false
																			        }
																			    },
																			    emphasis: {
																			        color: 'rgba(0,0,0,0)'
																			    }
																			}},
                {name:'制造一部', value:94,itemStyle: {
																				    normal : {
																				        label : {
																				            show : true,
																				            position : 'center',
																				            formatter : '{b}',
																				            textStyle: {
																				                baseline : 'bottom'
																				            }
																				        },
																				        labelLine : {
																				            show : false
																				        }
																				    	}
																						}
								}
            ]
        },
        {
            type : 'pie',
            center : ['40%', '55%'],
            radius : [35,48],
            x:'20%', // for funnel
            itemStyle: {
				        normal : {
				            label : {
				                formatter : function (a,b,c){return 100 - c + '%'},
				                textStyle: {
				                    baseline : 'top'
				                }
				            }
				        },
				    },
            data : [
                {name:'other', value:34,itemStyle:{
																			    normal : {
																			        color: '#ccc',
																			        label : {
																			            show : true,
																			            position : 'center'
																			        },
																			        labelLine : {
																			            show : false
																			        }
																			    },
																			    emphasis: {
																			        color: 'rgba(0,0,0,0)'
																			    }
																			}},
                {name:'制造二部', value:66,itemStyle: {
																					    normal : {
																					        label : {
																					            show : true,
																					            position : 'center',
																					            formatter : '{b}',
																					            textStyle: {
																					                baseline : 'bottom'
																					            }
																					        },
																					        labelLine : {
																					            show : false
																					        }
																					    }
																					}}
            ]
        },
        {
            type : 'pie',
            center : ['60%', '55%'],
            radius : [35,48],
            x:'40%', // for funnel
            itemStyle: {
				        normal : {
				            label : {
				                formatter : function (a,b,c){return 100 - c + '%'},
				                textStyle: {
				                    baseline : 'top'
				                }
				            }
				        },
				    },
            data : [
                {name:'other', value:15,itemStyle:{
																			    normal : {
																			        color: '#ccc',
																			        label : {
																			            show : true,
																			            position : 'center'
																			        },
																			        labelLine : {
																			            show : false
																			        }
																			    },
																			    emphasis: {
																			        color: 'rgba(0,0,0,0)'
																			    }
																			}},
                {name:'制造三部', value:85,itemStyle: {
																					    normal : {
																					        label : {
																					            show : true,
																					            position : 'center',
																					            formatter : '{b}',
																					            textStyle: {
																					                baseline : 'bottom'
																					            }
																					        },
																					        labelLine : {
																					            show : false
																					        }
																					    }
																					}}
            ]
        },
        {
            type : 'pie',
            center : ['80%', '55%'],
            radius : [35,48],
            x:'60%', // for funnel
            itemStyle: {
				        normal : {
				            label : {
				                formatter : function (a,b,c){return 100 - c + '%'},
				                textStyle: {
				                    baseline : 'top'
				                }
				            }
				        },
				    },
            data : [
                {name:'other', value:30,itemStyle:{
																			    normal : {
																			        color: '#ccc',
																			        label : {
																			            show : true,
																			            position : 'center'
																			        },
																			        labelLine : {
																			            show : false
																			        }
																			    },
																			    emphasis: {
																			        color: 'rgba(0,0,0,0)'
																			    }
																			}},
                {name:'制造四部', value:70,itemStyle: {
																					    normal : {
																					        label : {
																					            show : true,
																					            position : 'center',
																					            formatter : '{b}',
																					            textStyle: {
																					                baseline : 'bottom'
																					            }
																					        },
																					        labelLine : {
																					            show : false
																					        }
																					    }
																					}}
            ]
        }
    ]
});