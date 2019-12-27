import React from 'react';
import {TouchableOpacity, Alert} from 'react-native';
import styled from 'styled-components/native';
import firebase from '../../firebase';

export default class ChangePasswordScreen extends React.Component {
    
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            antigaSenha: '',
            novaSenha: ''
        };

        this.redefinir = this.redefinir.bind(this);

        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                 user.updatePassword(this.state.novaSenha);
                 Alert.alert('Senha alterada com sucesso!');
             }
         });
    }
    
    // teste = () => {
    //     this.redefinir = this.redefinir.bind(this);

    //     firebase.auth().signOut();

    //     firebase.auth().onAuthStateChanged((user) => {
    //         if(user) {
    //             user.updatePassword(this.state.novaSenha);
    //             Alert.alert('Senha alterada com sucesso!');
    //         }
    //     });
    // }

    redefinir () {

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error)=> {
           Alert.alert(error.code);
        });
    }

    render(){
        return(
            <SafeArea>
                <Area>
                    <BlocoTitulo>
                        <TituloAlterar>ALTERAR SENHA:</TituloAlterar>
                        <DescricaoAlterar>ESTÁ SE SENTINDO INSEGURO?{'\n'} PREENCHA OS CAMPOS ABAIXOS E MUDE SUA SENHA</DescricaoAlterar>
                    </BlocoTitulo>
                    <BlocoEmail>
                        <Email>DIGITE SEU E-MAIL:</Email>
                        <InputEmail autoCapitalize='none' onChangeText={(email) => this.setState({email})} placeholder="Digite seu e-mail"/>
                    </BlocoEmail>
                    <BlocoAntigaSenha>
                        <AntigaSenha>SENHA ANTIGA:</AntigaSenha>
                        <InputAntigaSenha secureTextEntry={true} onChangeText={(senhaAntiga) => this.setState({senhaAntiga})} placeholder='Digite sua senha antiga' />
                    </BlocoAntigaSenha>
                    <BlocoNovaSenha>
                        <NovaSenha>NOVA SENHA:</NovaSenha>
                        <InputNovaSenha secureTextEntry={true} onChangeText={(novaSenha) => this.setState({novaSenha})} placeholder='Digite sua nova senha' />
                    </BlocoNovaSenha>
                    <BlocoBotao>
                        <TouchableOpacity>
                            <BotaoAlterar onPress={this.redefinir}>ALTERAR</BotaoAlterar>
                        </TouchableOpacity>
                    </BlocoBotao>
                    <BlocoVoltar>
                        <TouchableOpacity>
                            <Voltar onPress={() => this.props.navigation.navigate('AccountScreen')}>Voltar</Voltar>
                        </TouchableOpacity>
                    </BlocoVoltar>
                </Area> 
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

const TituloAlterar = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-Italic';
font-size: 36;
margin-top: 80;
`;

const DescricaoAlterar = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-BoldItalic';
font-size: 16;
margin-bottom: 50;
`;

const BlocoTitulo = styled.View`
`;

const BlocoEmail = styled.View`
`;

const Email = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
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

const BlocoAntigaSenha = styled.View`
`;

const AntigaSenha = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputAntigaSenha = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
margin-bottom: 30;
width: 100%;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const BlocoNovaSenha = styled.View`
`;

const NovaSenha = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputNovaSenha = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
margin-bottom: 30;
width: 100%;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const BlocoBotao = styled.View`
background-color: #002B77;
width: 100%;
height: 50;
border-radius: 5;
border: 1px solid #002B77;
`;

const BotaoAlterar = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
color:#FFF;
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