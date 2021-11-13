import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
 
export default function Pessoal() {
 return (
     
<View style={styles.container}>
    <Text>Nome: José Julio Arantes De Lemos</Text>
    <Image 
    style={styles.imagem}
    source = {require('../../pages/image/julio.png')} 
    />
    <Text style={styles.texto}>Estou cursando ads ('Analise e desenvolvimento de sistemas'), e tenho como objetivo, um dia ser um bom 
    profissional na área, tenho muitas dificuldades mas sou muito esforçado e sinto que cada dia aprendo um pouco mais.
    Busco oportunidade para por em pratica e me aperfeiçoar cada dia mais.</Text>
</View>
  );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      alignItems: 'center',
      justifyContent: 'center'

    },
    imagem: {
      width: 150,
      height: 150,
    },
    texto:{
        paddingTop: 5,

    }
  });
