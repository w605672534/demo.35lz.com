<template>
  <div class="panel-body"
    :class="{onload: options.dataset}"
    :style="{height: height ? height + 'px' : 'auto', overflow: height ? '' : ''}"
    v-loading="loading"
    element-loading-background="rgba(0, 0, 0, .15)"
    >
    <div v-if="reload">Data loading failed, please reload</div>
    <component
    :is="widget"
    :option="options.option"
    :height="options.option && options.option.height ? options.option.height : height"
    :store="store"
    :params="params"
    :page-name="pageName"
    :activity="activity"
    @dialog="onDialog">
    </component>
    <dataset
    v-for="(dataset, index) in datasets"
    :key="index"
    :name="dataset.name"
    :ref="dataset.name"
    :page-name="pageName"
    :url="urlRoot + dataset.name"
    :params="dataset.params"
    :loop="dataset.loop"
    @load="onLoad"
    @loaded="onLoaded"
    @failed="onLoadedFail"
    >
    </dataset>
    <el-dialog
      :title="dialogView.title"
      :visible.sync="dialog"
      :width="dialogView.width"
      :fullscreen="false">
      <widget v-if="dialogView"
        :view="dialogView"
        :height="dialogView.height"
        :params="dialogView.params"
        :page-name="pageName"
        :activity="activity">
        </widget>
    </el-dialog>
  </div>
</template>

<script>
import Dataset from 'components/common/Dataset'
import EChart from 'components/charts/EChart'
import Table from 'components/webkit/Table'
import Grid from 'components/webkit/Grid'
import Static from 'components/webkit/Static'
import Block from 'components/webkit/Block'
import Form from 'components/webkit/Form'
import Pagination from 'components/webkit/Pagination'
import AMap from 'components/webkit/AMap'
import $ from 'jquery'
var _ = require('lodash')
var merge = require('webpack-merge')
export default {
  name: 'widget',
  props: ['view', 'height', 'params', 'pageName', 'activity'],
  components: {
    dataset: Dataset,
    echart: EChart,
    xtable: Table,
    grid: Grid,
    block: Block,
    static: Static,
    xform: Form,
    paging: Pagination,
    amap: AMap,
  },
  created () {
    let _this = this;
    try {
      require(['../../../view/' + _this.view.view.slice(5)], function (view) {
        _this.options = merge(_this.view, view)
        _this.mapParams(view.params)
        if(_this.options.dataset){
          if(typeof _this.options.dataset === 'string'){
            _this.datasets.push({name: _this.options.dataset})
          } else {
            var datasetGroup = _.groupBy(_this.options.dataset.items, function(item){
              return item.group ? item.group : 0;
            })

            _this.options.dataset.items.forEach(function(item){
              _this.datasets.push(item)
            })
          }
        } else {
          _this.initWidget()
        }
      })

    } catch(e) {

    }
  },
  updated() {

  },
  data () {
    return {
      widget: '',
      loading: false,
      reload: false,
      dialog: false,
      store: {},
      datasets: [],
      options: {},
      dialogView: Object,
      urlRoot: this.$store.state.server + '/oms/dataset/'
    }
  },
  computed: {
    param () {
      return this.$store.state.params[this.pageName]
    }
  },
  watch: {
    'param' : {
      handler: function(to, from){

      },
      deep: true
    }
  },
  methods: {
    mapParams (params) {

    },

    onClick: function () {
      this.$emit('active', this.key)
    },
    onLoad: function (dataset) {
      this.loading = true
      this.reload = false
      this.$emit('load')
    },
    onLoaded: function(name, data){
      this.loading = false
      this.$emit('loaded')
      this.store = data
      this.initWidget()
    },
    onLoadedFail: function(){
      this.loading = false
      this.reload = true
    },
    onDialog: function(view){
      view.params = merge(view.params, this.params)
      this.dialogView = view;
      this.dialog = true;
    },
    initWidget: function(){
      this.widget = this.options.widget
    },
    setParam: function(name, value){
      this.$store.commit('setParams', {name:this.pageName, key:name, value:value})
      this.$emit('param', name, value)
    }
  }
}
</script>
<style scoped>
.panel-body {
  padding: 0;
}
</style>
