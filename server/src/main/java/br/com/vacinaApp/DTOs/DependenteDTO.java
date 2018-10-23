package br.com.vacinaApp.DTOs;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Calendar;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class DependenteDTO extends UsuarioDTO {
    private String nome;
    private int numero_cart_sus;
    private LocalDateTime data_nascimento;
    private String sexo;
    private String usuario;
    private String senha;
}