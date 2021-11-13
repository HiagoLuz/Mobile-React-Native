import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
 
class App extends Component{
  render(){
 
    return(
      <View>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
          Meu perfil
        </Text>
 
        <Image
          source={ require('./imagem/julio.jpg') }
          style={{ width: 300, height: 300}}
        />
        <Text>José Julio Arantes de Lemos.</Text>
        <Text>Tel:991131677. </Text>
        <Text>Formação:</Text>
        <Text>Eletricista de manutenção eletroeletrônica - Senai. </Text>
        <Text>Cursando: </Text>
        <Text>Analise e desenvolvimento de sistemas - Unip</Text>
        <Text>Experiência: </Text>
        <Text>Ajudante de lubrificação - TERRACOM. </Text>
 
      </View>
    )
  }
}
 
export default App;
