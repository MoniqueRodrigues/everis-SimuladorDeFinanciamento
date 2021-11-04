simuladorDeFinanciamentos.controller("dadosDoProponenteController", function ($location, $scope, $http) {

    //#region Método Inicial

    //RECEBENDO OS DADOS DO PROPONENTE:     
    var dadosDaProposta = $location.search().dadosDaProposta;
    console.log("recebendo os dados do proponente", dadosDaProposta);

    // Preencher os campos da tela com os dados da variável dadosDaProposta
    if (dadosDaProposta) {
        $scope.proponente = dadosDaProposta.proponente;
    }

    //#endregion Metodo Inicial


    //ir para tela imovel:
    $scope.telaimovel = function () {
        // se ele existir atribui
        if (dadosDaProposta) {
            dadosDaProposta.proponente = $scope.proponente;    
        // se nao existir
        // define dadosDaProposta atribuindo o valor do $scopoe para o proponente
        } else {
            dadosDaProposta = {
                proponente: $scope.proponente
            }
        }
        //dadosDaProposta.dadosProponente = $scope.proponente;
        
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





