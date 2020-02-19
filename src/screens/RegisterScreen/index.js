import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import TextInputMask from 'react-native-masked-text';

export default class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
      cidade: '',
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar() {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.senha)
      .then(async user => {
        await user.user.updateProfile({
          displayName: this.state.nome,
        });
        const users = database().ref('users');
        const key = users.push().key;

        users.child(key).set({
          nome: this.state.nome,
          cidade: this.state.cidade,
        });

        Alert.alert('Usuário cadastrado com sucesso');
      })
      .catch(error => {
        if (error.code === 'auth/weak-password') {
          Alert.alert('Sua senha deve ter pelo menos 6 caracteres!');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('O endereço de e-mail é inválido!');
        }
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert(
            'Esse endereco de e-mail já está sendo utilizado por outro usuário. Deseja recuperar sua senha?',
          );
        }
        // error.code
        //error.message
        Alert.alert(error.code + ' - ' + error.message);
      });
  }

  render() {
    return (
      <SafeArea>
        <Teclado>
          <Area>
            <Titulo>VAMOS COMEÇAR:</Titulo>
            <Subtitulo>PRECISAMOS SABER ALGUMAS COISAS SOBRE VOCÊ</Subtitulo>
            <BlocoInputs>
              <Nome>NOME COMPLETO:</Nome>
              <InputNome
                onChangeText={nome => this.setState({nome})}
                placeholder="EX. NOME COMPLETO"
              />
            </BlocoInputs>
            <BlocoInputs>
              <Email>EMAIL:</Email>
              <InputEmail
                autoCapitalize={false}
                onChangeText={email => this.setState({email})}
                placeholder="EX. EMAIL@GMAIL.COM"
              />
            </BlocoInputs>
            <BlocoInputs>
              <Senha>SENHA:</Senha>
              <InputSenha
                onChangeText={senha => this.setState({senha})}
                secureTextEntry={true}
                placeholder="************"
              />
            </BlocoInputs>
            <BlocoInputs>
              <Cidades>EM QUAL CIDADE VOCÊ RESIDE?</Cidades>
              <InputEsportes
                onChangeText={cidade => this.setState({cidade})}
                placeholder="EX. SÃO JOSÉ DOS CAMPOS, TAUBATÉ"
              />
            </BlocoInputs>
            <BackgroundEntrar>
              <TouchableOpacity>
                <BotaoCadastrar onPress={this.cadastrar}>
                  CADASTRAR
                </BotaoCadastrar>
              </TouchableOpacity>
            </BackgroundEntrar>
            <BlocoVoltar>
              <TouchableOpacity>
                <Voltar
                  onPress={() => this.props.navigation.navigate('LoginScreen')}>
                  Voltar
                </Voltar>
              </TouchableOpacity>
            </BlocoVoltar>
          </Area>
        </Teclado>
      </SafeArea>
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
  width: 80%;
`;

const Titulo = styled.Text`
  color: #002b77;
  text-align: center;
  font-family: 'BarlowCondensed-Italic';
  font-size: 36;
  margin-top: 80;
`;

const Subtitulo = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  text-align: center;
  color: #002b77;
  margin-bottom: 50;
  font-size: 16;
`;

const Nome = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16;
`;

const InputNome = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30;
  width: 100%;
  height: 45;
  border-radius: 5;
  font-size: 18;
  padding-horizontal: 10;
`;

const Email = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16;
`;

const InputEmail = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30;
  width: 100%;
  height: 45;
  border-radius: 5;
  font-size: 18;
  padding-horizontal: 10;
`;

const Senha = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16;
`;

const InputSenha = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30;
  width: 100%;
  height: 45;
  border-radius: 5;
  font-size: 18;
  padding-horizontal: 10;
`;

const Cidades = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16;
`;

const InputEsportes = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 50;
  width: 100%;
  height: 45;
  border-radius: 5;
  font-size: 18;
  padding-horizontal: 10;
`;

const BlocoInputs = styled.View``;

const BackgroundEntrar = styled.View`
  background-color: #002b77;
  width: 100%;
  height: 50;
  border-radius: 5;
  border: 1px solid #002b77;
`;

const BotaoCadastrar = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #fff;
  margin-bottom: 15;
  border-radius: 5;
  width: 318;
  height: 50;
  text-align: center;
  padding: 11px;
  font-size: 20;
`;

const BlocoVoltar = styled.View`
  margin-top: 10;
  justify-content: center;
  align-self: center;
  border: 1px solid #002b77;
  border-radius: 5;
  width: 60;
  height: 25;
`;

const Voltar = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #002b77;
  font-size: 16;
  text-align: center;
`;

const Teclado = styled.KeyboardAvoidingView``;
