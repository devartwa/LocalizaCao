import React from 'react';
import {Image, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class AccountScreen extends React.Component {
  render() {

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeArea>
            <AreaProfile>
                <AreaTitulo>
                  <TouchableOpacity>
                  <Icon name='options-vertical' size={16} color='#FFF' />
                  </TouchableOpacity>
                </AreaTitulo>
                <Titulo>MINHA CONTA</Titulo>
                <Image source={require('../../../assets/imgs/user-profile.png')} style={{width: 129, height: 129, alignSelf: 'center', marginTop: 10, marginBottom: 10}} />
                <User>
                  @nomedeusuario
                </User>
            </AreaProfile>
            <ListaInput>
            <AreaInput>
              <BlocoNome>
                <NomeCompleto>NOME COMPLETO:</NomeCompleto>
                <InputNome placeholder='EX: NOME COMPLETO' />
              </BlocoNome>
              <BlocoApelido>
                <Apelido>APELIDO:</Apelido>
                <InputApelido placeholder='EX: NOMEDEUSUÁRIO' />
                <DescricaoApelido>Atenção! Esse nome será exibido nos anúncios.</DescricaoApelido>
              </BlocoApelido>
              <BlocoCPF>
                <CPF>CPF/CNPJ:</CPF>
                <InputCPF placeholder='CPF/CPNJ (Apenas números)' keyboardType='phone-pad' />
              </BlocoCPF>
              <BlocoEmail>
                <Email>EMAIL:</Email>
                <InputEmail placeholder='EX: EMAIL@GMAIL.COM '/>
              </BlocoEmail>
              <BlocoEndereco>
                <Endereco>ENDEREÇO:</Endereco>
                <InputEndereco placeholder='EX: RUA DE EXEMPLO, 123' />
              </BlocoEndereco>
            </AreaInput>
              <AreaBotao>
                  <TouchableOpacity>
                    <BotaoSalvar>Salvar alterações</BotaoSalvar>
                </TouchableOpacity>
            </AreaBotao>
            </ListaInput>
            <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'space-between', padding: 5}} onPress={() => this.props.navigation.navigate('ChangePasswordScreen')}>
                    <AreaSenha>
                        <Icon name="shield" size={18} style={{marginLeft: 10, color: '#002b77'}}/>
                        <AlterarSenha>ALTERAR SENHA</AlterarSenha>   
                    </AreaSenha>
                        <Icon name="arrow-right" size={12} style={{ marginTop: 12, color: '#002b77'}}/>
            </TouchableOpacity>
        </SafeArea>
        </TouchableWithoutFeedback>
    );
  }
}


const SafeArea = styled.SafeAreaView`
flex: 1;
background-color: #F2F2F2
`;

const AreaTitulo = styled.View`
justify-content: flex-end;
align-self: flex-end;
padding: 5px;
`;

const AreaProfile = styled.View`
background-color: #002b77;
height: 250;
`;

const AreaInput = styled.View`
flex: 2;
background-color: #f2f2f2;
`;

const Titulo = styled.Text`
font-family: 'BarlowCondensed-Italic';
font-size: 36; 
justify-content: center;
text-align: center;
color: #FFF;
`;

const User = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
font-size: 18;
justify-content: center;
text-align: center;
color: #FFF;
`;

const ListaInput = styled.ScrollView`
`;

const BlocoNome = styled.View`
margin-top: 30;
margin-left: 15;
margin-right: 15;
`;

const NomeCompleto = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputNome = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const BlocoApelido = styled.View`
margin-top: 15;
margin-left: 15;
margin-right: 15;
`;

const Apelido = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputApelido = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const DescricaoApelido = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
color: #002B77;
`;

const BlocoCPF = styled.View`
margin-top: 15;
margin-left: 15;
margin-right: 15;
`;

const CPF = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputCPF = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const BlocoEmail = styled.View`
margin-top: 15;
margin-left: 15;
margin-right: 15;
`;

const Email = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputEmail = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const BlocoEndereco = styled.View`
margin-top: 15;
margin-left: 15;
margin-right: 15;
`;

const Endereco = styled.Text`
font-family: 'BarlowCondensed-Italic';
color: #002B77;
font-size: 16;
`;

const InputEndereco = styled.TextInput`
background-color: #e6e6e6;
font-family: 'BarlowCondensed-Italic';
height: 45;
border-radius: 5;
font-size: 18;
padding-horizontal: 10;
`;

const AreaBotao = styled.View`
background-color: #002B77;
margin-top: 20;
height: 50;
border-radius: 5;
border: 1px solid #002B77;
margin-bottom: 100;
margin-right: 15;
margin-left: 15;
`;

const BotaoSalvar = styled.Text`
font-family: 'BarlowCondensed-BoldItalic';
color:#FFF;
margin-bottom: 15;
border-radius: 5;
height: 50;
text-align: center;
padding: 11px;
font-size: 20;
`;

const AreaSenha = styled.View`
background-color: #F2F2F2;
flex-direction: row;
margin-bottom: 5;
height: 40;
align-items: center;
`;

const AlterarSenha = styled.Text`
font-size: 16;
font-family: BarlowCondensed-BoldItalic;
color: #002b77;
margin-left: 10;
`;