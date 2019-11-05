<template>
  <div>
    <div v-if="option.actions">
      <el-button-group v-for="(action, i) in option.actions" :key="i">
        <el-button
          v-for="(item, j) in action.group"
          :key="j"
          :loading="item._loading"
          :size="item.size"
          :disabled="item.disabled"
          :native-type="item.nativeType"
          :type="item.type?item.type:'primary'"
          @click="actionClick(item.call, item)">
          <i v-if="!item.iconRight" :class="['el-icon-'+item.icon, 'el-icon--left']"></i>
          {{item.text}}
          <i v-if="item.iconRight" :class="['el-icon-'+item.icon, 'el-icon--right']"></i>
        </el-button>
      </el-button-group>
      <el-button
        v-for="(action, k) in option.actions"
        v-if="!action.group"
        :key="k"
        :plain="action.plain"
        :loading="action.loading"
        :size="action.size"
        :disabled="action.disabled"
        :native-type="action.nativeType?action.nativeType:'primary'"
        :type="action.type"
        @click="actionClick(action.call)">
        <i v-if="!action.iconRight" :class="['el-icon-'+action.icon, 'el-icon--left']"></i>
        {{action.text}}
        <i v-if="action.iconRight" :class="['el-icon-'+action.icon, 'el-icon--right']"></i>
      </el-button>
    </div>
    <el-table
      :data="items"
      :stripe="option.stripe"
      :border="option.border"
      :highlight-current-row="option.highlightCurrentRow"
      :height="height?height:null"
      @row-click="rowClick"
      @cell-click="cellClick"
      @selection-change="selectionChange"
      :row-key="option.getRowKeys">
      <el-table-column type="expand" v-if="option.expand">
        <template slot-scope="props">
          <el-form inline>
            <el-form-item
              v-for="(series, l) in option.series"
              v-if="series.hide != 'all'"
              :key="l"
              :label="series.name">
              <span>{{ props.row[series.data] }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <template v-for="(series, m) in option.series">
        <el-table-column
          v-if="!series.hide && !series.component"
          :key="m"
          :filters="filters(series.data, series.filter)"
          :filter-method="series.filter"
          :class-name="series.className"
          :type="series.type"
          :show-overflow-tooltip="series.overflow"
          :fixed="series.fixed"
          :sortable="series.sortable"
          :formatter="series.formatter"
          :align="series.align"
          :header-align="series.headerAlign"
          :width="series.width"
          :min-width="series.minWidth"
          :label="series.name"
          :prop="series.data"
          :reserve-selection="series.reserveSelection">
          <template v-for="(group, n) in series.group">
            <el-table-column
              v-if="!group.hide && !group.component"
              :key="n"
              :filters="filters(group.data, group.filter)"
              :filter-method="group.filter"
              :class-name="group.className"
              :type="group.type"
              :show-overflow-tooltip="group.overflow"
              :fixed="group.fixed"
              :sortable="group.sortable"
              :formatter="group.formatter"
              :align="group.align"
              :header-align="group.headerAlign"
              :width="group.width"
              :min-width="group.minWidth"
              :label="group.name"
              :prop="group.data">
            </el-table-column>
            <el-table-column
              v-if="!group.hide && group.component"
              :key="n"
              :filters="filters(group.data, group.filter)"
              :filter-method="group.filter"
              :class-name="group.className"
              :type="group.type"
              :show-overflow-tooltip="group.overflow"
              :fixed="group.fixed"
              :sortable="group.sortable"
              :formatter="group.formatter"
              :align="group.align"
              :header-align="group.headerAlign"
              :width="group.width"
              :min-width="group.minWidth"
              :label="group.name"
              :prop="group.data">
              <template slot-scope="props">
                <component :is="group.component" :row="props.row" :data="props.row[group.data]"></component>
              </template>
            </el-table-column>
          </template>
        </el-table-column>
        <el-table-column
          v-if="!series.hide && series.component"
          :key="m"
          :filters="filters(series.data, series.filter)"
          :filter-method="series.filter"
          :class-name="series.className"
          :type="series.type"
          :show-overflow-tooltip="series.overflow"
          :fixed="series.fixed"
          :sortable="series.sortable"
          :formatter="series.formatter"
          :align="series.align"
          :header-align="series.headerAlign"
          :width="series.width"
          :min-width="series.minWidth"
          :label="series.name"
          :prop="series.data">
          <template slot-scope="props">
            <component :is="series.component" :row="props.row" :data="props.row[series.data]"></component>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      v-if="option.pagination"
      :small="option.small"
      :pager-count="5"
      :current-page="page"
      :total="store.data.length"
      :page-size="pageSize"
      :page-sizes="option.pageSizes"
      :layout="option.layout"
      @size-change="sizeChange"
      @current-change="currentChange">
    </el-pagination>
  </div>
</template>
<script>
  let _ = require('lodash');
  export default {
    props: {
      option: Object,
      store: Object,
      height: Number,
      pageName: String
    },
    data() {
      return {
        page: 1,
        pageSize: this.option.pagination && this.option.pagination.size ? this.option.pagination.size : 10
      }
    },
    computed: {
      items () {
        if (this.option.pagination) {
          return this.store.data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        }
        if (this.option.maxLength) {
          return this.store.data.slice(0, this.option.maxLength)
        }
        return this.store.data
      }
    },
    mounted: function(){
      this.option.mounted && this.option.mounted.apply(this)
    },
    created: function(){
      this.option.created && this.option.created.apply(this)
    },
    methods: {
      rowClick(row, event, column) {
        this.option.rowClick && this.option.rowClick.apply(this, [row, event, column])
      },
      cellClick(row, column, cell, event) {
        this.option.cellClick && this.option.cellClick(row, column, cell, event)
      },
      selectionChange(selection) {
        this.option.selectionChange && this.option.selectionChange.apply(this, [selection])
      },
      filters (name, filter) {
        return !filter ? null : _.map(_.uniq(_.map(this.store.data, name)), function (item) {
            return {text: item, value: item}
          })
      },
      sizeChange(val) {
        this.pageSize = val;
      },
      currentChange(val) {
        this.page = val;
      },
      actionClick(call, item) {
        this.$set(item, '_loading', true);
        call.apply(this, [item]);
      }
    }
  }
</script>
