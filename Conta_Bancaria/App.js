import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/Pages/Home';
import Sobre from './src/Pages/Sobre';
 
const Stack = createStackNavigator();
 
export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          title:'Preencha seus Dados',
          headerStyle:{
            backgroundColor: 'orange',
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
          headerTintColor: '#111',
        }}
         />
        <Stack.Screen 
        name="Sobre" 
        component={Sobre} 
        options={{
          title:'Dados Cadastrais',
          headerStyle:{
            backgroundColor: 'orange',
          },
          headerTitleStyle:{
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
          headerTintColor: '#111',
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}