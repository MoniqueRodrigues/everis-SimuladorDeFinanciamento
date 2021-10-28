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
        console.log("resultado 20%:", $scope.resulCalculo);
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

    $scope.calculaSimulaçao = function () {

        var valorTotalAprovado = $scope.imovel.valorImovel - $scope.imovel.valorEntrada;      
        var quantdParcelasAno = $scope.imovel.parcelas / 12;      
        var taxaAno = 0.1;
        var valorDoImovel = $scope.imovel.valorImovel;
        var quantdParcelas = $scope.imovel.parcelas;

        var calculoSimulacao = ((valorTotalAprovado) + (quantdParcelasAno * taxaAno) * (valorTotalAprovado)) / (quantdParcelas)


        if(calculoSimulacao )

    }







    //Parcela ini
    $scope.valorTotalAprovado *


















        // post para cadastrar dados do imovel e enviar para o JsonServer:
        $scope.cadastra_imovel = function (dados) {
            // console.log(dados);
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


