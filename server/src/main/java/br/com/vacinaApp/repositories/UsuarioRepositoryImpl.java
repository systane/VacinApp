package br.com.vacinaApp.repositories;

import br.com.vacinaApp.entities.models.Usuario;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

@Repository
public class UsuarioRepositoryImpl {

    @PersistenceContext
    private EntityManager manager;

    public void gravar(Usuario usuario){
        manager.persist(usuario);
    }

    public Usuario encontrar(String usuario) {
       return manager.createQuery("select user from Usuario user where user.login_usuario = :login", Usuario.class)
                .setParameter("login", usuario)
                .getSingleResult();
    }
}
