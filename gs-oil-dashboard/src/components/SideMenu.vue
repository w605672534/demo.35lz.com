<template>
  <nav class="main-menu hidden-xs">
    <ul>
      <li v-for="(res, index) in resources"
      :class="{active: $route.path == '/page/' + res.path}"
      @click="active(index)" :key="res.id">
        <a :href="'#/page/' + res.path">
          <i class="fa material-icons fa-2x">{{res.icon}}</i>
          <span class="nav-text">{{res.name}}</span> 
        </a>
      </li>
    </ul>
    <ul class="logout">
      <li>
        <a href="#">
          <i class="fa material-icons fa-2x">settings</i>
          <span class="nav-text">设置</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SideMenu',
  data (){
    return {
      resources:[
        {
          name: '实时数据',
          icon: 'av_timer',
          path: 'wom.realtime'
        },
        {
          name: '总览',
          icon: 'donut_large',
          path: 'wom.overview'
        },
        {
          name: '收运趋势',
          icon: 'trending_up',
          path: 'wom.trend'
        },
        {
          name: '减排仪表盘',
          icon: 'network_check',
          path: 'wom.dashboard'
        },
        {
          name: '碳排放',
          icon: 'cached',
          path: 'wom.meter'
        },
        {
          name: '实时定位',
          icon: 'room',
          path: 'wom.map'
        },
        {
          name: '车辆调度',
          icon: 'directions_car',
          path: 'wom.schedule'
        },
        {
          name: '调度记录',
          icon: 'list',
          path: 'wom.dispatch'
        },
        {
          name: '派车单',
          icon: 'assignment_turned_in',
          path: 'wom.order'
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    active (index) {
      this.activeIndex = index
    }
  },
  created () {

  }
}
</script>
<style scoped>
.main-menu {
  width: 180px;
}

.main-menu li {
  width: 100%;
  border-bottom: solid 1px rgba(255,255,255, .15);
}

.fa {
  height: 45px;
}
</style>
