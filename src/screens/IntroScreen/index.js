import React from 'react';
import { StyleSheet, SafeAreaView, Text, ImageBackground, View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import App from '../LoginScreen';

const slides = [
  {
    key: 'slide1',
    title: 'LocalizaCão',
    text: 'A melhor maneira de encontrar o seu pet',
  },
  {
    key: 'slide2',
    title: 'COMO USAR:',
    text: 'É simples, basta pesquisar por cidade ou categoria\nDepois só precisa entrar em contato via telefone',
  },
  {
    key: 'slide3',
    title: 'DICA IMPORTANTE:',
    text: 'Para publicar um animal perdido, é necessário\na criação de uma conta'
  }
];

export default class IntroScreen extends React.Component {

  _renderItem = ({ item }) => {
    return (
      <ImageBackground source={require('../../../assets/imgs/dog1.png')} style={styles.container}>  
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.descricao}>{item.text}</Text>
      </ImageBackground> 
    );
  }

  _onSkip =() => {
    this.props.navigation.navigate('LoginScreen');
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('LoginScreen');
  }
  render() {
      return <AppIntroSlider  activeDotStyle={{backgroundColor: '#002B77'}} showSkipButton={true} renderItem={this._renderItem} slides={slides} onSkip={this._onSkip}  onDone={this._onDone} renderNextButton={this._renderNextButton} renderDoneButton={this._renderDoneButton}  buttonTextStyle={{fontFamily: 'BarlowCondensed-Bold', fontSize: 20, color: '#002B77'}} nextLabel='Próximo' doneLabel='Finalizar' skipLabel='Pular'/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#F2F2F2'
  },
  titulo: {
    textAlign: 'center',
    fontSize: 36,
    color: '#002b77',
    fontFamily: 'BarlowCondensed-Italic',
    marginBottom: 10,
  },
  descricao: {
    textAlign: 'center',
    fontSize: 18,
    color: '#002b77',
    fontFamily: 'BarlowCondensed-BoldItalic',
  }
});