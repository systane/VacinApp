package br.com.vacinaApp.entities.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vacina {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_vacina;

    private String nome_vacina;

    private String lote_vacina;
}
