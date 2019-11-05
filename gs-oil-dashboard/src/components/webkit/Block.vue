<template>
  <div class="block">
    <el-row v-if="mode === 'grid'" :gutter="option.gutter ? option.gutter : 10">
      <template v-for="(view, index) in option.views">
        <el-col 
        :key="index"
        :span="view.column ? view.column : 6"
        :xs="view.xs ? view.xs : 8">
          <widget
          :view="view"
          :height="view.height"
          :params="params" 
          :page-name="pageName"
          :activity="activity">
          </widget>
        </el-col>
      </template>
    </el-row>
    <el-carousel v-if="mode === 'carousel'" :interval="5000" arrow="always" :autoplay="false">
      <el-carousel-item  v-for="(view, index) in option.views" :key="index">
        <widget
        :view="view"
        :height="view.height"
        :params="params" 
        :page-name="pageName"
        :activity="activity">
        </widget>
      </el-carousel-item>
    </el-carousel>
    <el-tabs v-if="mode === 'tabs'" type="border-card" @tab-click="onTabClick">
      <el-tab-pane  v-for="(view, index) in option.views" 
        :label="view.title ? view.title : index"
        :key="index"
        >
        <widget
        :view="view"
        :height="view.height"
        :params="params" 
        :page-name="pageName"
        :activity="queue[index]"
        >
        </widget>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: {
    option: Object,
    store: Object,
    height: Number,
    params: Object,
    pageName: String,
    activity: Number
  },
  data() {
    return {
      mode: this.option.mode ? this.option.mode : 'grid',
      queue: {}
    }
  },
  computed: {
    
  },
  methods: {
    onTabClick (tab) {
      this.queue[tab.index] = new Date().getTime()
    }
  },
  created () {
    this.option.views.forEach(function(item, index){
      item.view = typeof item.view == 'function' ? item.view.apply(this) : item.view
      this.$set(this.queue, index, new Date().getTime())
    }, this)
  }
}
</script>
<style scoped>

</style>
