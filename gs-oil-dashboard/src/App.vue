<template>
  <div id="app" :class="{'app-aurora':theme == 'aurora' , 'app-light' : theme == 'light' , 'app-dark' : theme == 'dark'}">
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return {
      theme:this.$store.state.theme
    }
  },
  watch: {
    '$store.state.theme': function () {
      this.theme = this.$store.state.theme
    }
  },
}
</script>

<style>

.viewport {
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
