import React from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class AccountScreen extends React.Component {
  render() {
    return (
      <SafeArea>
        <AreaProfile>
          <AreaTitulo>
            <TouchableOpacity>
              <Icon name="options-vertical" size={16} color="#FFF" />
            </TouchableOpacity>
          </AreaTitulo>
          <Titulo>MINHA CONTA</Titulo>
          <Image
            source={require('../../../assets/imgs/user-profile.png')}
            style={{
              width: 129,
              height: 129,
              alignSelf: 'center',
              marginTop: 10,
              marginBottom: 10,
            }}
          />
          <User>@nomedeusuario</User>
        </AreaProfile>
        <ListaInput>
          <AreaInput>
            <BlocoNome>
              <NomeCompleto>NOME COMPLETO:</NomeCompleto>
              <InputNome placeholder="EX: NOME COMPLETO" />
            </BlocoNome>
            <BlocoApelido>
              <Apelido>APELIDO:</Apelido>
              <InputApelido placeholder="EX: NOMEDEUSUÁRIO" />
              <DescricaoApelido>
                Atenção! Esse nome será exibido nos anúncios.
              </DescricaoApelido>
            </BlocoApelido>
            <BlocoCPF>
              <CPF>CPF/CNPJ:</CPF>
              <InputCPF
                placeholder="CPF/CPNJ (Apenas números)"
                keyboardType="phone-pad"
              />
            </BlocoCPF>
            <BlocoEmail>
              <Email>EMAIL:</Email>
              <InputEmail placeholder="EX: EMAIL@GMAIL.COM " />
            </BlocoEmail>
            <BlocoEndereco>
              <Endereco>ENDEREÇO:</Endereco>
              <InputEndereco placeholder="EX: RUA DE EXEMPLO, 123" />
            </BlocoEndereco>
          </AreaInput>
          <AreaBotao>
            <TouchableOpacity>
              <BotaoSalvar>Salvar alterações</BotaoSalvar>
            </TouchableOpacity>
          </AreaBotao>
        </ListaInput>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 5,
          }}
          onPress={() =>
            this.props.navigation.navigate('ChangePasswordScreen')
          }>
          <AreaSenha>
            <Icon
              name="shield"
              size={18}
              style={{marginLeft: 10, color: '#002b77'}}
            />
            <AlterarSenha>ALTERAR SENHA</AlterarSenha>
          </AreaSenha>
          <Icon
            name="arrow-right"
            size={12}
            style={{marginTop: 12, color: '#002b77'}}
          />
        </TouchableOpacity>
      </SafeArea>
    );
  }
}

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #f2f2f2;
`;

const AreaTitulo = styled.View`
  justify-content: flex-end;
  align-self: flex-end;
  padding: 5px;
`;

const AreaProfile = styled.View`
  background-color: #002b77;
  height: 250px;
`;

const AreaInput = styled.View`
  flex: 2;
  background-color: #f2f2f2;
`;

const Titulo = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  font-size: 36px;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const User = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  font-size: 18px;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

const ListaInput = styled.ScrollView``;

const BlocoNome = styled.View`
  margin-top: 30px;
  margin-left: 15px;
  margin-right: 15px;
`;

const NomeCompleto = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputNome = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const BlocoApelido = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Apelido = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputApelido = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const DescricaoApelido = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #002b77;
`;

const BlocoCPF = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const CPF = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputCPF = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const BlocoEmail = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Email = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputEmail = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const BlocoEndereco = styled.View`
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

const Endereco = styled.Text`
  font-family: 'BarlowCondensed-Italic';
  color: #002b77;
  font-size: 16px;
`;

const InputEndereco = styled.TextInput`
  background-color: #e6e6e6;
  font-family: 'BarlowCondensed-Italic';
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  padding: 0 10px;
`;

const AreaBotao = styled.View`
  background-color: #002b77;
  margin-top: 20px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #002b77;
  margin-bottom: 100px;
  margin-right: 15px;
  margin-left: 15px;
`;

const BotaoSalvar = styled.Text`
  font-family: 'BarlowCondensed-BoldItalic';
  color: #fff;
  margin-bottom: 15px;
  border-radius: 5px;
  height: 50px;
  text-align: center;
  padding: 11px;
  font-size: 20px;
`;

const AreaSenha = styled.View`
  background-color: #f2f2f2;
  flex-direction: row;
  margin-bottom: 5px;
  height: 40px;
  align-items: center;
`;

const AlterarSenha = styled.Text`
  font-size: 16px;
  font-family: BarlowCondensed-BoldItalic;
  color: #002b77;
  margin-left: 10px;
`;
