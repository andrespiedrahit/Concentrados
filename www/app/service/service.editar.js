   angular.module('Concentrados').service('editarContactoService', ['$http', function($http){
    
    this.editarCon = function (data) {
      return $http.post('http://localhost/Concentrados/www/server.php/editarContacto', $.param(data));
    };    
}]);
