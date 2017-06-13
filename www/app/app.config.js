angular.module('Concentrados').constant('rolAdmin', 1);
angular.module('Concentrados').constant('rolCelador', 2);

/**
 * middleware que comprueba las session y los tipos de roles
 */
angular.module('Concentrados').config(['$middlewareProvider', function middlewareProviderConfig($middlewareProvider) {
        $middlewareProvider.map({
            'comprobarSession': ['$sessionStorage', function comprobarSession($sessionStorage) {
                    middlewareComprobarSession(this, $sessionStorage);
                }],
            'comprobarNoTenerSession': ['$sessionStorage', function comprobarNoTenerSession($sessionStorage) {
                    middlewareComprobarNoTenerSession(this, $sessionStorage);
                }]
        });
    }]);

angular.module('Concentrados').config(['$routeProvider', '$httpProvider', function config($routeProvider, $httpProvider) {
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        $routeProvider.
                when('/', {
                    controller: 'loginController',
                    templateUrl: 'app/template/login.html',
                    middleware: ['comprobarNoTenerSession']
                }).
                when('/inicio', {
                    controller: 'inicioController',
                    templateUrl: 'app/template/inicio.html',
                    middleware: ['comprobarSession']
                }).
                when('/agregar', {
                    controller: 'agregarController',
                    templateUrl: 'app/template/agregar.html',
                    middleware: ['comprobarSession']
                }).
                when('/editar', {
                    controller: 'editarController',
                    templateUrl: 'app/template/editar.html',
                    middleware: ['comprobarSession']
                }).
                when('/formBuscar', {
                    controller: 'formBuscarController',
                    templateUrl: 'app/template/formBuscar.html',
                    middleware: ['comprobarSession']
                }).
                when('/logout', {
                    controller: 'logoutController',
                    template: '<p>Cerrando sesión...</p>',
                    middleware: ['comprobarSession']
                    
                }).
                otherwise('/');
    }
]);