myApp.factory('loginService', loginService);

loginService.$inject = ['$http', '$resource'];

function loginService($http, $resource) {

    let service = {
        cadastrarUsuario: cadastrarUsuario,
        fazerLogin: fazerLogin
    };

    return service;

    
    function cadastrarUsuario(dadosUsuario) {
        return $http({
            method: 'POST',
            url: 'http://localhost:8085/owner/newUser',
            headers:{'Content-Type': 'application/json'},
            data: dadosUsuario
        })
        .then(function (response) { return response; })
        .catch(function (err) { return err; })    
    }

    function fazerLogin() {
        return $http({
            method: 'GET',
            url: 'http://localhost:8085/login',
            headers: { 'Content-Type': 'application/json' },
            isArray: false
        });
    }
};