<template>
    <el-pagination
      :small="option.small"
      :current-page="pageData.current"
      :page-size="pageData.size"
      :total="pageData.count"
      :page-sizes="option.pageSizes"
      :layout="option.layout"
      @size-change="sizeChange"
      @current-change="currentChange">
    </el-pagination>
</template>
<script>
  export default {
      props: {
        option: Object,
        store: Object,
        height: Number
      },
      data() {
        return {
          //tableData: this.store.data
          pageData: {
            current: 1,
            size: 12,
            count: 4476
          }
        }
      },
      methods: {
        sizeChange(val) {
        },
        currentChange(val) {
          this.currentPage = val;
        }
      }
    }
</script>
