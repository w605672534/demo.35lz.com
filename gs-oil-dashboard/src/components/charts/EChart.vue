<template>
  <div class="echart"></div>
</template>

<script>
let _ = require('lodash')
import Vue from 'vue'
import echarts from 'echarts'
import aurora from '../../assets/js/vendor/echarts.aurora'
import dark from '../../assets/js/vendor/echarts.dark'
import light from '../../assets/js/vendor/echarts.light'
import dataMap from '../../assets/js/vendor/province/gansu'
import zqMap from '../../assets/js/vendor/zhaoqing'
let theme = localStorage.getItem('theme')
echarts.registerTheme('chalk', theme == 'dark' ? dark : theme == 'light' ? light : aurora)
echarts.registerMap('gansu', dataMap)
const ACTION_EVENTS = [
  'legendselectchanged',
  'legendselected',
  'legendunselected',
  'datazoom',
  'datarangeselected',
  'timelinechanged',
  'timelineplaychanged',
  'restore',
  'dataviewchanged',
  'magictypechanged',
  'geoselectchanged',
  'geoselected',
  'geounselected',
  'pieselectchanged',
  'pieselected',
  'pieunselected',
  'mapselectchanged',
  'mapselected',
  'mapunselected',
  'axisareaselected',
  'brush',
  'brushselected'
]
const MOUSE_EVENTS = [
  'click',
  'dblclick',
  'mouseover',
  'mouseout',
  'mousedown',
  'mouseup',
  'globalout'
]

var eqs = [];
var echartsIndex = 0;

export default {
  name: 'EChart',
  props: {
    option: Object,
    top: Number,
    bottom: Number,
    left: Number,
    right: Number,
    store: Object,
    activity: Number,
    autoResize: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    if(this.$el.clientHeight && this.$el.clientWidth){
      this.init()
      this.setOption()
    }
    if (this.option.mounted) {
      this.option.mounted.apply(this);
    }
    
  },
  beforeDestroy() {
    if (!eqs[this.chart]) {
      return
    }

    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHanlder)
    }
  },
  data () {
    return {
      chart: null
    }
  },
  watch: {
    store () {
      this.setOption()
    },
    activity () {
      if(!eqs[this.chart]){
        this.init()
        this.setOption()
      }
    }
  },
  methods: {
    init: function(){
      echartsIndex += 1
      this.chart = echartsIndex
      eqs[this.chart] = echarts.init(this.$el, 'chalk')
      for(let i in this.option.events){
        eqs[this.chart].on(i, function(){
          this.option.events[i].apply(this, arguments)
        }, this)
      }
    },
    resize: function(){
    },
    setOption: function(){
      function setData(object){
        object._data = object._data ? object._data : object.data
        if(typeof object._data == 'function'){
          object.data = object._data.apply(this, [this.store.data])
        }
        if(typeof object._data == 'string'){
          object.data = _.map(this.store.data, object._data)
        }
        if(object.markLine && typeof object.markLine.data == 'function'){
          object.markLine.data = object.markLine.data.apply(this, [this.store.data])
        }
      }
      this.option.series && this.option.series.map(setData, this);  
      _.isArray(this.option.xAxis) && this.option.xAxis.map(setData, this);
      _.isObject(this.option.xAxis) && setData.apply(this, [this.option.xAxis]);
      _.isArray(this.option.yAxis) && this.option.yAxis.map(setData, this);
      _.isObject(this.option.yAxis) && setData.apply(this, [this.option.yAxis]);
      this.option.execute && this.option.execute.apply(this, [this.store.data, this.option]);
      eqs[this.chart].setOption(this.option, true)
    },
    update: function(){
    },
    clear: function(){
    },
    getCharts(){
      return eqs[this.chart];
    }
  }
}
</script>
<style scoped>
  .echart {
    height: 100%;
  }
</style>
