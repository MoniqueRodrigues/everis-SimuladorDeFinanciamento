simuladorDeFinanciamentos.controller("historicoPreenchidoController", function ($scope, $http) {

    //GET PARA PEGAR OS DADOS DA PROPOSTA E LISTAR NA TELA: 
    $http.get("http://localhost:3000/propostas")
        .then(function (response) {
            $scope.propostas = response.data;
            // console.log("$cope.propostas:", $scope.propostas)
        }
        );


    // //ABRE TELA MODAL HISTÓRICO:
    $scope.mostraDados = function (dados, index) {
        $scope.propostaSelecionada = dados;
        console.log( "$scope.propostaSelecionada",  $scope.propostaSelecionada)
      }
    
    // // IR PARA A TELA DE HISTÓRICO:
    // $scope.modalPreenchido = function () {
    //     console.log("entrou na função do modal")
    //     $location.path("/historico-modal")
    // };


    // $scope.modalPreenchido= function(){
    //     $('#exampleModal').modal('show');
    //     console.log("chamou")
    // }







});

