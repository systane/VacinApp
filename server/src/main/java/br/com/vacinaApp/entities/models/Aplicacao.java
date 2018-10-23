package br.com.vacinaApp.entities.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Aplicacao {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_aplicacao;

    @OneToOne(fetch = FetchType.EAGER)
    private Vacina vacina;

    private LocalDateTime data_aplicacao;

    @OneToMany(targetEntity = TipoAplicacao.class)
    private List<TipoAplicacao> tipoAplicacaoList;
}
