package br.com.vacinaApp.entities.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Calendar;
import java.util.List;

@Entity
public class Carteira {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_carteira;

    @NotNull
    @Column(unique = true)

    @OneToMany(targetEntity = Aplicacao.class)
    private List<Aplicacao> vacinas_registradas;


}
