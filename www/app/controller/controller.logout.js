angular.module('Concentrados').controller('logoutController', ['$scope', '$sessionStorage', '$location', function ($scope, $sessionStorage, $location) {
    delete $sessionStorage.usuario;
    $location.path('/');
  }]);