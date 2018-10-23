package br.com.vacinaApp.endpoints;


import br.com.vacinaApp.DTOs.DependenteDTO;
import br.com.vacinaApp.DTOs.LoginDTO;
import br.com.vacinaApp.DTOs.UsuarioDTO;
import br.com.vacinaApp.entities.models.Usuario;
import br.com.vacinaApp.facades.LoginFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class LoginEndpoint {

    @Autowired
    private LoginFacade loginFacade;

    @Autowired
    public LoginEndpoint(LoginFacade loginFacade) {
        this.loginFacade = loginFacade;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(){
        return "Olá";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public ResponseEntity<UsuarioDTO> login(@RequestParam("login") String login, @RequestParam("senha") String senha){
        return new ResponseEntity<UsuarioDTO>(loginFacade.encontrar(login, senha), new HttpHeaders(), HttpStatus.OK);
    }


    @RequestMapping(value = "/novoUsuario", method = RequestMethod.POST)
    public ResponseEntity<UsuarioDTO> criarNovoUsuario(@RequestBody DependenteDTO dto){ //RequestBody converte o Json da request em Objeto
        return new ResponseEntity<>(loginFacade.gravar(dto), new HttpHeaders(), HttpStatus.CREATED);
    }

}
