angular.module('starter.services', [])


.factory('NewsData',['$http', function($http){
  var DataInfo = [];

  return{
    news : function() {
          return $http.jsonp('http://rmuposting.co.nf/wp-json/posts?_jsonp=JSON_CALLBACK').
              success(function(data) {
               DataInfo = data;
               return DataInfo;
          });
    },
    detials: function(Id) {
      for (var i = 0; i < DataInfo.length; i++) {
        if (DataInfo[i].ID === parseInt(Id)) {
          return DataInfo[i];
        }
      }
      return null;
    }
  }

}])

.factory('maritimedata',['$http', function($http){
  var Data = [];

  return{
    maritimenews : function() {
    return $http.jsonp('https://www.kimonolabs.com/api/c7exfow8?callback=JSON_CALLBACK')
       .success(function(resp) {
        Data = resp;
        //console.log('Success', resp.results);
        return Data;    
      });
    }
  } 
}]);