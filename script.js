  var app = angular.module('BlogApplication', ['ngMessages']);

  angular.module('BlogApplication').controller('MainController', MainControllerfn);

  function MainControllerfn($scope, $http) {
    $http.get('https://localhost:44302/Blogs/GetAll').
    then(function(response) {
        $scope.blogs = response.data;        
    });
  };

  