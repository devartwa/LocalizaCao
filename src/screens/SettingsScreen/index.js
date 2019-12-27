import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';


export default class SettingsScreen extends React.Component{

    render(){
        
        return(
            <SafeArea>
                <Area>
                    <Titulo>SAIBA MAIS:</Titulo>
                    <Subtitulo>AQUI VOCÊ CONSEGUIRÁ TIRAR TODAS AS SUAS DÚVIDAS</Subtitulo>
                    <TituloDuvidas>DÚVIDAS</TituloDuvidas>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={() => this.props.navigation.navigate('FAQScreen')}>
                    <AreaDuvidas>
                        <Icon name="info" size={18} style={{marginLeft: 10, color: '#002b77'}}/>
                        <Duvidas>DÚVIDAS FREQUENTES</Duvidas>   
                    </AreaDuvidas>
                        <Icon name="arrow-right" size={12} style={{ marginTop: 12, color: '#002b77'}}/>
                </TouchableOpacity>
                <TituloPaginas>PÁGINAS</TituloPaginas>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={() => Linking.openURL("https://www.facebook.com/buenoitsme")}>
                    <AreaPaginas>
                        <Icon name="social-facebook" size={18} style={{color: '#002b77'}}/>
                        <Facebook>PÁGINA DO FACEBOOK</Facebook>
                    </AreaPaginas>
                        <Icon name="arrow-right" size={12} style={{ marginTop: 12, color: '#002b77'}}/>
                </TouchableOpacity>
                <TituloAjuda>AJUDA</TituloAjuda>
                <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={() => this.props.navigation.navigate('HelpScreen')}>
                    <AreaAjuda>
                        <Icon name="bubbles" size={18} style={{marginLeft: 10, color: '#002b77'}}/>
                        <Ajuda>AJUDA E CONTATO</Ajuda>   
                    </AreaAjuda>
                        <Icon name="arrow-right" size={12} style={{ marginTop: 12, color: '#002b77'}}/>
                </TouchableOpacity>
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
`;

const Titulo = styled.Text`
color: #002B77;
text-align: center;
font-family: 'BarlowCondensed-Italic';
font-size: 36;
margin-top: 80;
`;

const Subtitulo = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
text-align: center;
color: #002B77;
margin-bottom: 50;
font-size: 16;
`;

const TituloDuvidas = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
margin-left: 10;
`;

const AreaDuvidas = styled.View`
background-color: #F2F2F2;
flex-direction: row;
margin-bottom: 5;
height: 40;
align-items: center;
`;

const Duvidas = styled.Text`
font-size: 16;
font-family: BarlowCondensed-BoldItalic;
color: #002b77;
margin-left: 10;
`;

const TituloPaginas = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
margin-left: 10;
`;

const AreaPaginas = styled.View`
background-color: #F2F2F2;
flex-direction: row;
margin-bottom: 5;
margin-left: 10;
height: 40;
align-items: center;
`;

const Facebook = styled.Text`
font-size: 16;
font-family: BarlowCondensed-BoldItalic;
color: #002b77;
margin-left: 10;
`;

const TituloAjuda = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
margin-left: 10;
`;

const AreaAjuda = styled.View`
background-color: #F2F2F2;
flex-direction: row;
margin-bottom: 5;
height: 40;
align-items: center;
`;

const Ajuda = styled.Text`
font-size: 16;
font-family: BarlowCondensed-BoldItalic;
color: #002b77;
margin-left: 10;
`;