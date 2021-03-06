package br.com.vacinaApp.entities.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Carteira {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_carteira;

    @NotNull
    @OneToOne
    private Portador portador;

    @OneToMany(targetEntity = Aplicacao.class)
    private List<Aplicacao> aplicacaoCarteiraList;


}
