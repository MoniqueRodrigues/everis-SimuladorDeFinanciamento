simuladorDeFinanciamentos.controller("resultadoAprovadoController", function ($location, $scope, $http) {
    $scope.titulo = "teste controller";   
    
    //ir para tela Inicial:
    $scope.telaInicial = function () {
        $location.path("/home")
    };
});



