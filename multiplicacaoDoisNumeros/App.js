import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: '',
      n2: '',
      resul: ''
    };
    this.Multiplicar = this.Multiplicar.bind(this);
  }
  
  Multiplicar = () => { 
    this.setState({resul: 'Resultado: ' + this.state.n1 * this.state.n2});
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.numero}
        placeholder="Digite um número:"
        onChangeText={ (texto) => this.setState({n1: texto})} />
        <TextInput 
        style={styles.numero}
        placeholder="Digite outro  número:"
        onChangeText={ (texto) => this.setState({n2: texto})} />
        <TouchableOpacity 
        style={styles.botao}
        onPress={() => {this.Multiplicar()}}>
          <Text>Calcular</Text>
        </TouchableOpacity>
        <Text> {this.state.resul} </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },
  numero: {
    backgroundColor:'#fff',
    marginTop:10,
    width:200,
    fontSize:16 ,
    borderRadius:5,
    padding:5,
    fontWeight:'bold'
  },
  botao:{
    marginTop:20,
    width: 150,
    height: 42,
    backgroundColor: '#3498db',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App;