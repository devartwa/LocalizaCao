import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import styled from 'styled-components/native';

export default class HelpScreen extends React.Component{
    render(){
        return(
            <SafeArea>
                <Area>
                    <BlocoTitulo>
                        <Titulo>AJUDA E CONTATO</Titulo>
                    </BlocoTitulo>
                    <BlocoDescricao>
                        <Descricao>ESTÁ COM ALGUM PROBLEMA? QUER DAR UMA SUGESTÃO?{'\n'} ENTRE EM CONTATO</Descricao>
                    </BlocoDescricao>
                    <BlocoTexto>
                        <Texto>E ai, tudo bem?{'\n'}Se você chegou até aqui, é sinal que você quer entrar em contato comigo.{'\n'}
                        Caso queira dar uma sugestão, fazer uma critica, ou até mesmo saber mais sobre o meu trabalho, me mande uma mensagem.
                        </Texto>
                    </BlocoTexto>
                    <BlocoContato>
                        <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/buenoitsme")}>
                            <BackgroundFacebook>
                                <BotaoFacebook>Facebook</BotaoFacebook>
                            </BackgroundFacebook>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL("https://wa.me/5512997351169")}>
                            <BackgroundFacebook>
                                <BotaoWhatsapp>WhatsApp</BotaoWhatsapp>
                            </BackgroundFacebook>
                        </TouchableOpacity>
                    </BlocoContato>
                    <BlocoVoltar>
                        <TouchableOpacity>
                            <Voltar onPress={() => this.props.navigation.navigate('Configurações')}>VOLTAR</Voltar>
                        </TouchableOpacity>
                    </BlocoVoltar>
                </Area>
            </SafeArea>
        );
    }
}

const SafeArea = styled.SafeAreaView`
flex: 1;
background-color: #f2f2f2
`;

const Area = styled.View`
background-color: #f2f2f2;
align-self: center;
width: 80%;
`;

const BlocoTitulo = styled.View``;

const Titulo = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-Italic';
font-size: 36;
margin-top: 80;
`;

const BlocoDescricao = styled.View``;

const Descricao = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
text-align: center;
color: #002B77;
margin-bottom: 50;
font-size: 16;
`;

const BlocoTexto = styled.View`
`;

const Texto = styled.Text`
font-family: 'BarlowCondensed-Italic';
font-size: 16;
color: #002b77;
margin-bottom: 30;
`;

const BlocoContato = styled.View`
`;

const BackgroundFacebook = styled.View`
background-color: #002B77;
width: 100%;
height: 50;
border-radius: 5;
border: 1px solid #002B77;
margin-bottom: 10;
`;

const BotaoFacebook = styled.Text`
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

const BotaoWhatsapp = styled.Text`
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