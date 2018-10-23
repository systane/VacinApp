package br.com.vacinaApp.entities.models;

import br.com.vacinaApp.entities.converters.MascFeminConverter;
import br.com.vacinaApp.entities.enums.MascFeminEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Portador {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_dependente;

    @NotNull
    @Column(unique = true)
    private int numero_cart_sus;

    private String nome;

    @Convert(converter = MascFeminConverter.class)
    private MascFeminEnum sexo;

    private LocalDate data_nascimento;

    @OneToOne(fetch = FetchType.EAGER)
    private Carteira carteira;
}
