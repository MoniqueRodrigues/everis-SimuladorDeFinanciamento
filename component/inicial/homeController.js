
simuladorDeFinanciamentos.controller("homeController", function ($location, $scope, $http) {
    $scope.titulo = "teste controller";


    // IR PARA A TELA PROPONENTE:
    $scope.telaProponente = function () {
        $location.path("/proponente")
    };

    


});

