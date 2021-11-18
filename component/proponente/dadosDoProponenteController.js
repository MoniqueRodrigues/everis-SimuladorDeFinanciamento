simuladorDeFinanciamentos.controller("dadosDoProponenteController", function ($location, $scope, $http) {


    //#region Método Inicial

    //RECEBENDO OS DADOS DO PROPONENTE:     
    var dadosDaProposta = $location.search().dadosDaProposta;
    console.log("recebendo os dados do proponente", dadosDaProposta);

    // Preencher os campos da tela com os dados da variável dadosDaProposta
    if (dadosDaProposta) {
        $scope.proponente = dadosDaProposta.proponente;
    }

    //#endregion Metodo Inicial    


    //MÁSCARA DE CPF:   
    $(document).ready(function () {
        var $seuCampoCpf = $("#cpf");
        $seuCampoCpf.mask('000.000.000-00', { reverse: true });
    });


    //MÁSCARA DE CEP:   
    $(document).ready(function () {
        var $seuCampoCep = $("#cep");
        $seuCampoCep.mask('00000-000', { reverse: true });
    });


    //MÁSCARA DE CELULAR:   
    $(document).ready(function () {
        var $seuCampoCelular = $("#celular");
        $seuCampoCelular.mask('00 00000-0000', { reverse: true });
    });






    //ir para tela imovel:
    $scope.telaimovel = function () {
                // se ele existir atribui
                if (dadosDaProposta) {
                    dadosDaProposta.proponente = $scope.proponente;
                    // se nao existir
                    // define dadosDaProposta atribuindo o valor do $scopoe para o proponente
                } else {
                    dadosDaProposta = {
                        proponente: $scope.proponente
                    }
                }
                //dadosDaProposta.dadosProponente = $scope.proponente;

                //enviando o objeto no search para ficar disponivel na outra tela:
                $location.search({
                    dadosDaProposta
                });
                //chama a proxima tela
                $location.path("/imovel")
            };

            //ir para tela Inicial:
            $scope.telaInicial = function () {
                $location.path("/home")
            };



            // var formControl =document.querySelector(".form-control");
            // console.log("form-control:", formControl);
            // $scope.mudaCor =function(){
            //     if(){

            //     }

            // }


        });





