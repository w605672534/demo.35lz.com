define({
	widget:'echart',
  dataset:'HYMII/UOM/corp_unit_qry',
  params:{
    'UNIT_ID':null
  },
  tooltip : {
    formatter: "{a} <br/>{b} : {c}%"
  },
  legend:{
    show:false
  },
  series : [
    {
      name:'个性化仪表盘',
      type:'gauge',
      center : ['50%', '50%'],    // 默认全局居中
      radius : [0, '75%'],
      startAngle: 140,
      endAngle : -140,
      min: 0,                     // 最小值
      max: 100,                   // 最大值
      precision: 0,               // 小数精度，默认为0，无小数点
      splitNumber: 10,             // 分割段数，默认为5
      axisLine: {            // 坐标轴线
        show: true,        // 默认显示，属性show控制显示与否
        lineStyle: {       // 属性lineStyle控制线条样式
          color: '#48b', 
          width: 5
        }
      },
      axisTick: {            // 坐标轴小标记
        show: true,        // 属性show控制显示与否，默认不显示
        splitNumber: 5,    // 每份split细分多少段
        length :8,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: '#48b',
          width: 1,
          type: 'solid'
        }
      },
      axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        show: true,
        formatter: function(v){
          switch (v+''){
              case '': return '弱';
              case '': return '低';
              case '': return '中';
              case '': return '高';
              default: return '';
          }
        },
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#48b'
        }
      },
      splitLine: {           // 分隔线
        show: true,        // 默认显示，属性show控制显示与否
        length :10,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          color: '#48b',
          width: 2,
          type: 'solid'
        }
      },
      pointer : {
        length : '80%',
        width : 5,
        color : '#228b22'
      },
      title : {
        show : false,
        offsetCenter: ['-65%', -25],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#333',
          fontSize : 14
        }
      },
      detail : {
        show : true,
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        borderColor: '#ccc',
        width: 100,
        height: 40,
        offsetCenter: ['-60%', -15],       // x, y，单位px
        formatter:'{value}%',
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: '#333',
          fontSize : 20
        }
      },
      data:function(rows){
        return rows.length ? [{value: (rows[0].UNIT_LOAD_VALUE - 0).toFixed(0), name: rows[0].UNIT_NAME}] 
          : [{value: 0, name: '装置负荷'}];
      }
    }
  ]
});