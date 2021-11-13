import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
 
export default function Home() {
 return (
     
   <View style={styles.container}>
     <Text>Meu Perfil</Text>
     <Image 
     style = {styles.imagem}
     source = {require('../../pages/image/julio.png')} 
     />
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center'

    },
    imagem: {
      width: 150,
      height: 150,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });