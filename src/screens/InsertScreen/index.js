import React from 'react';
import {
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';
import styled from 'styled-components/native';
import Imagens from '../../../Components/ScrollViewImages';

export default class InsertScreen extends React.Component {
  render() {
    let cidades = [
      {
        value: 'Aparecida',
      },
      {
        value: 'Arapeí',
      },
      {
        value: 'Areias',
      },
      {
        value: 'Bananal',
      },
      {
        value: 'Caçapava',
      },
      {
        value: 'Cachoeira Paulista',
      },
      {
        value: 'Campos do Jordão',
      },
      {
        value: 'Canas',
      },
      {
        value: 'Caraguatatuba',
      },
      {
        value: 'Cruzeiro',
      },
      {
        value: 'Cunha',
      },
      {
        value: 'Guaratinguetá',
      },
      {
        value: 'Igaratá',
      },
      {
        value: 'Ilhabela',
      },
      {
        value: 'Jacareí',
      },
      {
        value: 'Jambeiro',
      },
      {
        value: 'Lagoinha',
      },
      {
        value: 'Lavrinhas',
      },
      {
        value: 'Lorena',
      },
      {
        value: 'Monteiro Lobato',
      },
      {
        value: 'Natividade da Serra',
      },
      {
        value: 'Paraibuna',
      },
      {
        value: 'Pindamonhangaba',
      },
      {
        value: 'Piquete',
      },
      {
        value: 'Potim',
      },
      {
        value: 'Queluz',
      },
      {
        value: 'Redenção da Serra',
      },
      {
        value: 'Roseira',
      },
      {
        value: 'Santa Branca',
      },
      {
        value: 'Santo Antonio do Pinhal',
      },
      {
        value: 'São Bento do Sapucaí',
      },
      {
        value: 'São José do Barreiro',
      },
      {
        value: 'São José dos Campos',
      },
      {
        value: 'São Luís do Paraitinga',
      },
      {
        value: 'São Sebastião',
      },
      {
        value: 'Silveiras',
      },
      {
        value: 'Taubaté',
      },
      {
        value: 'Tremembé',
      },
      {
        value: 'Ubatuba',
      },
      ,
    ];

    let categorias = [
      {
        value: 'Cão',
      },
      {
        value: 'Gato',
      },
    ];

    return (
      <ScrollView>
        <SafeArea>
          <AreaGeral>
            <Imagens />
            <AreaTitulo>
              <Titulo>TÍTULO:</Titulo>
              <InputTitulo placeholder="Titulo do seu anuncio, escolha com sabedoria." />
            </AreaTitulo>
            <AreaDescricao>
              <Descricao>DESCRIÇÃO:</Descricao>
              <InputDescricao
                multiline={true}
                numberOfLines={4}
                placeholder="Escreva a descrição do seu anúncio bem detalhadamente"
              />
            </AreaDescricao>
            <AreaTelefone>
              <Telefone>TELEFONE:</Telefone>
              <InputTelefone
                keyboardType="phone-pad"
                placeholder="(12)12345-6789"
              />
            </AreaTelefone>
            <Categorias>
              <Dropdown
                label="Categoria"
                data={categorias}
                baseColor="#002B77"
              />
            </Categorias>
            <Cidades>
              <Dropdown label="Cidade" data={cidades} baseColor="#002B77" />
            </Cidades>
            <AreaBotao>
              <TouchableOpacity>
                <BotaoPublicar>Publicar</BotaoPublicar>
              </TouchableOpacity>
            </AreaBotao>
          </AreaGeral>
        </SafeArea>
      </ScrollView>
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

const AreaTitulo = styled.View``;

const Titulo = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputTitulo = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  margin-bottom: 30px;
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const AreaDescricao = styled.View``;

const Descricao = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputDescricao = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  width: 100%;
  height: 90px;
  margin-bottom: 30px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const Cidades = styled.View`
  margin-bottom: 15px;
`;

const Categorias = styled.View``;

const AreaTelefone = styled.View``;

const Telefone = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputTelefone = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  width: 100%;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const AreaBotao = styled.View`
  background-color: #002b77;
  margin-top: 40px;
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #002b77;
  margin-bottom: 100px;
`;

const BotaoPublicar = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  width: 318px;
  height: 50px;
  text-align: center;
  padding: 11px;
  font-size: 20px;
`;
