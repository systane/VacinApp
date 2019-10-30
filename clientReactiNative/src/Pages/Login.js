import styles from './LoginStyle';
import React from 'react';
import { Button } from 'react-native-elements';
import { 
  Text, 
  View,
  TextInput,
  ImageBackground,
  Alert 
} from 'react-native';
const img = require("../../assets/ze_gotinha.jpg");
  
export default class Login extends React.Component {
  constructor() {
    super()
    this.state = {
        user: null,
        password: null
    }
  }

  render() {
    return(
      <ImageBackground source={img} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.cabecalho}>Login</Text>
          <View>
            <TextInput style={styles.input} onChangeText={(value) => this.setState({user: value})} value={this.state.user} />
            <TextInput style={styles.input} onChangeText={(value) => this.setState({password: value})} value={this.state.password}  secureTextEntry={true}/>
            <Button buttonStyle={styles.botaoLogin} type="outline" title="Login" onPress={() => Alert.alert('Login')}/>
          </View>
          <View>
            <Button buttonStyle={styles.cadastrarUsuario}  type="clear" color="rgb(0,75,125)" title="Não possui uma conta?" onPress={() => Alert.alert('cadastrar novo usuario')}>
              <View style={styles.spanCadastrar}>
                <Text>Cadastre-se</Text>
              </View>
            </Button>
          </View>
        </View>
      </ImageBackground>
    );
  }
    
};