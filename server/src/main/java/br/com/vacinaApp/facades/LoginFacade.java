package br.com.vacinaApp.facades;

import br.com.vacinaApp.repositories.OwnerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LoginFacade {

    private final OwnerRepositoryImpl ownerRepositoryImpl;

    @Autowired
    public LoginFacade (OwnerRepositoryImpl ownerRepositoryImpl){
        this.ownerRepositoryImpl = ownerRepositoryImpl;
    }



//    public UserDTO encontrar(String login, String senha){
//        System.out.println(login);
//        Usuario usuario = ownerRepositoryImpl.encontrar(login);
//        return UserDTO.toDTO().apply(usuario);
//    }
}
