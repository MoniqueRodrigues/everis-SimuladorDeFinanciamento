simuladorDeFinanciamentos.controller(
  "dadosDoImovelController",
  function ($location, $scope, $http) {
    //#region Método Inicial

    // RECEBENDO OS DADOS DO PROPONENTE:
    var dadosDaProposta = $location.search().dadosDaProposta;

    //carregar informações imóvel vindas da tela proponente:
    if (dadosDaProposta.imovel) {
      $scope.imovel = dadosDaProposta.imovel;
    }
    //#endregion Método Inicial

    

    // FORMATA DADOS DE RENDA
    // $("#rendaImovel").maskMoney();









    //GET PARA PEGAR OS DADOS TIPO DE IMOVEL E LISTAR NA TELA IMÓVEL:
    $http.get("http://localhost:3000/tipoDeImovel").then(function (response) {
      $scope.tipo = response.data;
    });

    //IR PARA A TELA DE REPROVADO:
    $scope.telaReprovado = function () {
      $location.path("/reprovado");
    };

    //CALCULA E VALIDA CAMPO VALOR DE ENTRADA:
    $scope.validaEntrada = function () {
      var regraNegocio = 0.2;
      $scope.resulCalculo = $scope.imovel.valorImovel * regraNegocio;
    };

    //CALCULA SIMULAÇÃO FINANCIAMENTO:
    $scope.calculaSimulacao = function () {
      var valorTotalAprovado =
        $scope.imovel.valorImovel - $scope.imovel.valorEntrada;
      var quantdAnos = $scope.imovel.parcelas / 12;
      var taxaAno = 0.1;
      var valorDoImovel = $scope.imovel.valorImovel;
      var quantdParcelas = $scope.imovel.parcelas;
      // console.log("quantdParcelas", quantdParcelas);
      var taxaRendaMensal = 0.3;
      var rendaMensal = $scope.imovel.rendaImovel;
      var calculoSimulacao =
        valorTotalAprovado +
        (quantdAnos * taxaAno * valorTotalAprovado) / quantdParcelas;
      var parcelaInicial = (calculoSimulacao / quantdParcelas).toFixed(2);

      if (parcelaInicial <= rendaMensal * taxaRendaMensal) {
        var data = new Date();       

        var statusDaSimulacao = "aprovada";

        dadosDaProposta.statusDaSimulacao = statusDaSimulacao;
        dadosDaProposta.imovel = $scope.imovel;
        dadosDaProposta.data = data;
        console.log("dadosDaProposta.data:", dadosDaProposta.data);

        //envia dados para o json.server:
        $scope.enviaProposta(dadosDaProposta);

        return $scope.telaAprovado(parcelaInicial, valorTotalAprovado);
      } else {
        var statusDaSimulacao = "reprovado";
        dadosDaProposta.statusDaSimulacao = statusDaSimulacao;
        dadosDaProposta.imovel = $scope.imovel;
        return $scope.telaReprovado();
      }
    };

    //ir para tela Aprovado:
    $scope.telaAprovado = function (parcelaInicial, valorTotalAprovado) {
      //recebendo na função os parametros enviados, pode ser qualqeur nome respeitando
      // a ordem de envio

      //preparando o objeto de envio:
      var enviarObjeto = {
        parcelaInicial: parcelaInicial,
        valorTotalAprovado: valorTotalAprovado,
      };

      //enviando o objeto no search para ficar disponivel na tela de aprovado:
      $location.search(enviarObjeto);
      //chama a proxima tela
      $location.path("/aprovado");
    };

    // ENVIA DADOS PARA O BANCO DE DADOS:
    $scope.enviaProposta = function (dados) {
      JSON.stringify();
      // if (dados) {
      $http
        .post(
          "http://localhost:3000/propostas",
          JSON.stringify(dadosDaProposta)
        )
        .then(function (response) {
          // $scope.listaImoveis.push(response.data);
        });

      // } else {
      //    console.log("dados inválidos")
      //}
    };

    //ir para tela Proponente:
    $scope.telaProponente = function () {
      // colocandoOsDadosPreenchidosNoObj
      dadosDaProposta.imovel = $scope.imovel;

      // mandar obj para o search
      $location.search({
        dadosDaProposta,
      });

      // retornaDadosProponente();
      $location.path("/proponente");
    };
  }
);
