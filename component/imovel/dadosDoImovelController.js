simuladorDeFinanciamentos.controller("dadosDoImovelController", function ($location, $scope, $http) {
    // $scope.titulo = "teste";

    
    $scope.imovel = {
        tipo:"" ,
        renda:"",
        valorImovel: "" ,
        valorEntrada:"",
        quantidParcelas:""
    };

   

    



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
        })



    // cadastrar dados do imovel e enviar para o JsonServer:
    $scope.cadastra_imovel = function (isValid) {
        console.log("chamou")
        if (isValid) {
            console.log("envio de dados ok")
            $http.post(
                "http://localhost:3000/imovel",
                JSON.stringify($scope.imovel)        
            ).then(function(response){
                $scope.imovel.push(response.data);           


            });

        } else{
            console.log("dados inválidos")
        }

    };



    //CRIAR FUNÇÃO QUE DIRECIONA PARA AS TELAS
    //DE APROVADO OU NÃO DE ACORDO COM OS CALCULOS.





});

