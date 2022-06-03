import React from 'react'
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native'


const colorGithub = '#010409'
const colorFontGithub = '#c9d1d9'
const colorDarkFontGithub = '#4f565e'
const urlGithub = 'https://github.com/PauloFeresin'

const imageProfileGithub = 'https://tinyurl.com/2p9sv8mu'
const App = () => {

    const handlePressGoToGithub = async () => {
        console.log("Verificando link");
        const res = await Linking.canOpenURL(urlGithub);

        if(res){
            console.log("Link aprovado");
            console.log("Abrindo link...");
            await Linking.openURL(urlGithub);
        };
    };

    return (
        <SafeAreaView style={style.container}> 
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image
                    accessibilityLabel='Paulo sorrindo, em preto e branco'
                    style={style.avatar}
                    source={{uri: imageProfileGithub}}>
                </Image>
                <Text accessibilityLabel= "Nome: Paulo Feresin" style={[style.defaultText, style.name]}>Paulo Feresin</Text>
                <Text accessibilityLabel= "Nickname: pauloferesin" style={[style.defaultText, style.nickname]}>pauloferesin</Text>
                <Text accessibilityLabel= "Descrição: Em busca do próximo desafio" style={[style.defaultText, style.description]}>Em busca do próximo desafio!</Text>
                
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
      );
    };

export default App;

const style = StyleSheet.create({
    container:{
        // Padrão coluna
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        // flexDirection: 'row' -> Altera para linhas
        },
    content:{
        alignItems: 'center',
        padding: 20,
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    defaultText:{
        color: 'white'
    },
    name:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
        color: colorFontGithub,
    },
    nickname:{
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description:{
        fontWeight: 'bold',
        fontSize: 14,
    },
    button:{
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
    },
    textButton:{
        fontWeight: 'bold',
        fontSize: 16,
    },
})