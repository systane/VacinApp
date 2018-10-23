angular.module('starter.controllers', ['toaster', 'ngAnimate'])
myApp.controller('CadastrarCtrl', cadastrarUsuarioController);

cadastrarUsuarioController.$inject = ['$state', 'loginService', 'toaster', '$ionicLoading'];

function cadastrarUsuarioController($state, loginService, toaster, $ionicLoading) {
  var vm = this;

  vm.usuario = {};


  vm.cadastrar = cadastrar;


  function cadastrar() {
    console.log(vm.usuario);
    loginService.cadastrarUsuario(vm.usuario).then(function (response) {
      if(response.status == 201)
        $state.go('login');
      else{
        console.log(response);
        // toaster.pop('warning', 'Serviço indisponível no momento', 'Enquanto isso revise se seus dados estão corretos')
        // toaster.pop('info', "title", "text");
        // $ionicLoading.show({ template: 'Item Added!', noBackdrop: true, duration: 2000 });
        // ngToast.create('a toast message...');
        alert('Tente novamente mais tarde');
      }
    });
  }


};



// myApp.controller('CadastrarCtrl', function($scope, $state, $http) {

//    $scope.cadastrarUsuario = function(settings){

//       var params;
//       var req = {
//           method: 'GET',
//           url: 'http://186.227.174.242:8086/WebServices3/webresources/generic/Usuario/inserir/'+settings.nome+'/'+settings.usuario_cadastro+'/'+settings.senha_cadastro
//       }

//       $http(req).then(function successCallback(data){ //enviar novo CADASTRO para o servidor e receber retorno
//               data.data == "1" ? $state.go('login') : alert('Não foi possível realizar o cadastro'); //parametro da função go: nome do state. State muda o status da view, ou seja, seu conteúdo. 
//             }, function errorCallback(data){
//               alert('Erro:' + data);
//               console.log(data);
//             });
//    }

// })
