simuladorDeFinanciamentos.controller("dadosDoImovelController", function ($location,$scope, $http) {
    $scope.titulo = "oi";

    
    //ir para tela Aprovado:
    $scope.telaAprovado = function () {
        $location.path("/aprovado")
    };


    //ir para tela Reprovado:
    $scope.telaReprovado = function () {
        $location.path("/reprovado")
    };

    //CRIAR FUNÇÃO QUE DIRECIONA PARA AS TELAS
    //DE APROVADO OU NÃO DE ACORDO COM OS CALCULOS.



    

    
});

