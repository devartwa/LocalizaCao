import React from 'react';
import styled from 'styled-components/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {Accordion, Icon} from 'native-base';

const SECTIONS = [
  {
    title: 'Por que o LocalizaCão foi criado?',
    content:
      'O nosso principal objetivo é ajudar pessoas a acharem seus pets perdidos. O aplicativo surgiu de uma necessidade da nossa região, onde vemos pessoas desesperadas procurando seus pets e sem lugar para procurar.',
  },
  {
    title: 'Eu tenho que pagar para anunciar?',
    content: 'Não, e não é pegadinha...',
  },
  {
    title: 'Como eu faço para achar meu pet?',
    content:
      'O app funciona de uma maneira simples, basta você buscar por cidades e categorias. Todos os animais achados e perdidos irão aparecer, e caso você ache o seu pet, só precisa entrar em contato via telefone com o anunciante.',
  },
  {
    title: 'Preciso criar uma conta para anunciar?',
    content:
      'Sim, precisa. Ao criar o anúncio, você fornecerá seu numero de telefone para que o dono do animal entre em contato.',
  },
];

export default class FAQScreen extends React.Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            backgroundColor: '#F2F2F2',
            color: '#002b77',
            fontFamily: 'BarlowCondensed-Italic',
            fontSize: 22,
          }}>
          {item.title}
        </Text>
        {expanded ? (
          <Icon style={{fontSize: 18, color: '#002b77'}} name="arrow-up" />
        ) : (
          <Icon style={{fontSize: 18, color: '#002b77'}} name="arrow-down" />
        )}
      </View>
    );
  }

  render() {
    return (
      <SafeArea>
        <Area>
          <Titulo>DÚVIDAS FREQUENTES:</Titulo>
          <Subtitulo>AQUI ESTÃO ALGUMAS POSSÍVEIS DÚVIDAS</Subtitulo>
          <Accordion
            dataArray={SECTIONS}
            expanded={0}
            renderHeader={this._renderHeader}
            headerStyle={{backgroundColor: '#F2F2F2'}}
            contentStyle={{
              backgroundColor: '#F2F2F2',
              color: '#002b77',
              fontFamily: 'BarlowCondensed-BoldItalic',
              fontSize: 18,
            }}
          />
        </Area>
        <BlocoVoltar>
          <TouchableOpacity>
            <Voltar onPress={() => this.props.navigation.goBack()}>
              VOLTAR
            </Voltar>
          </TouchableOpacity>
        </BlocoVoltar>
      </SafeArea>
    );
  }
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

const Area = styled.View``;

const Titulo = styled.Text`
  color: #002b77;
  text-align: center;
  font-family: 'BarlowCondensed-Italic';
  font-size: 36px;
  margin-top: 80px;
`;

const Subtitulo = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  text-align: center;
  color: #002b77;
  margin-bottom: 50px;
  font-size: 16px;
`;

const BlocoVoltar = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-self: center;
  border: 1px solid #002b77;
  border-radius: 5px;
  width: 60px;
  height: 25px;
`;

const Voltar = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #002b77;
  font-size: 16px;
  text-align: center;
`;
