// SISTEMA DE ROTAS
angular.module("simuladorDeFinanciamentos")
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "../component/inicial/home.html",
                controller: 'homeController'
            })
            .when("/proponente", {
                templateUrl: "../component/proponente/dadosDoProponente.html",
                controller: 'dadosDoProponenteController'
            })
            .when("/imovel", {
                templateUrl: "../component/imovel/dadosDoImovel.html",
                controller: 'dadosDoImovelController'
            })

            .when("/aprovado", {
                templateUrl: "../component/aprovado/resultadoAprovado.html",
                controller: 'resultadoAprovadoController'
            })
            .when("/reprovado", {
                templateUrl: "../component/reprovado/resultadoReprovado.html",
                controller: 'resultadoReprovadoController'
            })
            .otherwise({ redirectTo: '/home' })
    }
    ]);