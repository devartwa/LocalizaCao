import React from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import styled from 'styled-components/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };

    this.logar = this.logar.bind(this);

    // auth().signOut();
  }

  logar() {
    auth()
      .signInWithEmailAndPassword(this.state.email, this.state.senha)
      .then(user => {
        this.props.navigation.navigate('Anuncios');
      })
      .catch(error => {
        if (error.code == 'auth/wrong-password') {
          Alert.alert('Sua senha está errada! Por favor, tente de novo');
        }
        if (error.code == 'auth/invalid-email') {
          Alert.alert('E-mail inválido! Por favor, tente de novo');
        }
        Alert.alert(error.code + ' - ' + error.message);
      });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeArea>
          <Teclado>
            <Area>
              {/* <Logo source={require('../../../assets/imgs/logo.png')} /> */}
              <Titulo>LocalizaCão</Titulo>
              <Subtitulo>FAÇA LOGIN OU CADASTRE-SE.</Subtitulo>
              <Email
                autoCapitalize="none"
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={email => this.setState({email})}
              />
              <Senha
                placeholder="Senha"
                returnKeyType="go"
                secureTextEntry={true}
                onChangeText={senha => this.setState({senha})}
              />
              <BlocoLembrarSenha>
                <TouchableOpacity>
                  <EsqueceuSenha
                    onPress={() =>
                      this.props.navigation.navigate('RecoveryScreen')
                    }>
                    ESQUECEU A SENHA?
                  </EsqueceuSenha>
                </TouchableOpacity>
              </BlocoLembrarSenha>
              <BlocoBotao>
                <TouchableOpacity>
                  <BotaoRegistro
                    onPress={() =>
                      this.props.navigation.navigate('RegisterScreen')
                    }>
                    CADASTRE-SE
                  </BotaoRegistro>
                </TouchableOpacity>
                <TouchableOpacity>
                  <BackgroundLogin>
                    <BotaoLogin onPress={this.logar}>LOGIN</BotaoLogin>
                  </BackgroundLogin>
                </TouchableOpacity>
              </BlocoBotao>
              <BlocoLinha>
                <Linha />
                <TextoLinha>OU</TextoLinha>
                <Linha />
              </BlocoLinha>
              <BotaoFacebook>
                <LoginButton
                  onLoginFinished={(error, result) => {
                    if (error) {
                      console.log('login has error: ' + result.error);
                    } else if (result.isCancelled) {
                      console.log('login is cancelled.');
                    } else {
                      AccessToken.getCurrentAccessToken().then(data => {
                        // this.props.navigation.navigate('Anúncios')
                        console.log(data);
                      });
                    }
                  }}
                  onLogoutFinished={() => {
                    this.props.navigation.navigate('LoginScreen');
                    console.log('logout.');
                  }}
                />
              </BotaoFacebook>
            </Area>
          </Teclado>
        </SafeArea>
      </TouchableWithoutFeedback>
    );
  }
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

const Area = styled.View`
  background-color: #f2f2f2;
  align-self: center;
`;

const Logo = styled.Image`
  margin-top: 40px;
  margin-bottom: 48px;
  width: 280px;
  height: 60px;
  align-self: center;
`;

const Titulo = styled.Text`
  color: #002b77;
  text-align: center;
  font-family: 'BarlowCondensed-Italic';
  font-size: 46px;
  margin-top: 80px;
`;

const Subtitulo = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  text-align: center;
  color: #002b77;
  margin-bottom: 50px;
  font-size: 16px;
`;

const Email = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30px;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const Senha = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30px;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const EsqueceuSenha = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 15px;
`;

const BlocoLembrarSenha = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 80%;
  align-self: center;
  margin-bottom: 54px;
`;

const BlocoBotao = styled.View`
  align-self: center;
  width: 80%;
  flex-direction: row;
  justify-content: space-around;
`;

const BotaoRegistro = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #002b77;
  border: 1px solid #002b77;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 148px;
  height: 50px;
  text-align: center;
  padding: 12px;
  font-size: 18px;
`;

const BackgroundLogin = styled.View`
  background-color: #002b77;
  width: 148px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #002b77;
`;

const BotaoLogin = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #fff;
  margin-bottom: 15px;
  border-radius: 25px;
  width: 148px;
  height: 50px;
  text-align: center;
  padding: 12px;
  font-size: 18px;
`;

const Linha = styled.Text`
  margin-top: 40px;
  border: 1px solid #002b77;
  width: 135px;
  height: 1px;
  align-self: center;
`;

const TextoLinha = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  margin-top: 40px;
  color: #002b77;
`;

const BlocoLinha = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  align-self: center;
  margin-bottom: 30px;
`;

const BotaoFacebook = styled.View`
  align-self: center;
`;

const Teclado = styled.KeyboardAvoidingView``;
