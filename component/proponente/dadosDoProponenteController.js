simuladorDeFinanciamentos.controller("dadosDoProponenteController", function ($location,$scope, $http) {
    // $scope.titulo = "oi";
       

    //ir para tela imóvel:
    $scope.telaImovel = function () {
        $location.path("/imovel")
    };
});


