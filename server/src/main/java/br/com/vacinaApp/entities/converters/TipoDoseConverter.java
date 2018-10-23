package br.com.vacinaApp.entities.converters;

import br.com.vacinaApp.entities.enums.TipoDoseEnum;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class TipoDoseConverter implements AttributeConverter<TipoDoseEnum, String> {

    @Override
    public String convertToDatabaseColumn(TipoDoseEnum tipoDoseEnum) {
        return tipoDoseEnum.getId();
    }

    @Override
    public TipoDoseEnum convertToEntityAttribute(String s) {
        return TipoDoseEnum.from(s);
    }
}
