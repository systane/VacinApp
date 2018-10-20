package br.com.vacinaApp.DTOs;

import br.com.vacinaApp.entities.models.Usuario;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UsuarioDTO {

    private String login;
    private String senha;

    public static ToEntity toEntity(){
        return new ToEntity();
    }

    public static ToDTO toDTO(){
        return new ToDTO();
    }

    public static class ToEntity{
        public Usuario apply(UsuarioDTO dto){
            Usuario entity = new Usuario();

            if(dto != null) {

                if(dto.getLogin() != null)
                    entity.setLogin(dto.login);

                if(dto.getSenha() != null)
                    entity.setSenha(dto.senha);

                return entity;
            }
            else throw new IllegalArgumentException();
        }
    }

    public static class ToDTO{
        public UsuarioDTO apply(Usuario entity){
            UsuarioDTO dto = new UsuarioDTO();

            dto.setLogin(entity.getLogin());
            dto.setSenha(entity.getSenha());

            return dto;
        }
    }
}


