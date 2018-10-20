
var myApp = angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'toaster', 'ngAnimate', 'ngResource'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.filter('unique', function() {
   return function(collection, keyname) {
      var output = [], 
          keys = [];

      angular.forEach(collection, function(item) {
          var key = item[keyname];
          if(keys.indexOf(key) === -1) {
              keys.push(key);
              output.push(item);
          }
      });
      return output;
   };
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })


  .state('tab.dependentes', {
      url: '/dependentes',
      views: {
        'tab-dependentes': { //menu inicial
          templateUrl: 'templates/tab-dependentes.html',
          controller: 'DepenCtrl',
          controllerAs: 'DependentesCtrl'
        }
      }
    })

    .state('tab.dependentes-carteira', {
      url: '/dependentes/:NumeroSus',
      views: {
        'tab-dependentes': {
          templateUrl: 'templates/dependentes_carteira.html',
          controller: 'DepenCarteiraCtrl'
        }
      }
    })

  .state('tab.campanha', {
    url: '/campanha',
    views: {
      'tab-campanha': {
        templateUrl: 'templates/tab-campanha.html',
        controller: 'CampanhaCtrl'
      }
    }
  })
  
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('cadastro_dependentes', {
    url: '/cadastro_dependentes',    
        templateUrl: 'templates/cadastro_dependentes.html',
        controller: 'CadastroDepenCtrl'
    
  })

  .state('aplicacao',{
    url: '/aplicacao/:id/:vacina',
         templateUrl: 'templates/aplicacao.html',
         controller: 'aplicacaoCtrl'
  })


    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'

    })

    .state('cadastrar', {
      url: '/cadastrar',
      templateUrl: 'templates/cadastrar.html',
      controller: 'CadastrarCtrl',
      controllerAs: 'cadastroUsuario'

    });


  $urlRouterProvider.otherwise('login');

});
