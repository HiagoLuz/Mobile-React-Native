import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Formacao() {
 return (
     
   <View style={styles.container}>
     <Text>-Analise e desenvolvimento de Sistemas/ Cursando - Unip <br/>
     - Eletricista de Manutenção eletroeletrônica - Senai <br/>
     </Text>
   </View>
  );
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 5,
      alignItems: 'left',
      justifyContent: 'left'

    },
});