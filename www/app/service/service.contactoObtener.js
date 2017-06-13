   angular.module('Concentrados').service('obtenerContactoService', ['$http', function($http){
    
    this.obtenerCon = $http.get('http://localhost/Concentrados/www/server.php/obtenerContacto');  
    
    this.eliminarCon = function (data) {
      return $http.post('http://localhost/Concentrados/www/server.php/eliminarContacto', $.param(data));
    };
}]);
