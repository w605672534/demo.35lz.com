<template>
  <div class="deskstop">
    <div class="pcu-bg">
      <img src="/static/images/pcu-bg2.jpg">
    </div>
    <nav class="nav-head navbar navbar-default container">
      <div class=" container-fluid">
        <div class="navbar-header">
          <a class="nav-logo navbar-brand">
            <img alt="Brand" src="/static/images/logo.png">
          </a>
        </div>
        <ul class="nav-head-icon nav navbar-nav navbar-right">
          <li class="nav-search">
            <div class="main clearfix">
              <!-- Optional columns for small components -->
              <div class="column">
                <div id="sb-search" class="sb-search">
                  <form>
                    <input class="sb-search-input" placeholder="搜索关键词" type="text" v-model="searchWord" name="search" id="search">
                    <input class="sb-search-submit" type="submit" value="">
                    <span class="sb-icon-search"><i class="iconfont icon-search"></i></span>
                  </form>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a class="notice" id="showRight" href="javascript:void(0)">
              <i class="iconfont icon-tongzhi"></i>
              <span v-if="unreadNumer" class="message-corner badge">{{unreadNumer}}</span>
            </a>
          </li>
          <li>
            <a type="button" class="personal-center btn btn-primary desktop-icon-button hidden" data-toggle="modal" data-target=".modal-user">
              <i class="iconfont icon-yonghu"></i>
            </a>
          </li>
          <li>
            <router-link class="off"  to="/">
              <i class="iconfont icon-off"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <notification @notice="onNotice"></notification>

    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <div class="container">
            <div class="deskstop-row row">
              <div v-for="res in items" :key="res.id" class="col-md-2 col-xs-4 desktop-icon" :class="{wrapper: res.resources}">
                <div v-if="res.resources && resources.length">
                  <input type="checkbox" id="folder"/>
                  <label class="folder" for="folder"><span class="folder-title">生产管理</span></label>
                  <label class="fake-close-label" for="folder"></label>
                  <div class="folder-content container">
                    <div class="row">
                      <div class="col-md-12"><h4>生产管理</h4></div>
                      <div class="col-md-4 app"><a href="http://dqng.35lz.com/plan"><i><img src="/static/images/icon-plan.png"></i></a><span>生产方案</span></div>
                      <div class="col-md-4 app"><a><i><img src="/static/images/icon-duty.png"></i><span>值班记事</span></a></div>
                    </div>
                  </div>
                </div>
                <a v-else-if="res.app_type == 'link'" :href="res.app_url" target="_blank">
                  <img :src="'/static/images/' + res.icon">
                  <p>{{res.app_name}}</p>
                </a>
                <a v-else :href="ssoUrl + '/' + res.app_key" target="_blank">
                  <img :src="'/static/images/' + res.icon">
                  <p>{{res.app_name}}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let _ = require('lodash')
import Notification from 'components/desktop/Notification'
export default {
  name: 'desktop',
  components: {
    notification: Notification
  },
  data () {
    return {
      searchWord: '',
      isOpenNotification: false,
      unreadNumer: 0
    }
  },
  computed: {
    items () {
      if(this.searchWord){
        let _this = this;
        return _.filter(this.$store.state.resources, function(item){
          return item.app_name.indexOf(_this.searchWord) > -1
        }, this)
      }
      return this.$store.state.resources
    },
    ssoUrl () {
      return this.$store.state.server + 'api/passport/sso/ead'
    }
  },
  methods: {
    showNotice () {
      
    },
    onNotice (num) {
      this.unreadNumer = num
    }
  }
}
</script>
<style>

</style>
