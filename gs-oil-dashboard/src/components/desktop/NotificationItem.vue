<template>
  <div class="message-content list-group">
    <i class="message-id-wd message-id iconfont" :class="{'icon-xinxiweidu': status == 'unread'}"></i>
    <a type="button" class="media list-group-item">
      <div class="media-left media-top list-group-item-image">
        <a>
          <img class="media-object" :src="'/static/images/' + icon" alt="..." >
        </a>
      </div>
      <a class="media-body list-group-item-image-contnet" :href="url" @click="onClick" target="_blank">
        <h5 class="media-heading">{{appName}}</h5>
        <p>{{content}}</p>
      </a>
      <p>
        <!--
        <i class="tab-pane-icon iconfont icon-shijian"></i>
        <span class="message-time message-user-information">{{created}}</span> 
        <i class="tab-pane-icon iconfont icon-yonghu"></i>
        <span class="message-user-information">{{receiver}}</span>
        -->
      </p>
    </a>
  </div>
</template>
<script>
export default {
  name: 'notification-item',
  props: ['appName', 'icon', 'title', 'content', 'created', 'receiver', 'status', 'url'],
  data () {
    return {
      
    }
  },
  methods: {
    onClick () {
      this.$emit('read')
    }
  }
}
</script>
