simuladorDeFinanciamentos.controller("historicoPreenchidoController", function ($scope, $http) {

    //GET PARA PEGAR OS DADOS DA PROPOSTA E LISTAR NA TELA: 
    $http.get("http://localhost:3000/propostas")
        .then(function (response) {
            $scope.propostas = response.data;
            console.log("$cope.propostas:", $scope.propostas)
        }
        );


 

});

