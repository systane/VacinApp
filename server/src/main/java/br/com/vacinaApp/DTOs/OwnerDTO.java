package br.com.vacinaApp.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OwnerDTO extends UserDTO {
    private String nome;
    private int numero_cartao_sus;
    private LocalDateTime data_nascimento;
    private String sexo;
}