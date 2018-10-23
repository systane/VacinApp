package br.com.vacinaApp.endpoints;


import br.com.vacinaApp.facades.LoginFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginEndpoint {

    private final LoginFacade loginFacade;

    @Autowired
    public LoginEndpoint(LoginFacade loginFacade) {
        this.loginFacade = loginFacade;
    }


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(){
        return "Hello";
    }

    /**
     * method responsible to authenticate the login user
     * @param login
     * @param senha
     * @return
     */
//    @RequestMapping(value = "/login", method = RequestMethod.GET)
//    public ResponseEntity<UserDTO> login(@RequestParam("login") String login, @RequestParam("senha") String senha){
//        return new ResponseEntity<>(loginFacade.encontrar(login, senha), new HttpHeaders(), HttpStatus.OK);
//    }

}
