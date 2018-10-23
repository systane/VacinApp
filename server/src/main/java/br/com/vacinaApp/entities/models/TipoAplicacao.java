package br.com.vacinaApp.entities.models;

import br.com.vacinaApp.entities.converters.TipoDoseConverter;
import br.com.vacinaApp.entities.enums.TipoDoseEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TipoAplicacao {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_dose;

    private int numero_dose;

    @Convert(converter = TipoDoseConverter.class)
    private TipoDoseEnum tipo_dose;
}
