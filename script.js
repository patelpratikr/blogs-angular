  var app = angular.module('formvalidation', ['ngMessages']);

  angular.module('formvalidation').controller('MainController', MainControllerfn);


  function MainControllerfn($scope, $http) {
    $http.get('https://jsonplaceholder.typicode.com/todos').
    then(function(response) {
        $scope.blogs = response.data;        
    });
        
  }
