import React from 'react';
import {TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styled from 'styled-components/native';
import Imagens from '../../../Components/ScrollViewImages';

export default class InsertScreen extends React.Component{

    render(){

        let cidades = [{
            value: 'Aparecida',
          }, {
            value: 'Arapeí',
          }, {
            value: 'Areias',
          }, {
            value: 'Bananal',
          }, {
            value: 'Caçapava',
          }, {
            value: 'Cachoeira Paulista',
          }, {
            value: 'Campos do Jordão',
          }, {
            value: 'Canas',
          }, {
            value: 'Caraguatatuba',
          }, {
            value: 'Cruzeiro',
          }, {
            value: 'Cunha',
          }, {
            value: 'Guaratinguetá',
          }, {
            value: 'Igaratá',
          }, {
            value: 'Ilhabela',
          }, {
            value: 'Jacareí',
          }, {
            value: 'Jambeiro',
          }, {
            value: 'Lagoinha',
          }, {
            value: 'Lavrinhas',
          }, {
            value: 'Lorena',
          }, {
            value: 'Monteiro Lobato',
          }, {
            value: 'Natividade da Serra',
          }, {
            value: 'Paraibuna',
          }, {
            value: 'Pindamonhangaba',
          }, {
            value: 'Piquete',
          }, {
            value: 'Potim',
          }, {
            value: 'Queluz',
          }, {
            value: 'Redenção da Serra',
          }, {
            value: 'Roseira',
          }, {
            value: 'Santa Branca',
          }, {
            value: 'Santo Antonio do Pinhal',
          }, {
            value: 'São Bento do Sapucaí',
          }, {
            value: 'São José do Barreiro',
          }, {
            value: 'São José dos Campos',
          }, {
            value: 'São Luís do Paraitinga',
          }, {
            value: 'São Sebastião',
          }, {
            value: 'Silveiras',
          }, {
            value: 'Taubaté',
          }, {
            value: 'Tremembé',
          }, {
            value: 'Ubatuba',
          }
        ];

        let categorias = [{
            value: 'Cão',
          }, {
            value: 'Gato',
          }];

        return(
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeArea>
                <AreaGeral>
                    <Imagens />
                    <AreaTitulo>
                        <Titulo>TÍTULO:</Titulo>
                        <InputTitulo placeholder="Titulo do seu anuncio, escolha com sabedoria."/>
                    </AreaTitulo>
                    <AreaDescricao>
                        <Descricao>DESCRIÇÃO:</Descricao>
                        <InputDescricao multiline={true}
                        numberOfLines={4} placeholder="Escreva a descrição do seu anúncio bem detalhadamente"/>
                    </AreaDescricao>
                    <AreaTelefone>
                        <Telefone>TELEFONE:</Telefone>
                        <InputTelefone keyboardType='phone-pad' placeholder="(12)12345-6789"/>
                    </AreaTelefone>
                    <Categorias>
                        <Dropdown label='Categoria' data={categorias} baseColor='#002B77'/>
                    </Categorias>
                    <Cidades>
                        <Dropdown label='Cidade' data={cidades} baseColor='#002B77'/>
                    </Cidades>
                    <AreaBotao>
                        <TouchableOpacity>
                            <BotaoPublicar>Publicar</BotaoPublicar>
                        </TouchableOpacity>
                    </AreaBotao>
                </AreaGeral>
            </SafeArea>
            </TouchableWithoutFeedback>
        );
    }
}

const SafeArea = styled.SafeAreaView`
flex: 1;
background-color: #f2f2f2;
`;

const AreaGeral = styled.View`
width: 80%;
justify-content: center;
align-self: center;
`;

const AreaTitulo = styled.View`
`;

const Titulo = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputTitulo = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
margin-bottom: 30;
width: 100%;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const AreaDescricao = styled.View`
`;

const Descricao = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputDescricao = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
width: 100%;
height: 90;
margin-bottom: 30;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const Cidades = styled.View`
margin-bottom: 15;
`;

const Categorias = styled.View`
`;

const AreaTelefone = styled.View`
`;

const Telefone = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputTelefone = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
width: 100%;
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const AreaBotao = styled.View`
background-color: #002B77;
margin-top: 40;     
width: 100%;
height: 50;
border-radius: 5;
border: 1px solid #002B77;
margin-bottom: 100;
`;

const BotaoPublicar = styled.Text`
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