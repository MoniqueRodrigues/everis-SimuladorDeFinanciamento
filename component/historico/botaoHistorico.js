simuladorDeFinanciamentos.controller("botaoPropostaController", function ($scope) {
    $scope.titulo = "teste controller";

    // IR PARA A TELA DE HISTÓRICO:
    $scope.telaHistorico = function () {
        console.log("entrou na função")
        $location.path("/historico")
    };



});



