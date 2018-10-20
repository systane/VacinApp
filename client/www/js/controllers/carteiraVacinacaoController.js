
myApp.controller('DepenCarteiraCtrl', function($scope, $ionicPopup, $stateParams, Chats, $state, $http, Dependentess, Vacinas, $filter, $rootScope) {

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


  /*verifica os nomes das vacinas que foram tomadas*/
  for(var i = 0; i < tamanho; i++){
    var aux = $scope.Jsonvacina[i];
    var vetoraux = aux.aplicacoes;
    var tamanhoaux = vetoraux.length;

    /*Mostra as informações das vacinas já tomadas*/
    $scope.vacinas[i] = aux.nome;   
    $scope.info[i] = {
      nomeVacina: aux.nome,
      vacinas: []
    };

    for(var j = 0; j < tamanhoaux; j++){
      $scope.info[i].vacinas.push(vetoraux[j]);
    }
  }


  /*mostra as vacinas ausentes*/
  for(var i = 0; i < $scope.vacinas.length; i++){
    var posicao = $scope.nomesvacinas.indexOf($scope.vacinas[i]);
    $scope.nomesvacinas.splice(posicao, 1);    
  }
  $scope.vacinasAusentes = $scope.nomesvacinas;


  /*mostra o subitem das vacinas qnd pressionado*/  
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


		  	/*verifica os nomes das vacinas que foram tomadas*/
		  	for(var i = 0; i < tamanho; i++){
			    var aux = $scope.Jsonvacina[i];
			    var vetoraux = aux.aplicacoes;
			    var tamanhoaux = vetoraux.length;

			    /*Mostra as informações das vacinas já tomadas*/
			    $scope.vacinas[i] = aux.nome;   
			    $scope.info[i] = {
			      nomeVacina: aux.nome,
			      vacinas: []
			    };

			    for(var j = 0; j < tamanhoaux; j++){
			      $scope.info[i].vacinas.push(vetoraux[j]);
			    }
		  	}


		  	/*mostra as vacinas ausentes*/
		  	for(var i = 0; i < $scope.vacinas.length; i++){
			    var posicao = $scope.nomesvacinas.indexOf($scope.vacinas[i]);
			    $scope.nomesvacinas.splice(posicao, 1);    
		  	}
		  	$scope.vacinasAusentes = $scope.nomesvacinas;
	    }
	})
})