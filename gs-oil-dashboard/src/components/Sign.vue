<template>
  <div class="viewport" style="position: fixed;height:100%;width:100%;">
    <div id="particle-canvas" class="login-bg">
      <div class="box-login">
        <h2>{{appName}}</h2>
        <form role="form" @submit.prevent="login" v-loading="loading">
          <div class="form-group">
              <i class="material-icons">perm_identity</i>
              <input type="text" class="login-control form-control" placeholder="请输入用户名" v-model="account">
          </div>
          <div class="form-group">
              <i class="material-icons">lock_outline</i>
              <input type="password" class="login-control form-control" placeholder="请输入密码" v-model="password">
          </div>
          <button type="submit" class="btn-login btn btn-primary btn-block">登录</button>
        </form>
      </div>
      <div class="login-footer navbar-fixed-bottom">
        <p>Copyright © 2016-2017 Powered By YunTuOS</p>
      </div>
    </div>
    
  </div>
</template>
<script> 
import * as dd from 'dingtalk-jsapi';
export default {
  name: 'sign',
  data () {
    return {
      account: '',
      password: '',
      appName: DASHBOARD_APP_NAME,
      loading:false
    }
  },
  mounted: function(){
    var _this = this;
    var canvasDiv = document.getElementById('particle-canvas');
    var options = {
        particleColor: '#888',
        background: 'static/image/login-bg.jpg',
        interactive: true,
        speed: 'low',
        density: 'low'
    };
    var particleCanvas = new ParticleNetwork(canvasDiv, options);
    if (dd.env && dd.env.platform == 'notInDingTalk') {
      _this.autoLogin('', 'autologin');
    } else {
      dd.ready(function() {
        dd.runtime.permission.requestAuthCode({
            corpId: _this.$store.state.corpId,
            onSuccess: function(result) {
              _this.loading = true;
              _this.autoLogin(result.code, 'dingding');
            },
            onFail : function(err) {
              console.err(err);
            }
        });
      });
    }
  },
  methods: {
    reset: function() {
      this.account = '';
      this.password = '';
    },
    autoLogin(code, type) {
       var autoLoginUrl = '';
      if ('dingding' == type) {
        autoLoginUrl = this.$store.state.server + '/poten/dingding/login';
      } else {
        autoLoginUrl = this.$store.state.server + '/poten/autologin';
      }
      this.$http.post(autoLoginUrl , {
        code: code
      }).then(function(response){
        if(response.data && response.data.error){
          this.loading = false;
        } else {
          var user = response.data.data;
          this.$store.commit('setUser', user);
          this.loadRes(user);
        }
      },function(response){
        this.loading = false;
        if(response.data && response.data.error){
          this.$message({
            showClose: true,
            message: response.data.content,
            type: 'error'
          });
        } else {
          this.$message({
            showClose: true,
            message: '认证接口异常',
            type: 'error'
          });
        }
      });
    },
    login: function() {
      var loginUrl = this.$store.state.server + '/dashboard/api/signin'
      this.$http.post(loginUrl , {
        userId: this.account,
        password: this.password
      })
      .then(function(response){
        var user = response.data.data;
        this.$store.commit('setUser', user);
        this.loadRes(user);
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
            message: '认证接口异常',
            type: 'error'
          });
        }
      });
    },
    loadRes(user) {
      var resUrl = this.$store.state.server + '/dashboard/api/res'
      this.loading = false;
      this.$http.get(resUrl).then(function(response){
        var resources = response.data.resources
        var resourceList = [];
        var phoneUrl = [];
        resources[0].childs.forEach(function (res){
          var url = res.url;
          url = url.replace(/{org_id}/,user.orgId);
          url = url.replace(/{org_name}/,user.orgName);
          res['url'] = url;
          resourceList.push(res);
          if (url.indexOf('operation.') != -1) {
            phoneUrl.push(url);
          }
        });
        this.$store.commit('setResources', resourceList);
        if (resourceList[0].url.indexOf('station.') != -1) {
          if (window.innerWidth > 880) {
            this.$router.push(resourceList[0].url);
          } else {
            this.$router.push(phoneUrl[0]);
          }
        } else {
          this.$router.push(resourceList[0].url);
        }
        this.reset()
      },function(response){
        this.$emit('failed')
      })
    }
  }
}
</script>
