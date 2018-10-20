package br.com.vacinaApp.entities.models;

import javax.persistence.*;
import java.util.Calendar;
import java.util.List;

@Entity
public class Aplicacao {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_aplicacao;

    @OneToOne(fetch = FetchType.EAGER)
    private Vacina vacina;

    private Calendar data_aplicacao;

    @OneToMany(targetEntity = Dose.class)
    private List<Dose> doses;

    public Aplicacao() {
    }

    public Aplicacao(Vacina vacina, Calendar data_aplicacao, List<Dose> doses) {
        this.vacina = vacina;
        this.data_aplicacao = data_aplicacao;
        this.doses = doses;
    }

    public Vacina getVacina() {
        return vacina;
    }

    public void setVacina(Vacina vacina) {
        this.vacina = vacina;
    }

    public Calendar getData_aplicacao() {
        return data_aplicacao;
    }

    public void setData_aplicacao(Calendar data_aplicacao) {
        this.data_aplicacao = data_aplicacao;
    }

    public List<Dose> getDoses() {
        return doses;
    }

    public void setDoses(List<Dose> doses) {
        this.doses = doses;
    }
}
