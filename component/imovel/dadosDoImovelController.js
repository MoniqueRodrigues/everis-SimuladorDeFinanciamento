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



    // post para cadastrar dados do imovel e enviar para o JsonServer:
    $scope.cadastra_imovel = function (dados) {
        // console.log(dados);

        // var regraNegocio = 0.2;
        // var valorImovelPorc = $scope.imovel.valorImovel * regraNegocio;
        // console.log("resultado", valorImovelPorc);     

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


