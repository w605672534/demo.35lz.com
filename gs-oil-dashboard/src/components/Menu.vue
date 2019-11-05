<template>
  <nav class="bluedata-nav navbar navbar-expand-lg navbar-dark collapse navbar-collapse navbar navbar-default" id="bs-navbar" role = "navigation">
    <div class="nav-bg"></div>
    <h1 class="bluedata-logo" ><span>陇油稽查</span>
    </h1>
    <div class="navbar-brand current-time" href="#" ><i class="iconfont icon-time-o"></i><span class="data-time">{{today}}</span></div>
    <button class="collapse-panel-button navbar-toggler" type="button" @click="collapse1 = !collapse1" v-if="$route.params.name != 'company.index' 
                                                      && $route.params.name != 'operation.home'" style="positon:absolute;z-index:9">
      <i class="iconfont icon-caidan"></i>
    </button>
    <!--导航右侧按钮-->
    <div class="collapse-panel collapse navbar-collapse" :class="{show: collapse1}">
      <div class="navbar-nav ml-auto navbar-header active" @click="collapse1 = false"></div>
    </div>
    <div @click="collapse1 = false" v-if="collapse1" style="position:fixed;top:0;left:0;z-index:10001;overflow:hidden;width:100%;height:100%;background-color:rgba(0,0,0,.4);"></div>
    <div class="change-theme mobile-change-theme" v-if="$route.params.name == 'company.index'
        || $route.params.name.indexOf('factory.') != -1
        || $route.params.name.indexOf('station.') != -1
        || $route.params.name.indexOf('operation.') != -1">
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="iconfont icon-palette" style="font-size:22px"></i>
        </span>
        <el-dropdown-menu slot="dropdown" :class="{'app-aurora':theme == 'aurora' , 'app-light' : theme == 'light' , 'app-dark' : theme == 'dark'}">
          <el-dropdown-item @click.native="changeTheme('light')">白色主题</el-dropdown-item>
          <el-dropdown-item @click.native="changeTheme('dark')">黑色主题</el-dropdown-item>
          <el-dropdown-item @click.native="changeTheme('aurora')">蓝色主题</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-button class="sign-out" type="text" @click="signout()"><i class="change-theme iconfont icon-tuichu" style="font-size:22px"></i></el-button>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data (){
    return {
      today: null,
      collapse: false,
      collapse1:false,
      theme:this.$store.state.theme,
      timer: null
    }
  },
  created () {
    let _this = this;
    this.timer = setInterval(function(){
      let date = new Date();
      _this.today = [
        date.getFullYear(), ' 年 ',
        date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 , '月',
        date.getDate() < 10 ? '0' + date.getDate() : date.getDate(), '日 ',
        date.getHours() < 10 ? '0' + date.getHours() : date.getHours(), ':',
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(), ':',
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(), ''
      ].join('')
    }, 1000);
  },
  methods:{
    changeTheme(theme) {
      this.$store.commit('setTheme', theme);
      location.reload();
    },
    signout() {
      this.$store.commit('removeUser');
      this.$store.commit('removeResources');
      var loginOutUrl = this.$store.state.server + '/dashboard/api/signout'
      this.$http.post(loginOutUrl , {})
      .then(function(response){
        this.$message({
            showClose: true,
            message: response.data.content,
             type: 'success'
        });
        this.$store.state.resources = null
        this.$router.push('/sign')
        clearInterval(this.timer)
       
      },
      function(response){
        if(response.data && response.data.error){
          this.$message({
            showClose: true,
            message: response.data.error,
            type: 'error'
          });
        } else {
          this.$message({
            showClose: true,
            message: '退出异常',
            type: 'error'
          });
        }
        this.$router.push('/sign')
      });
    },
  },
  watch: {
    '$store.state.theme': function () {
      this.theme = this.$store.state.theme
    }
  }
}
</script>

