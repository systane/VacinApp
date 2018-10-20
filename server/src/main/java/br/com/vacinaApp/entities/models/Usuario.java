package br.com.vacinaApp.entities.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
public class Usuario {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_usuario;

    @NotNull
    @Column(unique = true)
    private String login;

    @NotNull
    private String senha;

    @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
    private List<Dependente> dependentes;

    public Usuario() {
    }

    public Usuario(@NotNull String login, @NotNull String senha, List<Dependente> dependentes) {
        this.login = login;
        this.senha = senha;
        this.dependentes = dependentes;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public List<Dependente> getDependentes() {
        return dependentes;
    }

    public void setDependentes(List<Dependente> dependentes) {
        this.dependentes = dependentes;
    }

    @Override public String toString() {
        return "Usuario{" + "id_usuario=" + id_usuario + ", login='" + login + '\'' + ", senha='" + senha + '\''
                + ", dependentes=" + dependentes + '}';
    }
}
