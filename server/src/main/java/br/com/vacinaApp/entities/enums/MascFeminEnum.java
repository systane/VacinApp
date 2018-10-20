package br.com.vacinaApp.entities.enums;

public enum MascFeminEnum {
    FEMININO("F", "Feminino"), MASCULINO("M", "Masculino");

    private String id;
    private String descricao;

    MascFeminEnum(String id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }
}
