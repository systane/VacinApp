package br.com.vacinaApp.entities.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MascFeminEnum {
    FEMININO("F", "Feminino"), MASCULINO("M", "Masculino");

    private String id;
    private String descricao;

    public static MascFeminEnum from(final String valor){
        if(valor == null){
            throw new IllegalArgumentException();
        }

        for(MascFeminEnum mascFeminEnum : MascFeminEnum.values()){
            if (valor.equalsIgnoreCase(mascFeminEnum.getDescricao()) || valor.equalsIgnoreCase(mascFeminEnum.getId())) {
                return mascFeminEnum;
            }
        }

        final StringBuilder msg = new StringBuilder("");
        msg.append("Cannot parse into an element of MascFeminEnum: '");
        msg.append(valor);
        msg.append("'");

        throw new IllegalArgumentException(msg.toString());
    }
}
