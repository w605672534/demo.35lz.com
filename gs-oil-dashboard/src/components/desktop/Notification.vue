<template>
  <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-right" id="cbp-spmenu-s2">
      <div class="pull-left" style="width:100%; height:100%;overflow: hidden; padding-top: 86px;" >

        <div class="abp-spmenu-off" id="showRightPush" style="position: absolute;width: 100%;top: 0;">
          <a >
            <i class="iconfont icon-fanhui-copy" style="font-size: 18px;color: #1F2D3D"> </i>
            <span>消息通知</span>
          </a>
        </div>

        <!-- Nav tabs -->
        <ul class="message nav nav-tabs" role="tablist" style="position: absolute;width: 100%;top: 0;">
          <li role="presentation" class="active" @click="status='read'">
            <a role="tab" data-toggle="tab">未读</a>
          </li>
          <li role="presentation" @click="status='draft'">
            <a role="tab" data-toggle="tab">已读</a>
          </li>
        </ul>

        <!-- Tab panes -->
        <div class="tab-content" style="overflow: auto; height: 100%;">
          <div role="tabpanel" class="tab-pane active">
            <transition-group name="fade" mode="out-in">
              <notification-item v-for="item in messages"
                v-show="item.status !== status"
                :key="item.message_id"
                :app-name="item.app_id && getApp(item.app_id) ? getApp(item.app_id).app_name : '系统'"
                :icon="item.app_id && getApp(item.app_id) ? getApp(item.app_id).icon : 'xyt-logo.png'"
                created=""
                :title="item.messsage_title"
                :content="item.content"
                :url="item.app_id && item.redirect_uri ? ssoUrl + '/' + item.app_id + '?path=' + item.redirect_uri : null"
                receiver=""
                @read="onRead(item, $event)"
              ></notification-item>
            </transition-group>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
// import '../../assets/js/sails.io.js'
// io.sails.autoConnect = false
import NotificationItem from './NotificationItem'
import {Howl} from 'howler'
const sound = new Howl({
  src: ['./static/mp3/notification.mp3']
})
let socket
let _ = require('lodash')
export default {
  name: 'notification',
  components: {
    'notification-item': NotificationItem
  },
  data () {
    return {
      messages: [],
      status: 'read'
    }
  },
  computed: {
    user (){
      return this.$store.state.user
    },
    ssoUrl () {
      return this.$store.state.server + 'api/passport/sso/ead'
    },
    unreadNumer () {
      return this.messages ? _.filter(this.messages, function(item){
        return item.status !== 'read'
      }).length : 0
    }
  },
  created: function(){
    var _this = this
    socket = io.sails.connect(this.$store.state.server)
    socket.on('connect', this.onConnect)
    socket.on('reconnect', this.onConnect)
    socket.on('disconnect', function(e){
    })
    socket.on('online', this.addMessage)
  },
  mounted: function(){
    $('#carousel-example-generic').carousel({
      pause: true,
      interval: false
    });

    var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
      showRight = document.getElementById( 'showRight' ),
      showRightPush = document.getElementById( 'showRightPush' ),
      body = document.body;

    showRight.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( menuRight, 'cbp-spmenu-open' );
      disableOther( 'showRight' );
    };

    showRightPush.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( body, 'cbp-spmenu-push-toleft' );
      classie.toggle( menuRight, 'cbp-spmenu-open' );
      disableOther( 'showRightPush' );
    };

    function disableOther( a ) {
      if( a !== 'showRight' ) {
        classie.toggle( showRight, 'disabled' );
      }
      if( a !== 'showRightPush' ) {
        classie.toggle( showRightPush, 'disabled' );
      }
    };

    new UISearch( document.getElementById( 'sb-search' ) );
  },
  watch: {
    user (newVal, oldVal) {
      if(newVal.uid != oldVal.uid) {
        this.onConnect()
      }
    },
    unreadNumer () {
      this.$emit('notice', this.unreadNumer)
    }
  },
  methods: {
    getApp (appKey) {
      return _.find(this.$store.state.resources, function(app) {
        return app.app_key === appKey
      })
    },
    onConnect () {
      var _this = this
      socket.get('/api/message/online', {}, function(online){

      })
      socket.get('/api/message/message', {}, function(messages){
        _this.messages = typeof messages === 'object' ? messages : []
      })      
    },
    addMessage (msg) {
      sound.play()
      this.messages.unshift(msg.data)
    },
    onRead (message) {
      message.status !== 'read' && this.$http.post(this.$store.state.server + 'api/message/message/read/' + message.message_id)
      .then(function(response){
        message.status = 'read'
      },
      function(response){
        
      })
    }
  }
}
</script>

<style scoped>

</style>
