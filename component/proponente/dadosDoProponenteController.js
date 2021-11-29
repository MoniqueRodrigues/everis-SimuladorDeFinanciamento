simuladorDeFinanciamentos.controller(
  "dadosDoProponenteController",
  function ($location, $scope, $http) {
    //#region Método Inicial

    //RECEBENDO OS DADOS DO PROPONENTE:
    var dadosDaProposta = $location.search().dadosDaProposta;
    // console.log("recebendo os dados do proponente", dadosDaProposta);

    // Preencher os campos da tela com os dados da variável dadosDaProposta
    if (dadosDaProposta) {
      $scope.proponente = dadosDaProposta.proponente;
    }

    //#endregion Metodo Inicial

    //MÁSCARA DE CPF:
    $(document).ready(function () {
      var $seuCampoCpf = $("#cpf");
      $seuCampoCpf.mask("000.000.000-00", { reverse: true });
    });

    //MÁSCARA DE CEP:
    $(document).ready(function () {
      var $seuCampoCep = $("#cep");
      $seuCampoCep.mask("00000-000", { reverse: true });
    });

    //MÁSCARA DE CELULAR:
    // $(document).ready(function () {
    //   var $seuCampoCelular = $("#celular");
    //   $seuCampoCelular.mask("(00)00000-0000", { reverse: true });
    // });
    jQuery(function ($) {
      $("#celular").mask("(99)99999-9999");
    });

    // CALCULA IDADE:
    $scope.teste = function () {
      inputAniversario = document.querySelector("#aniversario").value;
      // console.log("dados do input:", inputAniversario );

      inputAniversario = new Date(inputAniversario); //transformando em obj date;
      // console.log("mostra objeto data:",  inputAniversario);
      var aniversarioTempo = inputAniversario.getTime();
      // console.log("data aniversário em milisegundos", aniversarioTempo);

      dataAtual = new Date();
      // console.log("mostra data hoje:", dataAtual);
      var dataTempo = dataAtual.getTime();
      // console.log("data atual em milisegundos", dataTempo); //1637766836151

      var diferencaDatas = Math.abs(aniversarioTempo - dataTempo);
      // console.log("mostra subtração de datas:", diferencaDatas); //1251300713006

      var anoMilisegundos = 31557600000;
      var anosTotal = (diferencaDatas / anoMilisegundos).toFixed(0);
      console.log("sua idade é:", anosTotal + " anos");
      var idadePermitida = 18;

      if (anosTotal >= idadePermitida) {
        $scope.validaIdade = false;
      } else {       
        $scope.validaIdade = true;
      }
      // console.log("validaIdade:", $scope.validaIdade);
    };

    //ir para tela imovel:
    $scope.telaimovel = function () {
      // se ele existir atribui
      if (dadosDaProposta) {
        dadosDaProposta.proponente = $scope.proponente;
        // se nao existir
        // define dadosDaProposta atribuindo o valor do $scopoe para o proponente
      } else {
        dadosDaProposta = {
          proponente: $scope.proponente,
        };
      }
      //dadosDaProposta.dadosProponente = $scope.proponente;

      //enviando o objeto no search para ficar disponivel na outra tela:
      $location.search({
        dadosDaProposta,
      });
      //chama a proxima tela
      $location.path("/imovel");
    };

    //ir para tela Inicial:
    $scope.telaInicial = function () {
      $location.path("/home");
    };
  }
);
