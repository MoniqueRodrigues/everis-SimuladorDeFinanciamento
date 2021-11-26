simuladorDeFinanciamentos.controller("historicoModalController", function ($scope,buscaDadosListaService) {
    $scope.buscaDadosLista = buscaDadosListaService;
    console.log("$scope.buscaDadosLista", $scope.buscaDadosLista)   

});

