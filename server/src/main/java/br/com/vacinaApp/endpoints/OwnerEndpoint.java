package br.com.vacinaApp.endpoints;

import br.com.vacinaApp.DTOs.OwnerDTO;
import br.com.vacinaApp.facades.OwnerFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RequestMapping("/owner")
public class OwnerEndpoint {

    private final OwnerFacade ownerFacade;

    @Autowired
    public OwnerEndpoint(OwnerFacade ownerFacade){
        this.ownerFacade = ownerFacade;
    }


    /**
     * method responsible to create a new account user
     * @param newOwnerDTO - DTO with data of the new owner of the vaccination card
     */
    @RequestMapping(value = "/newUser", method = RequestMethod.POST)
    public void createnewOwner(@RequestBody OwnerDTO newOwnerDTO){ //RequestBody converte o Json da request em Objeto
        ownerFacade.createnewOwner(newOwnerDTO);
    }
}
