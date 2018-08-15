define({
  widget:'echart',
  params:{
    'PRODUCT_ID':null
  },
  tooltip : {
    formatter: "{a} <br/>{b} : {c}%"
  },
  series : [
    {
      name:'业务指标',
      type:'gauge',
      radius:[0, '80%'],
      center : ['20%', '50%'],
      splitNumber: 5,       // 分割段数，默认为5
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']], 
          width: 5
        }
      },
      axisTick: {            // 坐标轴小标记
        splitNumber: 5,   // 每份split细分多少段
        length :8,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
            color: 'auto'
        }
      },
      axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto'
        }
      },
      splitLine: {           // 分隔线
        show: true,        // 默认显示，属性show控制显示与否
        length :10,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
            color: 'auto'
        }
      },
      pointer : {
        width : 3
      },
      title : {
        show : true,
        offsetCenter: [0, '110%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder'
        }
      },
      detail : {
        formatter:'{value}%',
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto',
          fontWeight: 'bolder',
          fontSize:16
        }
      },
      data:[{value: 80.5, name: '产品计划完成率'}]
    },
    {
      name:'业务指标',
      type:'gauge',
      radius:[0, '80%'],
      center : ['50%', '50%'],
      splitNumber: 5,       // 分割段数，默认为5
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']], 
          width: 5
        }
      },
      axisTick: {            // 坐标轴小标记
        splitNumber: 5,   // 每份split细分多少段
        length :8,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto'
        }
      },
      axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto'
        }
      },
      splitLine: {           // 分隔线
        show: true,        // 默认显示，属性show控制显示与否
        length :10,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          color: 'auto'
        }
      },
      pointer : {
        width : 3
      },
      title : {
        show : true,
        offsetCenter: [0, '110%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder'
        }
      },
      detail : {
        formatter:'{value}%',
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto',
          fontWeight: 'bolder',
          fontSize:16
        }
      },
      data:[{value: 95.5, name: '开工率'}]
    },
    {
      name:'业务指标',
      type:'gauge',
      radius:[0, '80%'],
      center : ['80%', '50%'],
      splitNumber: 5,       // 分割段数，默认为5
      axisLine: {            // 坐标轴线
        lineStyle: {       // 属性lineStyle控制线条样式
          color: [[0.2, '#ff4500'],[0.8, '#48b'],[1, '#228b22']], 
          width: 5
        }
      },
      axisTick: {            // 坐标轴小标记
        splitNumber: 5,   // 每份split细分多少段
        length :8,        // 属性length控制线长
        lineStyle: {       // 属性lineStyle控制线条样式
          color: 'auto'
        }
      },
      axisLabel: {           // 坐标轴文本标签，详见axis.axisLabel
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto'
        }
      },
      splitLine: {           // 分隔线
        show: true,        // 默认显示，属性show控制显示与否
        length :10,         // 属性length控制线长
        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
          color: 'auto'
        }
      },
      pointer : {
        width : 3
      },
      title : {
        show : true,
        offsetCenter: [0, '110%'],       // x, y，单位px
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          fontWeight: 'bolder'
        }
      },
      detail : {
        formatter:'{value}%',
        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
          color: 'auto',
          fontWeight: 'bolder',
          fontSize:16
        }
      },
      data:[{value: 95.5, name: '库存率'}]
    }
  ]
});