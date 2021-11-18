
//CONTROLLER:
simuladorDeFinanciamentos.controller("historicoPreenchidoController",function ($scope, $http, buscaDadosListaService) {
    //GET PARA PEGAR OS DADOS DA PROPOSTA E LISTAR NA TELA:
    $http.get("http://localhost:3000/propostas")
         .then(function (response) {
            $scope.propostas = response.data;
    });

    // SELECIONA OBJETO:
    $scope.propostaSelecionada = function (propostaSelecionada) {
        buscaDadosListaService.proposta = propostaSelecionada; 
    }
});



  




  
