import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default function Experiencia() {
 return (
     
   <View style={styles.container}>
     <Text>- Ajudante de Lubrificação - Senzo Terceirização - 10 meses. <br/>
     - Ajudante de Lubrificação - Terracom LTDA - Atualmente.
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