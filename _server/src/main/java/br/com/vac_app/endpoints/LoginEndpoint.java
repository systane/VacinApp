package br.com.vac_app.endpoints;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginEndpoint {


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {
        return "Hello";
    }
}
