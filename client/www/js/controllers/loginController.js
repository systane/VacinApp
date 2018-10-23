//angular.module('starter.controllers', [])
angular.module('starter.controllers', [])
myApp.controller('LoginCtrl', loginController);

loginController.$inject = ['$state', 'loginService'];

function loginController($state, loginService) {
  var vm = this;

  vm.usuario = {};


  vm.cadastrar = cadastrar;
  vm.logar = logar;


  function cadastrar() {
    $state.go('cadastrar');
  }

  function logar() {
    loginService.fazerLogin(vm.usuario).then(function (response) {
      if (response.status == 201){
        $state.go('tab.dependentes');
      }
      else{
        console.log(response);
      }
    });
  }



};
//     var data;
//     $scope.login = function(settings){
      
//       var req = {
//           method: 'GET',
//           url: 'http://localhost:8085',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           data: {'USUARIO':settings.usuario, 'SENHA':settings.senha}
//       }

//       $http(req).then(function successCallback(data){//enviar LOGIN para o servidor e receber retorno
//         console.log(data);
//         data.data.validacao >= 1 ? retornoLogin(data) : alert('usuário ou senha incorretos'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
//             }, function errorCallback(data){
//               alert('Erro:' + data);
//               console.log(data);
//             });
//     }

//     retornoLogin = function(data){
//       $state.go('tab.dependentes');
//       if(data.data.dependentes != 'null'){
//         $rootScope.usuario = data.data.idUsuario;
//         var json = data.data.carteiras;
//         Dependentess.setDados(json);

//       }
//     }

//    $scope.cadastrar = function(){
//     $state.go('cadastrar');
//    }

// })