simuladorDeFinanciamentos.controller("resultadoReprovadoController", function ($location,$scope, $http) {
    $scope.titulo = "oi";
    

    
    //ir para tela Inicial:
    $scope.telaInicial = function () {
        $location.path("/home")
    };
});

