package br.com.vacinaApp.repositories;

import br.com.vacinaApp.DTOs.OwnerDTO;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class OwnerRepositoryImpl {

    @PersistenceContext
    private EntityManager manager;

    public void save(OwnerDTO owner){
        manager.persist(owner);
    }

//    public Usuario encontrar(String usuario) {
//       return manager.createQuery("select user from Usuario user where user.login_usuario = :login", Usuario.class)
//                .setParameter("login", usuario)
//                .getSingleResult();
//    }
}
