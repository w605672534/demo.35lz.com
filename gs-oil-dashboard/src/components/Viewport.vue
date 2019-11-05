<template>
  <div>
    <!--背景-->
    <!-- <div class="bluedata-bg">
      <div id="bubbles">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
      <img src="../assets/image/background-img1.jpg" width="100%" height="100%"/>
    </div> -->
    <app-menu></app-menu>
    <div class="bluedata-content">
      <div class="container-fluid">
        <div class="content-main">
          <transition-group name="fade" mode="out-in" appear>
            <template v-for="page in pages">
              <page
                v-if="currentPage == page"
                :name="page"
                :key="page"
                :activity="activity">
              </page>
            </template>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from './Menu'
import SideMenu from './SideMenu'
import Page from 'components/page/Page'
export default {
  name: 'Viewport',
  components: {
    'app-menu': Menu,
    'side-menu': SideMenu,
    'page': Page
  },
  created () {
    this.switchPage(this.$route.params.name)
  },
  watch: {
    '$route' (to, from) {
      this.switchPage(to.params.name)
      this.activity = new Date().getTime()
    }
  },
  data () {
    return {
      pages: [],
      currentPage: '',
      activity: new Date().getTime()
    }
  },
  methods: {
    addPage: function (page){
      this.pages.push(page);
    },
    switchPage: function (name) {
      if(this.pages.indexOf(name) === -1){
        this.addPage(name)
      }
      this.currentPage = name;
    }
  }
}
</script>
<style scoped>

</style>
