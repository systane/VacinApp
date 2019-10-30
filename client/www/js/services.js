angular.module('starter.services', [])
.factory('Validacao', function(){

  var campo = [];
  var valido = true;
  var reservados = ['/', ':', '+', '"', "'", '-', ';', '=','§', '*', '&', '¬', '¨', '£', '$', '#',
                    '!', '°', 'ª', 'º', ',', '`', '<', '>', '|', ];

  return{
    validaNome: function(){
      for(var i = 0; i < campo.length; i++){
        var char = campo.charAt(i);
        for(var j = 0; j < 25; j++){
          if(char == reservados[j]){valido = false; return valido; break;}
        }
      }
    },
    getValido: function(){
      return valido;
    },
    setCampo: function(campo_recebido){
      campo = campo_recebido;
      return campo_recebido;
    },
    getCampo: function(){
      return campo;
    },
  }

})


.factory('Dependentess', function() {

  var dados = '';
  var cartao = '';

  return{
    setDados: function(dado_recebido){
      dados = dado_recebido;
      return dados;
    },
    getDados: function(){
      return dados;
    },
    setCartao: function(cartao_recebido){
      cartao = cartao_recebido;
      return cartao;
    },
    getCartao: function(){
      return cartao;
    },

  }

})

.factory('Vacinas', function(){
  var vacina = '';

  return{
    setVacina: function(vacina_recebida){
      vacina = vacina_recebida;
      return vacina;
    },
    getVacina: function(){
      return vacina;
    }
  }
})

.factory('Chats', function() { //função "class-like", na qual é possível adicionar propriedades e atributos e retornar para um controller. Parecido com o conceito de classe
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
