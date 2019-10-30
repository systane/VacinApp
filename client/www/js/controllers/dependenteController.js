//angular.module('starter.controllers', [])

myApp.controller('DepenCtrl', function($scope, Chats, Dependentess, $http, Vacinas, $state, $rootScope) {

  $scope.cadastrar_dependente = function(){
    $state.go('cadastro_dependentes');
  }


  $scope.dependentes = Dependentess.getDados();
  console.log($scope.dependentes);
  var data;
  $scope.enviaCartao = function(cartao){ 
    $rootScope.cartao = cartao;
    var req = {

        // method: 'GET',
        // url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Aplicacao/buscar/'+cartao
      
       method: 'POST',
        url: 'http://localhost:8000',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {'NUM_CART_SUS': cartao}
        
    }

    $http(req).then(function successCallback(data){//Enviar entrada para servidor e receber retorna da CARTEIRA
            data.data.validacao == 1 ? retornoVacina(data, cartao) : alert('Não foi possível carregar a carteira de vacinas'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
          }, function errorCallback(data){
            alert('Erro:' + data.data);
          });
  }

  //atualiza a tela
  $scope.$on('$ionicView.enter', function(){
    $scope.dependentes = Dependentess.getDados();
  })

  retornoVacina = function(data, cartao){
    console.log(data.data);
    if(data.data.vacinas != 'null'){
      $state.go('tab.dependentes-carteira', {NumeroSus: cartao});
      var Jsonvacina = data.data.vacinas;
      Vacinas.setVacina(Jsonvacina);
      
    }
  }

})