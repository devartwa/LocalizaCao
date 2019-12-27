import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default class RecoveryScreen extends React.Component {
    render(){
        return(
            <SafeArea>
                <Area>
                    <BlocoRecuperar>
                        <TituloRecuperar>RECUPERAR SENHA:</TituloRecuperar>
                        <DescricaoRecuperar>PARA RECUPERAR A SUA SENHA É SIMPLES,{'\n'} BASTA VOCÊ COLOCAR O E-MAIL CADASTRADO ABAIXO{'\n'} E SEGUIR OS PASSOS</DescricaoRecuperar>
                        <Recuperar>RECUPERAR SENHA:</Recuperar>
                        <InputRecuperar placeholder="Digite seu e-mail"/>
                    </BlocoRecuperar>
                    <BlocoBotao>
                        <TouchableOpacity>
                            <BotaoRecuperar>ENVIAR</BotaoRecuperar>
                        </TouchableOpacity>
                    </BlocoBotao>
                    <BlocoVoltar>
                        <TouchableOpacity>
                            <Voltar onPress={() => this.props.navigation.navigate('LoginScreen')}>Voltar</Voltar>
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

const BlocoRecuperar = styled.View`
`;

const TituloRecuperar = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-Italic';
font-size: 36;
margin-top: 80;
`;

const Recuperar = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const DescricaoRecuperar = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-BoldItalic';
font-size: 16;
margin-bottom: 50;
`;

const InputRecuperar = styled.TextInput`
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

const BotaoRecuperar = styled.Text`
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