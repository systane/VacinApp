package br.com.vacinaApp.entities.converters;

import br.com.vacinaApp.entities.enums.MascFeminEnum;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter
public class MascFeminConverter implements AttributeConverter<MascFeminEnum, String> {
    @Override
    public String convertToDatabaseColumn(MascFeminEnum mascFeminEnum) {
        return mascFeminEnum.getId();
    }

    @Override
    public MascFeminEnum convertToEntityAttribute(String s) {
        return MascFeminEnum.from(s);
    }
}
