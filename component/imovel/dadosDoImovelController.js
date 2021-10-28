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



    //ir para tela Aprovado:
    $scope.telaAprovado = function () {
        $location.path("/aprovado")
    };


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




    //calculo valor pré-aprovado:
    valorTotalAprovado = $scope.imovel.valorImovel - $scope.imovel.valorEntrada;
    //quantidade de parcelas ao ano:
    quantdParcelasAno = $scope.imovel.parcelas / 12;
    //taxa de juros ao ano:
    var taxaAno = 0.1;
    valorDoImovel = $scope.imovel.valorImovel;
    quantdParcelas = $scope.imovel.parcelas;




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
        // console.log("quantdParcelas", quantdParcelas);
        var taxaRendaMensal = 0.3;
        // console.log("taxaRendaMensal", taxaRendaMensal);
        var rendaMensal = $scope.imovel.rendaImovel;
        // console.log("rendaMensal", rendaMensal);
        var calculoSimulacao = (valorTotalAprovado) + (quantdAnos * taxaAno) * (valorTotalAprovado) / (quantdParcelas);
        // console.log("calculoSimulacao", calculoSimulacao);

        $scope.cadastra_imovel($scope.imovel);
        
        if ((calculoSimulacao / quantdParcelas) <= (rendaMensal * taxaRendaMensal)) {
            
            return $scope.telaAprovado();
        } else {
            return $scope.telaReprovado();
        }

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


