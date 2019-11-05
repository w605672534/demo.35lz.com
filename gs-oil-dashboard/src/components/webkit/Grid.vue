<template>
  <div class="grid" :style="{padding: option.gutter/2 ? option.gutter/2 : 10 + 'px'}">
    <el-row :gutter="option.gutter ? option.gutter : 20">
      <template v-for="(item, index) in items">
        <el-col
        :key="index"
        :span="option.column ? option.column : 6"
        :xs="option.xs ? option.xs : 8">
          <component :is="option.component" :data="item"></component>
        </el-col>
      </template>
    </el-row>
    <el-pagination
      v-if="option.pagination"
      small
      layout="prev, pager, next"
      :total="store.data.length"
      :page-size="pageSize"
      @current-change="onPagination">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'grid',
  props: {
    option: Object,
    store: Object,
    height: Number
  },
  data() {
    return {
      page: 1,
      pageSize: this.option.pagination && this.option.pagination.size ? this.option.pagination.size : 10
    }
  },
  computed: {
    items () {
      if(this.option.pagination){
        return this.store.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
      }

      if(this.option.maxLength){
        return this.store.data.slice(0, this.option.maxLength)
      }

      return this.store.data
    }
  },
  created () {

  },
  methods: {
    onPagination (currentPage) {
      this.page = currentPage
    }
  }
} 
</script>
<style scoped>
.grid {

}
.el-pagination {
  text-align: center;
  margin: 10px;
}
</style>
