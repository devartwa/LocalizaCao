import React from 'react';
import styled from 'styled-components/native';

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flatData: [
        {
          key: '01',
          nome: 'Arthur Bueno Neto',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'Aparecida - SP',
        },
        {
          key: '02',
          nome: 'Marcella Borges de Siqueira',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'São José dos Campos - SP',
        },
        {
          key: '03',
          nome: 'Rodrigo Resende',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'Taubaté - SP',
        },
        {
          key: '04',
          nome: 'Joao Emanuel',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'Potim - SP',
        },
        {
          key: '05',
          nome: 'Elisabete Mota',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'Potim - SP',
        },
        {
          key: '06',
          nome: 'Ricardo Gomes',
          descricao: 'Aqui é apenas um teste de descricao',
          cidade: 'Guaratinguetá - SP',
        },
      ],
    };
  }

  flatRender(item) {
    return (
      <SafeAreaDados>
        <Area>
          <Titulo>{item.nome}</Titulo>
        </Area>
        <AreaDescricao>
          <Descricao>{item.descricao} - </Descricao>
          <Cidade>{item.cidade}</Cidade>
        </AreaDescricao>
      </SafeAreaDados>
    );
  }

  render() {
    return (
      <SafeArea>
        <Lista
          data={this.state.flatData}
          renderItem={({item}) => this.flatRender(item)}
        />
      </SafeArea>
    );
  }
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

const SafeAreaDados = styled.SafeAreaView`
  background-color: yellow;
  margin-bottom: 5px;
  margin-left: 5px;
  margin-right: 5px;
  border-radius: 5px;
`;

const Titulo = styled.Text`
  font-size: 18px;
  color: #000;
`;

const Descricao = styled.Text`
  color: #000;
  font-size: 14px;
`;

const Cidade = styled.Text``;

const Lista = styled.FlatList``;

const Area = styled.View`
  padding: 10px;
`;

const AreaDescricao = styled.View`
  padding: 10px;
  flex-direction: row;
`;
