package br.com.vacinaApp.entities.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Vacina {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_vacina;

    private String nome_vacina;

    private String lote_vacina;

    public Vacina() {
    }

    public Vacina(String nome_vacina, String lote_vacina) {
        this.nome_vacina = nome_vacina;
        this.lote_vacina = lote_vacina;
    }

    public String getNome_vacina() {
        return nome_vacina;
    }

    public void setNome_vacina(String nome_vacina) {
        this.nome_vacina = nome_vacina;
    }

    public String getLote_vacina() {
        return lote_vacina;
    }

    public void setLote_vacina(String lote_vacina) {
        this.lote_vacina = lote_vacina;
    }
}
