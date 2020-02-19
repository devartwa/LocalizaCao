import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import auth from '@react-native-firebase/auth';

export default class SettingsScreen extends React.Component {
  async logout() {
    await auth().signOut();
    this.props.navigation.replace('LoginScreen');
  }
  render() {
    return (
      <SafeArea>
        <Area>
          <Titulo>SAIBA MAIS:</Titulo>
          <Subtitulo>
            AQUI VOCÊ CONSEGUIRÁ TIRAR TODAS AS SUAS DÚVIDAS
          </Subtitulo>
          <TituloDuvidas>DÚVIDAS</TituloDuvidas>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
            onPress={() => this.props.navigation.navigate('FAQScreen')}>
            <AreaDuvidas>
              <Icon
                name="info"
                size={18}
                style={{marginLeft: 10, color: '#002b77'}}
              />
              <Duvidas>DÚVIDAS FREQUENTES</Duvidas>
            </AreaDuvidas>
            <Icon
              name="arrow-right"
              size={12}
              style={{marginTop: 12, color: '#002b77'}}
            />
          </TouchableOpacity>
          <TituloPaginas>PÁGINAS</TituloPaginas>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
            onPress={() =>
              Linking.openURL('https://www.facebook.com/buenoitsme')
            }>
            <AreaPaginas>
              <Icon
                name="social-facebook"
                size={18}
                style={{color: '#002b77'}}
              />
              <Facebook>PÁGINA DO FACEBOOK</Facebook>
            </AreaPaginas>
            <Icon
              name="arrow-right"
              size={12}
              style={{marginTop: 12, color: '#002b77'}}
            />
          </TouchableOpacity>

          <TituloAjuda>AJUDA</TituloAjuda>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
            onPress={() => this.props.navigation.navigate('HelpScreen')}>
            <AreaAjuda>
              <Icon
                name="bubbles"
                size={18}
                style={{marginLeft: 10, color: '#002b77'}}
              />
              <Ajuda>AJUDA E CONTATO</Ajuda>
            </AreaAjuda>
            <Icon
              name="arrow-right"
              size={12}
              style={{marginTop: 12, color: '#002b77'}}
            />
          </TouchableOpacity>

          <TituloAjuda>CONTA</TituloAjuda>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
            }}
            onPress={this.logout}>
            <AreaAjuda>
              <Icon
                name="logout"
                size={18}
                style={{marginLeft: 10, color: '#002b77'}}
              />
              <Ajuda>Sair</Ajuda>
            </AreaAjuda>
            <Icon
              name="arrow-right"
              size={12}
              style={{marginTop: 12, color: '#002b77'}}
            />
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

const TituloDuvidas = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
  margin-left: 10px;
`;

const AreaDuvidas = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  margin-bottom: 5px;
  height: 40px;
  align-items: center;
`;

const Duvidas = styled.Text`
  font-size: 16px;
  font-family: BarlowCondensed-BoldItalic;
  color: #002b77;
  margin-left: 10px;
`;

const TituloPaginas = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
  margin-left: 10px;
`;

const AreaPaginas = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  margin-bottom: 5px;
  margin-left: 10px;
  height: 40px;
  align-items: center;
`;

const Facebook = styled.Text`
  font-size: 16px;
  font-family: BarlowCondensed-BoldItalic;
  color: #002b77;
  margin-left: 10px;
`;

const TituloAjuda = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
  margin-left: 10px;
`;

const AreaAjuda = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  margin-bottom: 5px;
  height: 40px;
  align-items: center;
`;

const Ajuda = styled.Text`
  font-size: 16px;
  font-family: BarlowCondensed-BoldItalic;
  color: #002b77;
  margin-left: 10px;
`;
