package br.com.vacinaApp.entities.enums;

public enum TipoDoseEnum {

    DOSE("D", "Dose"), REFORCO("R", "Reforço");

    private String id;
    private String descricao;

    TipoDoseEnum(String id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public String getId() {
        return id;
    }

    public String getDescricao() {
        return descricao;
    }

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

//    public static TipoDoseEnum fromId(final String id){
//
//    }
}
