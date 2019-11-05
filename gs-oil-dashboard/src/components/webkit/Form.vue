<template>
  <div class="form">
    <el-form :inline="true" ref="selfForm" class="demo-form-inline" @submit.native.prevent>
      <template v-for="(item, index) in items">
        <el-form-item :key="index" :label="item.label ? item.label : ''">
          <el-input
            v-if="'text' == item.control"
            v-model="model[item.name]"
            :placeholder="item.placeholder"
            @change="onChange(item.name, $event)">
          </el-input>
          <el-select
            v-if="'select' == item.control"
            v-model="model[item.name]"
            :placeholder="option.placeholder"
            @change="onChange(item.name, $event)">
            <el-option
              v-for="(option, j) in item.options"
              :key="j"
              :label="option.label"
              :value="option.value ? option.value : option">
            </el-option>
          </el-select>
          <el-switch
            v-if="'switch' == item.control"
            on-text=""
            off-text=""
            v-model="model[item.name]"
            @change="onChange(item.name, $event)">
          </el-switch>
          <el-checkbox-group
            v-if="'checkbox' == item.control"
            v-model="model[item.name]"
            @change="onChange(item.name, $event)">
            <el-checkbox
              v-for="(option, k) in item.options"
              :key="k"
              :label="option.label"
              :name="option.value ? option.value : option">
            </el-checkbox>
          </el-checkbox-group>
          <el-radio-group
            v-if="'radio' == item.control"
            v-model="model[item.name]"
            size="mini"
            @change="onChange(item.name, $event)">
            <el-radio-button
              v-for="(option, l) in item.options"
              :key="l"
              :label="option.value ? option.value : option">{{option.label ? option.label : option}}
            </el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-if="'month' == item.control"
            v-model="model[item.name]"
            :popper-class="popperClass"
            type="month"
            format="yyyy年MM月"
            value-format="yyyyMM"
            :placeholder="item.placeholder"
            :picker-options="item.options"
            @change="onChange(item.name, $event)">
          </el-date-picker>
          <el-date-picker
            v-if="'date' == item.control"
            v-model="model[item.name]"
            :popper-class="popperClass"
            type="date"
            format="yyyyMMdd"
            :placeholder="item.placeholder"
            :picker-options="item.options"
            @change="onChange(item.name, $event)">
          </el-date-picker>
          <el-date-picker
            v-if="'datetime' == item.control"
            v-model="model[item.name]"
            :popper-class="popperClass"
            type="datetime"
            :size="item.size"
            format="yyyyMMdd HH:mm"
            :placeholder="item.placeholder"
            :picker-options="item.options"
            @change="onChange(item.name, $event)">
          </el-date-picker>
        </el-form-item>
      </template>
      <el-form-item v-if="submit || reset">
        <el-button v-if="submit" type="primary" @click="onSubmit">{{submit}}</el-button>
        <el-button v-if="reset" @click="resetForm('selfForm')">{{reset}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { log } from 'util';
export default {
  name: 'form',
  props: {
    option: Object,
    store: Object,
    height: Number,
    pageName: String
  },
  data() {
    return {
      model: {area: ''},
      submit: '提交',
      reset: '重置',
      theme:this.$store.state.theme,
      popperClass:''
    }
  },
  computed: {
    items () {
      return this.option.series
    }
  },
  methods: {
    onSubmit () {

    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    onChange (key, value) {
      this.$store.commit('setParams', {name:this.pageName, key:key, value:value})
    },
    options (item) {
      return typeof item.options == 'function' ? item.options.apply(this, [this.store.data, this.option]) : item.options
    },
    changeTheme(theme) {
      this.$store.commit('setTheme', theme);
      location.reload();
    },
  },
  created () {
    this.reset = this.option.reset;
    this.submit = this.option.submit;
    this.popperClass = this.theme == 'aurora' ? 'app-aurora' : this.theme == 'light' ? 'app-light' : 'app-dark';
    this.items.forEach(function(item){
      var value = null
      if(this.store.data && item.valueKey){
        var labelKey = item.labelKey ? item.labelKey : item.valueKey;
        item.options = this.store.data.map(function(option){
          return {label:option[labelKey], value:option[item.valueKey]}
        })
      }

      if(item.value){
        value = item.value
      }

      if(item.valueIndex !== undefined && this.store.data && this.store.data[item.valueIndex] && item.valueKey){
        value = this.store.data[item.valueIndex][item.valueKey]
      }

      if(item.change){
        this.$watch('model.' + item.name, function(newVal, oldVal){
          item.change.apply(this, [newVal, oldVal])
        })
      }
      this.$set(this.model, item.name, item.value ? item.value : value)
      value !== null && this.$store.commit('setParams', {name:this.pageName, key:item.name, value:value})
    }, this)
  },
  watch: {
    '$store.state.theme': function () {
      this.theme = this.$store.state.theme;
      this.popperClass = this.theme == 'aurora' ? 'app-aurora' : this.theme == 'light' ? 'app-light' : 'app-dark';
    }
  }
}
</script>
<style scoped>
.form {
  margin: 15px;
}
.el-form-item {
  margin-bottom: 0;
}
</style>
