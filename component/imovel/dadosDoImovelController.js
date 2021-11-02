simuladorDeFinanciamentos.controller("dadosDoImovelController", function ($location, $scope, $http) {


    // recebendo dados do Proponente:
    var dadosDaProposta = $location.search().dadosDaProposta;
    // console.log("dadosrecebidos:", search );

    //ir para tela Reprovado:
    $scope.telaReprovado = function () {
        $location.path("/reprovado")
    };

    //ir para tela Proponente:
    $scope.telaProponente = function () {
        $location.path("/proponente")
    };


    //get para pegar os dados tipo de imovel e listar na tela:
    $http.get("http://localhost:3000/tipoDeImovel")
        .then(function (response) {
            $scope.tipo = response.data;
        });

    //calcula e valida campo valor entrada:
    $scope.validaEntrada = function () {
        // console.log($scope.imovel.valorEntrada);  
        var regraNegocio = 0.2;
        $scope.resulCalculo = $scope.imovel.valorImovel * regraNegocio;
        // console.log("resultado 20%:", $scope.resulCalculo);
    };


    $scope.calculaSimulacao = function () {
        console.log("entrou na função calculaSimulacao");

        var valorTotalAprovado = $scope.imovel.valorImovel - $scope.imovel.valorEntrada;
        var quantdAnos = $scope.imovel.parcelas / 12;
        var taxaAno = 0.1;
        var valorDoImovel = $scope.imovel.valorImovel;
        var quantdParcelas = $scope.imovel.parcelas;
        console.log("quantdParcelas", quantdParcelas);
        var taxaRendaMensal = 0.3;
        var rendaMensal = $scope.imovel.rendaImovel;
        var calculoSimulacao = (valorTotalAprovado) + (quantdAnos * taxaAno) * (valorTotalAprovado) / (quantdParcelas);
        var parcelaInicial = calculoSimulacao / quantdParcelas;



        if (parcelaInicial <= rendaMensal * taxaRendaMensal) {
            var statusDaSimulacao = "aprovada";

            dadosDaProposta.statusDaSimulacao = statusDaSimulacao;
            dadosDaProposta.imovel = $scope.imovel;

            console.log("resultado", $location.search());

            //envia dados para o json.server:
            $scope.enviaProposta(dadosDaProposta);


            // return $scope.telaAprovado(parcelaInicial, valorTotalAprovado);
        } else {
            var statusDaSimulacao = "reprovado";
            dadosDaProposta.statusDaSimulacao = statusDaSimulacao;
            dadosDaProposta.imovel = $scope.imovel;


            // return $scope.telaReprovado();
        }
    };



    //ir para tela Aprovado:
    $scope.telaAprovado = function (parcelaInicial, valorTotalAprovado) {
        //recebendo na função os parametros enviados, pode ser qualqeur nome respeitando
        // a ordem de envio


        //preparando o objeto de envio:
        var enviarObjeto = {
            parcelaInicial: parcelaInicial,
            valorTotalAprovado: valorTotalAprovado
        };
        console.log("objeto criado", enviarObjeto);


        //enviando o objeto no search para ficar disponivel na outra tela:
        $location.search(enviarObjeto);


        //chama a proxima tela
        $location.path("/aprovado")
    };



    // post para cadastrar dados do imovel e enviar para o JsonServer:
    $scope.enviaProposta = function (dados) {
        alert(JSON.stringify())
        // if (dados) {
        $http.post(
            "http://localhost:3000/propostas",
            JSON.stringify(dadosDaProposta)
        ).then(function (response) {
            // $scope.listaImoveis.push(response.data);
        });

        // } else {
        //    console.log("dados inválidos")
        //}

    };









});


