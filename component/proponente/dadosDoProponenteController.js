simuladorDeFinanciamentos.controller("dadosDoProponenteController", function ($location, $scope, $http) {

    //ir para tela imovel:
    $scope.telaimovel = function () {

        var dadosDaProposta = {
            dadosProponente: $scope.proponente
        }


        //enviando o objeto no search para ficar disponivel na outra tela:
        $location.search({
            dadosDaProposta

        });

        //chama a proxima tela
        $location.path("/imovel")
    };

    //ir para tela Inicial:
    $scope.telaInicial = function () {
        $location.path("/home")
    };






});






