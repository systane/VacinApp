

myApp.controller('CadastroDepenCtrl', function($scope, $http, $state, Dependentess, $rootScope){
  $scope.cadastrarCarteira = function(settings){
    var data;
    var d =  settings.data_nasc.getDate();
    var m =  settings.data_nasc.getMonth()+1;
    if(m <= 9){m = '0'+m;}
    var y =  settings.data_nasc.getFullYear();
    var data_formatada = y+'-'+m+'-'+d;
      var req = {
        
          // method: 'GET',
          // url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Carteira/inserir/'+
          //       settings.numero_sus+'/'+settings.nome_proprietario+'/'+
          //       $rootScope.usuario+'/'+data_formatada

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
  
})