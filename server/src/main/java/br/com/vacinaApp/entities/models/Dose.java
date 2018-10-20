package br.com.vacinaApp.entities.models;

import br.com.vacinaApp.entities.enums.TipoDoseEnum;

import javax.persistence.*;

@Entity
public class Dose {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_dose;

    private int numero_dose;

    private char tipo_dose;

    public Dose() {
    }

    public Dose(int numero_dose, char tipo_dose) {
        this.numero_dose = numero_dose;
        this.tipo_dose = tipo_dose;
    }

    public int getNumero_dose() {
        return numero_dose;
    }

    public void setNumero_dose(int numero_dose) {
        this.numero_dose = numero_dose;
    }

    public char getTipo_dose() {
        return tipo_dose;
    }

    public void setTipo_dose(char tipo_dose) {
        this.tipo_dose = tipo_dose;
    }
}
