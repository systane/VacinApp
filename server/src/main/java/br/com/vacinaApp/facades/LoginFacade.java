package br.com.vacinaApp.facades;

import br.com.vacinaApp.DTOs.DependenteDTO;
import br.com.vacinaApp.DTOs.UsuarioDTO;
import br.com.vacinaApp.entities.models.Usuario;
import br.com.vacinaApp.repositories.UsuarioRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class LoginFacade {

    @Autowired UsuarioRepositoryImpl usuarioRepositoryImpl;

    public UsuarioDTO gravar(DependenteDTO dto){
        /*Usuario usuario = UsuarioDTO.toEntity().apply(dto);
        usuarioRepositoryImpl.gravar(usuario);


        return UsuarioDTO.toDTO().apply(usuario);*/
        return null;
    }

    public UsuarioDTO encontrar(String login, String senha){
        System.out.println(login);
        Usuario usuario = usuarioRepositoryImpl.encontrar(login);
        return UsuarioDTO.toDTO().apply(usuario);
    }
}
