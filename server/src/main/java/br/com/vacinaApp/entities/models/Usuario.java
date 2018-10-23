package br.com.vacinaApp.entities.models;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Usuario {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_usuario;

    @NotNull
    @Column(unique = true)
    private String login;

    @NotNull
    private String senha;

    @OneToMany
    private List<Carteira> carteiraList;

}
