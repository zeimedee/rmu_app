angular.module('starter.controllers', ['starter.services'])

  .controller('AppCtrl', ['$scope', '$ionicSideMenuDelegate', function($scope, $ionicSideMenuDelegate) {
  	$scope.toggle = function(){
  		$ionicSideMenuDelegate.toggleleft()
  	}  
  }])

 ///news section
  .controller('newsCtrl', ['$scope', '$state', 'NewsData','$ionicPopup', function($scope,$state, NewsData,$ionicPopup) {
  $scope.posts = [];
      
  function mp (){  
      NewsData.news().then(function(datacontent){
          console.log(datacontent.data);
          $scope.posts = datacontent.data;
          window.localStorage['post'] = JSON.stringify(datacontent.data);
      }, function(error) {
        $ionicPopup.alert({
          title: 'Error connection',
          template: "error connecting to network, you can't view detials of information"
        })

        console.log(window.localStorage['post']);
          $scope.posts = JSON.parse(window.localStorage['post'] || '{}');
      })
  }mp();

  $scope.doRefresh = function() {
      mp()
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    };
  }])

  .controller('detailCtrl', ['$scope', '$stateParams', 'NewsData', function($scope, $stateParams, NewsData) { 
      $scope.post = NewsData.detials($stateParams.newsdetailId);
  }])



  .controller('maritimeCtrl', ['$scope','maritimedata','$ionicPopup', function($scope, maritimedata, $ionicPopup){

    $scope.GotoLink = function (url) {
        window.open(url,'_system');
        return false;
    }

    $scope.news = [];

      function mnew(){
        maritimedata.maritimenews().then(function(datacontent){
            console.log(datacontent.data.results.MaritimeNews);
            $scope.news = datacontent.data.results.MaritimeNews;
            window.localStorage['maritimepost'] = JSON.stringify(datacontent.data.results.MaritimeNews);
        }, function(error) {
          $ionicPopup.alert({
            title: 'Error connection',
            template: "error connecting to network, you can't view detials of information"
          })

          //console.log(window.localStorage['maritimepost']);
            $scope.news = JSON.parse(window.localStorage['maritimepost'] || '{}');
        })
      }mnew();

      $scope.doRefresh = function() {
        mnew();
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      };
  }]);    

