package br.com.vacinaApp.entities.models;

import br.com.vacinaApp.entities.enums.MascFeminEnum;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Calendar;
import java.util.List;

@Entity
public class Dependente {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_dependente;

    @NotNull
    @Column(unique = true)
    private int numero_cart_sus;

    private String nome;

    private String sexo;

    private Calendar data_nascimento;

    @OneToOne(fetch = FetchType.EAGER)
    private Carteira carteira;

    @ManyToOne
    private Usuario usuario;

    public Dependente() {
    }

    public Dependente(@NotNull int numero_cart_sus, String nome, String sexo, Calendar data_nascimento,
                      Carteira carteira, Usuario usuario) {
        this.numero_cart_sus = numero_cart_sus;
        this.nome = nome;
        this.sexo = sexo;
        this.data_nascimento = data_nascimento;
        this.carteira = carteira;
        this.usuario = usuario;
    }

    public int getNumero_cart_sus() {
        return numero_cart_sus;
    }

    public void setNumero_cart_sus(int numero_cart_sus) {
        this.numero_cart_sus = numero_cart_sus;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public Calendar getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(Calendar data_nascimento) {
        this.data_nascimento = data_nascimento;
    }

    public Carteira getCarteira() {
        return carteira;
    }

    public void setCarteira(Carteira carteira) {
        this.carteira = carteira;
    }

    public Usuario getUsuarios() {
        return usuario;
    }

    public void setUsuarios(Usuario usuarios) {
        this.usuario = usuario;
    }
}
