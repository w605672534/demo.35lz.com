<template>
  <div class="circle-title" :style="titleStyle">
    <slot>{{title}}</slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    strokeWidth: {
      type: Number,
      default: 3
    },
    size: {
      type: Number,
      default: 60
    },
    fontSize: {
      type: Number,
      default: 28
    },
    color: {
      type: String,
      default: '#00bcd4'
    }
  },
  data() {
    return {
      titleStyle: {
        fontSize: this.fontSize + 'px',
        color: this.color,
        width: this.size + 'px',
        height: this.size + 'px',
        borderColor: this.color,
        borderWidth: this.strokeWidth + 'px',
        lineHeight: (this.size * 0.9) + 'px'
      }
    }
  },
  computed: {
    
  },
  methods: {
    
  }
} 
</script>
<style scoped>
.circle-title {
  width: 65px;
  height: 65px;
  border-color: #00bcd4;
  border-width: 3px;
  border-style: solid;
  border-radius: 50%;
  font-size: 31px;
  line-height: 59px;
  text-align: center;
  margin: auto;
}
</style>
