<template>
  <div class="page">
    <h2 v-if="title" class="bluedata-subtitle">{{title}}</h2>
    <el-carousel :interval="5000" arrow="always" :autoplay="false" :height='height' :initial-index="1" class="view-carousel" v-if="$route.params.name == 'company.index' && screenWidth <= 850">
      <el-carousel-item v-for="(column, index) in columns" :key="index" class="view-item">
        <view-item
          v-for="(view, index) in column.views"
          :key="index"
          :view="view"
          :params="params"
          :activeIndex="activeIndex"
          :page-name="name"
          :activity="activity"
          @active="onActive"
          @param="onParam"
        >
        </view-item>
      </el-carousel-item>
    </el-carousel>

    <div class="row" v-else>
      <div
      v-for="(column, index) in columns"
      :key="index"
      :class="[column.column ? prefixColumn + column.column : prefixColumn + '12']">
        <view-item
        v-for="(view, index) in column.views"
        :key="index"
        :view="view"
        :params="params"
        :activeIndex="activeIndex"
        :page-name="name"
        :activity="activity"
        @active="onActive"
        @param="onParam"
        >
        </view-item>
      </div>
    </div>
  </div>
</template>

<script>
import View from 'components/page/View'
const prefixColumn = 'col-sm-'
export default {
  name: 'Page',
  components: {'view-item': View},
  props: ['name', 'activity'],
  created () {
    let _this = this
    require(['../../../dashboard/' + _this.name.replace(/\./g,'/')], function (page) {
      _this.mapParams(page.params)
      _this.column(page.views)
      _this.title = page.title
    })
    _this.screenWidth = window.outerWidth
    _this.height = (window.innerHeight - 130) + 'px'
  },
  data () {
    return {
      prefixColumn: prefixColumn,
      activeIndex: null,
      params: {},
      views: [],
      columns: [],
      title:'',
      screenWidth:'',
      height:''
    }
  },
  methods: {
    mapParams (params) {
      params && params.forEach((item, index) => {
        this.$store.commit('setParams', {name:this.name, key:item.name, value:item.value})
      })
    },
    column (views) {
      var columns = [];
      var n = 0;
      views.forEach(function(view){
        if(view.column){
          columns.push({
            column: view.column,
            views: [view]
          });
        }else if(columns.length){
          columns[columns.length - 1]['views'].push(view);
        }
      });
      this.columns = columns;
    },
    onActive (key) {
      this.activeIndex = key
    },
    onParam (name, value) {
      this.$store.commit('setParams', {name:this.name, key:name, value:value})
    }
  }
}
</script>
<style scoped>
  .bluedata-subtitle{
    color: rgba(255,255,255,.6);
    text-align: center;
    font-size: 20px;
    margin-bottom: 45px;
    font-weight: 300;
  }

  .view-item{
    overflow-y: auto;
  }

</style>
