<template>
  <div class="amap" style="height: 100%">
    <el-amap 
    :vid="vid" 
    :zoom="zoom" 
    :center="center" 
    :map-manager="amapManager" 
    :plugin="plugin" 
    :events="events">
      <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :label="marker.label" :title="marker.title" :icon="marker.icon ? marker.icon : option.icon"></el-amap-marker>
    </el-amap>
  </div>
</template>
<script>
import Vue from 'vue'
import AMap from 'vue-amap'
Vue.use(AMap)
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'c5b5b99464d5f315438c9e43de5d42b5',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})
import { AMapManager } from 'vue-amap';

let amapManager = new AMapManager();
export default {
  name: 'amap',
  props: {
    option: Object,
    store: Object,
    height: Number
  },
  data() {
    return {
      vid: 'amap-vue-' + new Date().getTime(),
      zoom: this.option.zoom ? this.option.zoom : 15,
      center: this.option.center ? this.option.center : [103.8343, 36.0611],
      events: {
        'moveend': () => {
          let mapCenter = this.amapManager.getMap().getCenter();
          this.center = [mapCenter.getLng(), mapCenter.getLat()];
        },
        'zoomchange': () => {
          this.zoom = this.amapManager.getMap().getZoom();
        },
        'click': (e) => {
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 1, // 默认显示卫星图
        showRoad: 1, // 默认显示路网
        events: {
          init(o) {
          }
        }
      }],
      amapManager: amapManager,
    }
  },
  computed: {
    markers: function() {
      var data = typeof this.option.markers === 'function' ? this.option.markers.apply(this,[this.store.data]) : this.option.markers;
      return data;
    }
  },
  methods: {
    getMap: function() {
    },
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    addZoom() {
      this.zoom++;
    },
    subZoom() {
      this.zoom--;
    },
    changeCenter() {
      this.center = [this.center[0] + 0.1, this.center[1] + 0.1];
    }
  }
}
</script>
<style scoped>

</style>
