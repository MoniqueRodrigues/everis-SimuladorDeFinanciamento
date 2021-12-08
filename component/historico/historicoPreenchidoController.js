simuladorDeFinanciamentos.controller(
  "historicoPreenchidoController",
  function ($scope, $http, buscaDadosListaService, $location) {

    //GET PARA PEGAR OS DADOS DA PROPOSTA E LISTAR NA TELA:
    $http.get("http://localhost:3000/propostas").then(function (response) {
      $scope.propostas = response.data;
      // console.log("$scope.propostas", $scope.propostas);
      // $scope.selectPaginaHistorico();
    });



    //IR TELAS HISTÓRICO PREENCHIDO OU VAZIO:
    $scope.selectPaginaHistorico = function () {
      console.log("entrou na função");
      if ($scope.propostas.length === 0) {
        console.log("$scope.propostas-função:", $scope.propostas.length)
        $location.path("/historicoVazio");
      } else {
        $location.path("/historicoPreenchido");
      }
    };


    // SELECIONA OBJETO:
    $scope.propostaSelecionada = function (propostaSelecionada) {
      buscaDadosListaService.proposta = propostaSelecionada;
      //   console.log("resultado", buscaDadosListaService.proposta);
    };

    
    //EXCLUIR DADOS:
    $scope.excluiDados = function () {
      //   console.log("entrou na função:", buscaDadosListaService.proposta.id);
      $http({
        url:
          "http://localhost:3000/propostas/" +
          buscaDadosListaService.proposta.id,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          console.log("dados deletados com sucesso", response);
        })
        .catch(function (erro) {
          console.log("erro ao deletar", erro);
        });
    };
  }
);
