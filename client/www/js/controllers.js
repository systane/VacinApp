//angular.module('starter.controllers', [])
/*
  .controller('LoginCtrl', function($scope, $state, $http, Dependentess, $rootScope, Validacao) {//adicionar o $state como parametro
    var data;
    $scope.login = function(settings){
      // var req = {
      //     method: 'POST',
      //     url: 'http://localhost:8888',
      //     headers: {
      //       'Content-Type': 'application/x-www-form-urlencoded'
      //     },
      //     data: {'USUARIO':settings.usuario, 'SENHA':settings.senha}
      // }


      var req = {
          method: 'GET',
          url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Usuario/autenticar/'+
          settings.usuario+'/'+settings.senha
        }

      $http(req).then(function successCallback(data){//enviar LOGIN para o servidor e receber retorno
              data.data.idUsuario > 1 ? retornoLogin(data) : alert('usuário ou senha incorretos'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
            }, function errorCallback(data){
              alert('Erro:' + data);
              console.log(data);
            });
    }

    retornoLogin = function(data){
      $state.go('tab.dependentes');
      if(data.data.dependentes != 'null'){
        $rootScope.usuario = data.data.idUsuario;
        var json = data.data.carteiras;
        Dependentess.setDados(json);

      }
    }

   $scope.cadastrar = function(){
    $state.go('cadastrar');
   }

})
*/
/*.controller('CadastrarCtrl', function($scope, $state, $http) {

   $scope.cadastrarUsuario = function(settings){

      var params;
      var req = {
          method: 'GET',
          url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Usuario/inserir/'+settings.nome+'/'+settings.usuario_cadastro+'/'+settings.senha_cadastro
      }

      $http(req).then(function successCallback(data){ //enviar novo CADASTRO para o servidor e receber retorno
              data.data == "1" ? $state.go('login') : alert('Não foi possível realizar o cadastro'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
            }, function errorCallback(data){
              alert('Erro:' + data);
              console.log(data);
            });
   }

})*/

// =============================================================================================================
/*.controller('CadastroDepenCtrl', function($scope, $http, $state, Dependentess, $rootScope){
  $scope.cadastrarCarteira = function(settings){
    var data;
    var d =  settings.data_nasc.getDate();
    var m =  settings.data_nasc.getMonth()+1;
    if(m <= 9){m = '0'+m;}
    var y =  settings.data_nasc.getFullYear();
    var data_formatada = y+'-'+m+'-'+d;
      var req = {
        
          method: 'GET',
          url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Carteira/inserir/'+
                settings.numero_sus+'/'+settings.nome_proprietario+'/'+
                $rootScope.usuario+'/'+data_formatada
        
          method: 'POST',
          url: 'http://localhost:8888',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: {'NUM_CART_SUS':settings.numero_sus, 'NOME_PROPRIET':settings.nome_proprietario, 
                 'DATA_NASC':settings.data_nasc, 'USUARIO': $rootScope.usuario 
          }

          
      }

      $http(req).then(function successCallback(data){ //enviar novo CADASTRO para o servidor e receber retorno
              data.data == "1" ? retornoCadastroDependente(data_formatada, settings.numero_sus, settings.nome_proprietario) : alert('Não foi possível realizar o cadastro'+data.data); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
            }, function errorCallback(data){
              alert('Erro:' + data);
              console.log(data);
            });
   }

   retornoCadastroDependente = function(data, numero_sus, nome){
    $state.go('tab.dependentes');
    var novaCarteira = {
      cod_usuario: $rootScope.usuario,
      data_nasc: data,
      nome_propriet: nome,
      numero_cartao_sus: numero_sus
    };
    var dados = Dependentess.getDados();
    dados.push(novaCarteira);
    Dependentess.setDados(dados);
   }
  
})*/

//.controller('CampanhaCtrl', function($scope) {})

// =============================================================================================================

/*.controller('DepenCtrl', function($scope, Chats, Dependentess, $http, Vacinas, $state, $rootScope) {

  $scope.cadastrar_dependente = function(){
    $state.go('cadastro_dependentes');
  }


  $scope.dependentes = Dependentess.getDados();
  var data;
  $scope.enviaCartao = function(cartao){ 
    $rootScope.cartao = cartao;
    var req = {

        method: 'GET',
        url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Aplicacao/buscar/'+cartao
      
        // method: 'POST',
        // url: 'http://localhost:8888',
        // headers: {
        //   'Content-Type': 'application/x-www-form-urlencoded'
        // },
        // data: {'NUM_CART_SUS': cartao}
        
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
    if(data.data.vacinas != 'null'){
      $state.go('tab.dependentes-carteira', {NumeroSus: cartao});
      var Jsonvacina = data.data.vacinas;
      Vacinas.setVacina(Jsonvacina);
      
    }
  }

})*/

// =============================================================================================================
/*
.controller('DepenCarteiraCtrl', function($scope, $ionicPopup, $stateParams, Chats, $state, $http, Dependentess, Vacinas, $filter, $rootScope) {

  $scope.nomesvacinas = ['BGC', 'Hepatite B', 'Hepatite A', 'Penta',
                         'VipVop', 'Pneumo 10', 'Rotavirus',
                         'Meningo C', 'Febre Amarela', 'Triplice Viral',
                         'Tetra Viral', 'Dupla Adulto', 'HPV', 'DTPA'];


  $scope.chat = Chats.get($stateParams.NumeroSus);
  $scope.idUsuario = $stateParams.NumeroSus; //pega o Id da url
  $scope.Jsonvacina = Vacinas.getVacina();//pega as vacinas do usuário
  var tamanho = $scope.Jsonvacina.length;
  $scope.pressionou = 0;
  var vetoraux;
  $scope.vacinas = [];
  $scope.vacinasAusentes = [];
  $scope.info = [];



  for(var i = 0; i < tamanho; i++){
    var aux = $scope.Jsonvacina[i];
    var vetoraux = aux.aplicacoes;
    var tamanhoaux = vetoraux.length;


    $scope.vacinas[i] = aux.nome;   
    $scope.info[i] = {
      nomeVacina: aux.nome,
      vacinas: []
    };

    for(var j = 0; j < tamanhoaux; j++){
      $scope.info[i].vacinas.push(vetoraux[j]);
    }
  }



  for(var i = 0; i < $scope.vacinas.length; i++){
    var posicao = $scope.nomesvacinas.indexOf($scope.vacinas[i]);
    $scope.nomesvacinas.splice(posicao, 1);    
  }
  $scope.vacinasAusentes = $scope.nomesvacinas;



  $scope.pressionado = function(vacina){
    if($scope.pressionou == 1) {$scope.pressionou = 0; $scope.aux = '';}
    else {$scope.pressionou = 1; $scope.aux = vacina;}
  }  


    $scope.aplicacao = function(nomeVacina){
      $state.go('aplicacao', {id: $scope.idUsuario, vacina: nomeVacina}); //muda de estado e passa como parametro o Id da url pego anteriormente
    }

  //=========================              atualiza a tela              =========================


  $scope.$on('$ionicView.enter', function(){
    var req = {

        method: 'GET',
        url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Aplicacao/buscar/'+$rootScope.cartao
      };
        $http(req).then(function successCallback(data){//Enviar entrada para servidor e receber retorna da CARTEIRA
            data.data.validacao == 1 ? retorno(data) : alert('Não foi possível carregar a carteira de vacinas'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
          }, function errorCallback(data){
            alert('Erro:' + data.data);
          });

        retorno = function(data){
          Vacinas.setVacina(data.data.vacinas);
          

          $scope.nomesvacinas = ['BGC', 'Hepatite B', 'Hepatite A', 'Penta',
                         'VipVop', 'Pneumo 10', 'Rotavirus',
                         'Meningo C', 'Febre Amarela', 'Triplice Viral',
                         'Tetra Viral', 'Dupla Adulto', 'HPV', 'DTPA'];


  $scope.chat = Chats.get($stateParams.NumeroSus);
  $scope.idUsuario = $stateParams.NumeroSus; //pega o Id da url
  $scope.Jsonvacina = Vacinas.getVacina();//pega as vacinas do usuário
  var tamanho = $scope.Jsonvacina.length;
  $scope.pressionou = 0;
  var vetoraux;
  $scope.vacinas = [];
  $scope.vacinasAusentes = [];
  $scope.info = [];



  for(var i = 0; i < tamanho; i++){
    var aux = $scope.Jsonvacina[i];
    var vetoraux = aux.aplicacoes;
    var tamanhoaux = vetoraux.length;


    $scope.vacinas[i] = aux.nome;   
    $scope.info[i] = {
      nomeVacina: aux.nome,
      vacinas: []
    };

    for(var j = 0; j < tamanhoaux; j++){
      $scope.info[i].vacinas.push(vetoraux[j]);
    }
  }



  for(var i = 0; i < $scope.vacinas.length; i++){
    var posicao = $scope.nomesvacinas.indexOf($scope.vacinas[i]);
    $scope.nomesvacinas.splice(posicao, 1);    
  }
  $scope.vacinasAusentes = $scope.nomesvacinas;


        }


  })

  //============================== Popup editar vacina ===================================

  $scope.editar = function(numeroDose, tipoDose, dataAplicacao, nomeVacina){
    alert(numeroDose+' - '+ tipoDose+'\n'+dataAplicacao);
  
    
   $scope.data = {};

  // An elaborate, custom popup
  var editarPopup = $ionicPopup.show({
    template: '<input type="date" ng-model="data.date">',
    title: 'Data da aplicação',
    scope: $scope,
    buttons:
      [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.date) {            
              e.preventDefault();//don't allow the user to close unless he enters date
            } 
            else {
              tipoDose = $scope.data.date;
            }
          }
        }
      ]
    })
  } 
  

})
*/
// =============================================================================================================

/*.controller('aplicacaoCtrl', function($scope, $state, $stateParams, Vacinas, $http, $rootScope){
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

          method: 'GET',
          url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Aplicacao/inserir/'+
                $stateParams.id+'/'+$stateParams.vacina+'/'+data_formatada+'/'+
                aplicacao.numero_dose+'/'+aplicacao.tipo_vacina

      
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

})*/

// =============================================================================================================

/*.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
*/
