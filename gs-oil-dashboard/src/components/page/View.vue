<template>
  <div class="view">
    <div class="panel panel-default" :class="view.className">
      <div v-if="view.title" class="panel-heading clearfix">
        <h3 class="panel-title">{{view.title}}</h3>
        <div v-if="view.filter" class="pull-right">
          <el-select v-model="city" placeholder="请选择" size="small" style="width:100px;">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
          <el-date-picker
            type="date"
            size="small"
            placeholder="选择日期"
            format="yyyyMMdd"
            @change="onChange('date', $event)"
            v-model="param.date"
            >
          </el-date-picker>
        </div>
      </div>
      <widget
      :view="view"
      :height="view.height"
      :params="params"
      :page-name="pageName"
      :activity="activity">
      </widget>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Widget from 'components/page/Widget'
import CircleTitle from 'components/webkit/CircleTitle'
const prefixColumn = 'col-sm-'
var _ = require('lodash')
var merge = require('webpack-merge')
Vue.component('widget', Widget)
Vue.component('x-circle-title', CircleTitle)
export default {
  name: 'View',
  props: ['view', 'params', 'pageName', 'activity'],
  data () {
    return {
      prefixColumn: prefixColumn,
      options: ['兰州市', '城关区', '七里河区', '安全宁区', '新区'],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        }
      },
      city: '兰州市',
      date: '',
      value: '',
      param: {
        date: '20170101'
      }
    }
  },
  created () {

  },
  methods: {
    onChange (key, value) {
      this.$store.commit('setParams', {name:this.pageName, key:key, value:value})
    }
  }
}
</script>
<style scoped>
.el-loading-mask{
  background-color: none;
}
</style>
