angular.module('Concentrados').service('registroContactoService', ['$http', function ($http) {

        this.agregarCon = function (data) {
            return $http.post('http://localhost/Concentrados/www/server.php/agregarContacto', $.param(data));
        };

        this.imagen = function (data) {
            return $http.post('http://localhost/Concentrados/www/server.php/agregarContacto', $.param(data));
            
            return Upload.upload({
                        url: 'http://localhost/imagenAngularJS/public_html/serggvidor.php',
                        data: {file: $scope.file, 'username': 'Julian'}
                      }).then(function (resp) {
                        console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                      }, function (resp) {
                        console.log('Error status: ' + resp.status);
                      }, function (evt) {
                        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                        console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
                      });
            
            
        };
    }]);
