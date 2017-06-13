angular.module('Concentrados').service('formBuscarService', ['$http', function ($http) {

        this.buscarCon = function (data) {
            return $http.post('http://localhost/Concentrados/www/server.php/buscarContacto', $.param(data));
        };
    }]);

