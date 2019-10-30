import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
      flex:1, 
      resizeMode: 'cover',
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      flex: 1,
      backgroundColor: '#323135',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.7,
    },
    cabecalho: {
      paddingBottom: 5,
      color:'#fff',
      fontWeight: 'bold',
    },
    input: {
      borderBottomWidth: 20,
      width: '100%',
      fontWeight: 'bold',
      backgroundColor: '#fff',
    },
    botaoLogin: {	
      borderStyle: 'solid',
      borderColor: 'white',
      borderWidth: 2,
      borderRadius: 2,
      color:'#1E6738',
      fontWeight: 'bold',
    },
    cadastrarUsuario: {/*Personaliza o botão Cadastrar-se*/
      color: 'rgb(0,75,125)',
      fontWeight: 'bold',
    },
    spanCadastrar: {/*Personaiza o span Cadastrar-se*/
      color: 'rgb(0,75,125)',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    
  }
);

  export default styles;