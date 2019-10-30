

myApp.controller('aplicacaoCtrl', 
function($scope, $state, $stateParams, Vacinas, $http, $rootScope){
  $scope.nomeVac = $stateParams.vacina;
  $scope.cadastrarAplicacao = function(aplicacao){

    if(aplicacao.tipo_vacina == "Dose comum"){aplicacao.tipo_vacina = "dose";}
    else {aplicacao.tipo_vacina = "reforço";}
    var Jsonvacina = Vacinas.getVacina();//pega as vacinas do usuário
    var tamanho = Jsonvacina.length;
    var itemJson, nomeItemJson;

    var data

    var d =  aplicacao.data.getDate();
    var m =  aplicacao.data.getMonth()+1;
    if(m <= 9){m = '0'+m;}
    var y =  aplicacao.data.getFullYear();
    var data_formatada = y+'-'+m+'-'+d;
    var req = {

          // method: 'GET',
          // url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Aplicacao/inserir/'+
          //       $stateParams.id+'/'+$stateParams.vacina+'/'+data_formatada+'/'+
          //       aplicacao.numero_dose+'/'+aplicacao.tipo_vacina

      
          method: 'POST',
          url: 'http://localhost:8888',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {'DATA_APLICACAO': aplicacao.data,   'NOME_VACINA': $stateParams.vacina,
                 'TIPO_DOSE': aplicacao.tipo_vacina, 'NUMERO_DOSE': aplicacao.numero_dose,
                 'COD_CART_SUS': $stateParams.id}
                 
      }

      $http(req).then(function successCallback(data){//Enviar entrada para servidor e receber retorna da CARTEIRA
              data.data.validacao > 0 ? retornoAplicacao(data.data) : alert('Não foi possível cadastrar nova vacina'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
            }, function errorCallback(data){
              alert('Erro:' + data.data);
            });
    
  }

  retornoAplicacao = function(dados){ 
    console.log(dados);
    Vacinas.setVacina(dados);
    $state.go('tab.dependentes-carteira', {NumeroSus: $stateParams.id});
  }

})