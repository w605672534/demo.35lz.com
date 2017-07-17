angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $ionicNavBarDelegate, $location) {
  $ionicNavBarDelegate.showBar(false);
  $scope.login = function() {
    $location.path('/tab/dash');
  };
})

.controller('DashCtrl', function($scope) {
  $scope.initCharts = function(){
    $.plot($("#bar-chart1"),
      [
        {data:[[0,15],[1,15],[2,19],[3,28],[4,30],[5,37],[6,35],[7,38],[8,48],[9,43],[10,38],[11,32],[12,38]],label:"Page Views"},
        {data:[[0,7],[1,10],[2,15],[3,23],[4,24],[5,29],[6,25],[7,33],[8,35],[9,38],[10,32],[11,27],[12,32]],label:"Unique Visitor"}
      ],
      {
        series:{
          bars:{
            align:"center",
            show:!0,
            lineWidth:1,
            barWidth:.6,
            fill:!0,
            fillColor:{
              colors:[
                {opacity:1},
                {opacity:1}
              ]
            }
          },
          shadowSize:2
        },
        legend:{
          show:!1
        },
        grid:{
          margin:0,
          show:1,
          labelMargin:10,
          axisMargin:500,
          hoverable:!0,
          clickable:!0,
          tickColor:"rgba(0,0,0,0.15)",
          borderWidth:0
        },
        colors:['#aec0d8','#82a0c7'],
        xaxis:{
          ticks:11,
          tickDecimals:0
        },
        yaxis:{
          autoscaleMargin:.5,
          ticks:4,
          tickDecimals:0
        }
      }
    );
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('DriverCtrl', function($scope, Nodes) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.nodes = Nodes.all();
  $scope.remove = function(node) {
    Nodes.remove(node);
  };
})

.controller('AppsCtrl', function($scope, Apps) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.apps = Apps.all();
  $scope.remove = function(app) {
    Apps.remove(app);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicPopup, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.firstItem = Chats.all()[0];
  $scope.items = Chats.all().slice(1, 4);
  $scope.data = {};
  $scope.pass = function(status){
    var title = status ? '审批通过' : '审批退回';
    $ionicPopup.show({
      template: '<input type="text" ng-model="data.note">',
      title: title,
      subTitle: '请输入审批意见',
      scope: $scope,
      buttons: [
        { text: '取消' },
        {
          text: '<b>确认</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.data) {
              $ionicPopup.alert({
                 title: '请填写审批意见'
               });
              e.preventDefault();
            } else {
              return $scope.data.note;
            }
          }
        }
      ]
    });
  }
  $scope.initCharts = function(){
    var d1 = [[1262304000000, 100], [1264982400000, 90], [1267401600000, 102], [1270080000000, 130], [1272672000000, 99], [1275350400000, 121], [1277942400000, 104], [1280620800000, 108], [1283299200000, 122], [1285891200000, 110], [1288569600000, 115], [1291161600000, 98]];
    var d2 = [[1262304000000, 80], [1264982400000, 89], [1267401600000, 67], [1270080000000, 89], [1272672000000, 78], [1275350400000, 55], [1277942400000, 56], [1280620800000, 89], [1283299200000, 98], [1285891200000, 90], [1288569600000, 80], [1291161600000, 90]];

    var data1 = [
        { label: "Data 1", data: d1, color: '#17a084'},
        { label: "Data 2", data: d2, color: '#127e68' }
    ];

    $.plot($("#flot-chart1"), data1, {
        xaxis: {
            tickDecimals: 0
        },
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            points: {
                width: 0.1,
                show: false
            }
        },
        grid: {
            show: false,
            borderWidth: 0
        },
        legend: {
            show: false
        }
    });
  };
})

.controller('PostDetailCtrl', function($scope, $stateParams, $ionicHistory, Chats) {
  $scope.post = Chats.get($stateParams.postId);
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('AppDetailCtrl', function($scope, $stateParams, $ionicHistory, Tags) {
  $scope.tags = Tags.all();
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
