simuladorDeFinanciamentos.controller("resultadoAprovadoController", function ($location, $scope, $http) {
    $scope.titulo = "teste controller";

    //ir para tela Inicial:
    $scope.telaInicial = function () {
        $location.path("/home")
    };

    $scope.dadosDoImovel = $location.search();
    console.log("dadosrecebidos:", $scope.dadosDoImovel);

    $scope.dadosDoImovel.parcelaInicial;
    console.log("mostra parcela:",  $scope.dadosDoImovel.parcelaInicial);


    $scope.dadosDoImovel.valorTotalAprovado;
    console.log("mostra valor total:", $scope.dadosDoImovel.valorTotalAprovado);

    });





