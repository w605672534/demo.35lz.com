<template>
  <div class="static">
    <component :is="option.component" :data="store.data"></component>
  </div>
</template>
<script>
export default {
  name:'static',
  props: {
    option: Object,
    store: Object,
    height: Number
  },
  data() {
    return {
    }
  },
  created (){
  },
  computed: {
  },
  methods: {
  }
} 
</script>
<style scoped>

</style>
