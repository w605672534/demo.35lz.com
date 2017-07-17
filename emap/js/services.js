angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '天然气分公司',
    lastText: '12 月份生产装置排名',
    face: 'img/icons/logo.png',
    path: '/tab/chats'
  }, {
    id: 1,
    name: '油气加工二大队',
    lastText: '12 月份月度检查排名',
    face: 'img/icons/logo.png',
    path: '/tab/chats'
  }, {
    id: 2,
    name: '萨南深冷站',
    lastText: '12 月份排版绩效考核排名',
    face: 'img/icons/device-production.png',
    path: '/tab/chats'
  }, {
    id: 3,
    name: '储运管理平台',
    lastText: '管道操作令通知',
    face: 'img/icons/stms.png',
    path: '/tab/chats'
  }, {
    id: 4,
    name: '基础信息平台',
    lastText: '庄磊上传了《压缩机说明书》',
    face: 'img/icons/documents.png',
    path: '/tab/chats'
  }, {
    id: 5,
    name: '实时数据',
    lastText: '1 小时前更新',
    face: 'img/icons/node.png',
    num: 2,
    path: '/app'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Apps', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var apps = [{
    id: 0,
    name: '生产指挥',
    face: 'img/icons/production.png',
    path: '/tab/chats'
  }, {
    id: 2,
    name: '生产 KPI',
    face: 'img/icons/kpi.png',
    path: '/tab/chats'
  }, {
    id: 3,
    name: '基层平台',
    face: 'img/icons/device-production.png',
    path: '/tab/chats'
  }, {
    id: 4,
    name: '培训门户',
    face: 'img/icons/train-portal.png',
    path: '/tab/chats'
  }, {
    id: 5,
    name: '储运管理',
    face: 'img/icons/stms.png',
    path: '/tab/chats'
  }, {
    id: 6,
    name: '基础信息',
    face: 'img/icons/documents.png',
    path: '/tab/chats'
  }, {
    id: 7,
    name: '设备维修维护',
    face: 'img/icons/gas-device.png',
    path: '/tab/chats'
  }, {
    id: 8,
    name: '装置问题',
    face: 'img/icons/oil-device.png',
    path: '/tab/chats'
  }, {
    id: 9,
    name: '电力抢修',
    face: 'img/icons/booster.png',
    path: '/tab/chats'
  }, {
    id: 10,
    name: '实时数据',
    face: 'img/icons/node.png',
    num: 2,
    path: '/app'
  }, {
    id: 11,
    name: '轻烃库存',
    face: 'img/icons/lh-stock.png',
    path: '/tab/chats'
  }, {
    id: 12,
    name: '摄像监控',
    face: 'img/icons/video-camera.png',
    path: '/tab/chats'
  }, {
    id: 13,
    name: '巡检路线图',
    face: 'img/icons/location-marker.png',
    path: '/tab/chats'
  }];

  return {
    all: function() {
      return apps;
    },
    remove: function(app) {
      apps.splice(apps.indexOf(app), 1);
    },
    get: function(appId) {
      for (var i = 0; i < apps.length; i++) {
        if (apps[i].id === parseInt(appId)) {
          return apps[i];
        }
      }
      return null;
    }
  };
})

.factory('Nodes', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var nodes = [{
    id: 0,
    name: '装置操作手册',
    face: 'img/file-icons/document-pdf.png',
    lastText: '昨日更新'
  }, {
    id: 2,
    name: '动静设备台账',
    face: 'img/file-icons/folder.png',
    lastText: '2 天前上传《动静设备台账 V1.0》'
  }, {
    id: 3,
    name: '操作规程',
    face: 'img/file-icons/folder.png'
  }, {
    id: 4,
    name: '应急预案',
    face: 'img/file-icons/folder.png',
    num: 1
  }, {
    id: 5,
    name: '应知应会',
    face: 'img/file-icons/folder-video.png'
  }, {
    id: 6,
    name: '设备说明书',
    face: 'img/file-icons/office-doc.png'
  }];

  return {
    all: function() {
      return nodes;
    },
    remove: function(node) {
      nodes.splice(nodes.indexOf(node), 1);
    },
    get: function(nodeId) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].id === parseInt(nodeId)) {
          return nodes[i];
        }
      }
      return null;
    }
  };
})

.factory('Tags', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var tags = [{
    name: '进装置原料气流量',
    unit:'m3/h',
    range: '23000-31000',
    num: 27594
  }, {
    name: '外输干气压力',
    unit:'MPa',
    range: '0.7-1.35',
    num: 0.82
  }, {
    name: '压缩机出口后冷却器压力',
    unit:'MPa',
    range: '2.8-3.45',
    num: 3.23
  }, {
    name: '脱甲烷塔顶压力',
    unit:'MPa',
    range: '0.9-1.2',
    num: 1.09
  }, {
    name: '入口洗涤分离器液位',
    unit:'m3/h',
    range: '5-25',
    num: 5
  }, {
    name: '一级入口压力',
    unit:'KPa',
    range: '45-100',
    num: 85
  }, {
    name: '润滑油压力',
    unit:'KPa',
    range: '276-580',
    num: 480
  }, {
    name: '脱水后原料气压力',
    unit:'MPa',
    range: '2.8-3.45',
    num: 3.32
  }];

  return {
    all: function() {
      return tags;
    },
    remove: function(tag) {
      tags.splice(tags.indexOf(tag), 1);
    },
    get: function(tagId) {
      for (var i = 0; i < tags.length; i++) {
        if (tags[i].id === parseInt(tagId)) {
          return tags[i];
        }
      }
      return null;
    }
  };
});
