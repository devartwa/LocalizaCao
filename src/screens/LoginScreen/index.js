import React from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import styled from 'styled-components/native';
import firebase from '../../firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.logar = this.logar.bind(this);

        // firebase.auth().signOut();
    }

    logar () {
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.props.navigation.navigate('Anúncios')
            }
        });

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) => {
            if(error.code == 'auth/wrong-password') {
                Alert.alert("Sua senha está errada! Por favor, tente de novo");
            }
            if(error.code == 'auth/invalid-email') {
                Alert.alert("E-mail inválido! Por favor, tente de novo");
            }
            Alert.alert(error.code+" - "+error.message);
        })
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
                        autoCapitalize='none'
                        placeholder="Email" 
                        keyboardType="email-address" returnKeyType="next"
                        onChangeText={email => this.setState({ email })}/>
                        <Senha placeholder="Senha" returnKeyType="go"
                        secureTextEntry={true} onChangeText={senha => this.setState({ senha })} />
                        <BlocoLembrarSenha>
                            <TouchableOpacity>
                                <EsqueceuSenha onPress={() => this.props.navigation.navigate('RecoveryScreen')} >ESQUECEU A SENHA?</EsqueceuSenha>
                            </TouchableOpacity>
                        </BlocoLembrarSenha>
                        <BlocoBotao>
                            <TouchableOpacity>
                                <BotaoRegistro onPress={() => this.props.navigation.navigate('RegisterScreen')}>CADASTRE-SE</BotaoRegistro>
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
                                    onLoginFinished={
                                    (error, result) => {
                                    if (error) {
                                        console.log("login has error: " + result.error);
                                    } else if (result.isCancelled) {
                                        console.log("login is cancelled.");
                                    } else {
                                        AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            // this.props.navigation.navigate('Anúncios')
                                            console.log(data)
                                        }
                                        )
                                    }
                                    }
                                }
                                onLogoutFinished={() =>{
                                    this.props.navigation.navigate('LoginScreen');
                                    console.log("logout.")
                                }}/>
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
margin-top: 40;
margin-bottom: 48;
width: 280;
height: 60;
align-self: center;
`;

const Titulo = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-Italic';
font-size: 46;
margin-top: 80;
`;

const Subtitulo = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
text-align: center;
color: #002b77;
margin-bottom: 50;
font-size: 16;
`;

const Email = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
margin-bottom: 30;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const Senha = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
margin-bottom: 30;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;


const EsqueceuSenha = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 15;
`;

const BlocoLembrarSenha = styled.View`
flex-direction: row;
justify-content: flex-end;
width: 80%;
align-self: center;
margin-bottom: 54;
`;

const BlocoBotao = styled.View`
align-self: center;
width: 80%;
flex-direction: row;
justify-content: space-around;
`;

const BotaoRegistro = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
color:#002b77;
border: 1px solid #002b77;
margin-bottom: 15;
border-radius: 5;
width: 148;
height: 50;
text-align: center;
padding: 12px;
font-size: 18;
`;

const BackgroundLogin = styled.View`
background-color: #002b77;
width: 148;
height: 50;
border-radius: 5;
border: 1px solid #002b77;
`;

const BotaoLogin = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
color:#FFF;
margin-bottom: 15;
border-radius: 25px;
width: 148;
height: 50;
text-align: center;
padding: 12px;
font-size: 18;
`;

const Linha = styled.Text`
margin-top: 40;
border: 1px solid #002b77;
width: 135;
height: 1;
align-self: center;
`;

const TextoLinha = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
margin-top: 40;
color: #002b77;
`;

const BlocoLinha = styled.View`
flex-direction: row;
justify-content: space-around;
width: 80%;
align-self: center;
margin-bottom: 30;
`;

const BotaoFacebook = styled.View`
align-self: center;
`;

const Teclado = styled.KeyboardAvoidingView`
`;