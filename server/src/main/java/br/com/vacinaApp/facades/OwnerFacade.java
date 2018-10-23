package br.com.vacinaApp.facades;

import br.com.vacinaApp.DTOs.OwnerDTO;
import br.com.vacinaApp.repositories.OwnerRepositoryImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@Transactional
public class OwnerFacade {

    private final OwnerRepositoryImpl ownerRepositoryImpl;

    @Autowired
    public OwnerFacade(OwnerRepositoryImpl ownerRepositoryImpl){
        this.ownerRepositoryImpl = ownerRepositoryImpl;
    }

    /**
     * method responsible to create a new account user
     * @param dto - DTO with data of the new owner of the vaccination card
     */
    public void createnewOwner(OwnerDTO dto){
        ownerRepositoryImpl.save(dto);
    }
}
