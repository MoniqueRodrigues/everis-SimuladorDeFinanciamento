simuladorDeFinanciamentos.controller("dadosDoImovelController", function ($location, $scope, $http) {
    // $scope.titulo = "teste";


    $scope.listaImoveis = {
        tipo: "",
        renda: "",
        valorImovel: "",
        valorEntrada: "",
        quantidParcelas: ""
    };

    $scope.imovel = {};



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




    //((valor do imóvel - valor de entrada) + (((Qtd parcelas/12) * porc juros)/100) * (valor do imóvel - valor de entrada))) / Qtd parcelas <= (renda mensal * 0,3)


    $scope.calculaSimulacao = function () {
        console.log("entrou na função calculaSimulacao");

        var valorTotalAprovado = $scope.imovel.valorImovel - $scope.imovel.valorEntrada;
        // console.log("valorTotalAprovado", valorTotalAprovado);
        var quantdAnos = $scope.imovel.parcelas / 12;
        // console.log("quantdAnos", quantdAnos);
        var taxaAno = 0.1;
        // console.log("taxaAno", taxaAno);
        var valorDoImovel = $scope.imovel.valorImovel;
        // console.log("valorDoImovel", valorDoImovel)
        var quantdParcelas = $scope.imovel.parcelas;
        console.log("quantdParcelas", quantdParcelas);
        var taxaRendaMensal = 0.3;
        // console.log("taxaRendaMensal", taxaRendaMensal);
        var rendaMensal = $scope.imovel.rendaImovel;
        // console.log("rendaMensal", rendaMensal);
        var calculoSimulacao = (valorTotalAprovado) + (quantdAnos * taxaAno) * (valorTotalAprovado) / (quantdParcelas);
        var parcelaInicial = calculoSimulacao / quantdParcelas;
        console.log("parcelaInicial", parcelaInicial);

        // $scope.cadastra_imovel($scope.imovel);

        if (parcelaInicial <= rendaMensal * taxaRendaMensal) {
            //chamando a function enviando as variaveis
            return $scope.telaAprovado(parcelaInicial,valorTotalAprovado);

        } else {
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
            valorTotalAprovado: valorTotalAprovado            
        };
        console.log("objeto criado", enviarObjeto);


        //enviando o objeto no search para ficar disponivel na outra tela:
        $location.search(enviarObjeto);
     

        //chama a proxima tela
        $location.path("/aprovado")
    };




















    // post para cadastrar dados do imovel e enviar para o JsonServer:
    $scope.cadastra_imovel = function (dados) {
        if (dados) {
            $http.post(
                "http://localhost:3000/imovel",
                JSON.stringify($scope.imovel)
            ).then(function (response) {
                $scope.listaImoveis.push(response.data);
            });

        } else {
            console.log("dados inválidos")
        }

    };








});


