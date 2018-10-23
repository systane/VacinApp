package br.com.vacinaApp.entities.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum TipoDoseEnum {

    DOSE("D", "TipoAplicacao"), REFORCO("R", "Reforço");

    private String id;
    private String descricao;


    public static TipoDoseEnum from(final String valor){
        if(valor == null){
            throw new IllegalArgumentException();
        }

        for(TipoDoseEnum tipoDoseEnum : TipoDoseEnum.values()){
            if (valor.equalsIgnoreCase(tipoDoseEnum.getDescricao()) || valor.equalsIgnoreCase(tipoDoseEnum.getId())) {
                return tipoDoseEnum;
            }
        }

        final StringBuilder msg = new StringBuilder("");
        msg.append("Cannot parse into an element of TipoDoseEnum: '");
        msg.append(valor);
        msg.append("'");

        throw new IllegalArgumentException(msg.toString());
    }

}
