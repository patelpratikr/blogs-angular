  var app = angular.module('BlogApplication', ['ngMessages']);

  angular.module('BlogApplication').controller('MainController', MainControllerfn);


  function MainControllerfn($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/todos').
    then(function(response) {
        $scope.blogs = response.data;        
    });
        
  }
