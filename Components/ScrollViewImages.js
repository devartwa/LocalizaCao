import React from 'react';
import { TouchableOpacity, Image} from 'react-native';
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

export default class Imagens extends React.Component {

    state = {
        imagemSelecionada: null
    }

    selecionarImagem = async () => {

        const options = {
            noData: true,
            mediaType: 'photo',
            title: '',
            cancelButtonTitle: 'Cancelar',
            takePhotoButtonTitle: 'Tirar foto',
            chooseFromLibraryButtonTitle: 'Escolher existente...',
        }

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
            } else if (response.error) {
            } else {
                this.setState({
                    imagemSelecionada: response.uri
                });
            }
        });
    }

    render() {
        return (
            <SafeArea>
                <ScrollView horizontal={true}>
                    <TouchableOpacity onPress={this.selecionarImagem}>
                        <AreaFoto>
                            {this.state.imagemSelecionada && <Image source={{ uri: this.state.imagemSelecionada }} style={{ marginTop: 25, width: 200, height: 150, borderRadius: 15}} />}  
                            <Icon style={{ alignSelf: 'center' }} name="camera" size={30} color="#F2F2F2" />
                        </AreaFoto>
                    </TouchableOpacity>
                </ScrollView>
            </SafeArea>
        );
    }
}

const SafeArea = styled.SafeAreaView`
`;

const AreaFoto = styled.View`
align-self: center;
justify-content: center;
margin-bottom: 50;
margin-top: 50;
background-color: #002b77;
width: 125;
height: 125;
border-radius: 360;
margin-left: 5;
margin-right: 5;
`;