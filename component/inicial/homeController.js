
simuladorDeFinanciamentos.controller("homeController", function ($location, $scope, $http) {
    $scope.titulo = "teste controller";


    //ir para tela proponente:
    $scope.telaProponente = function () {
        $location.path("/proponente")
    };

});

