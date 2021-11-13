import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    
    this.soma = this.soma.bind(this);
    this.subtracao = this.subtracao.bind(this);
  }

  soma(){
    this.setState({ contador: this.state.contador + 1 });
  }
  
  subtracao(){
    this.state.contador <= 0 ? alert("Não é possivel ter contagens negativas.") : this.setState({ contador: this.state.contador - 1 });
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>Contador de Pessoas</Text>

        <View style={styles.counterContainer}>
          <Text style={styles.counter}> {this.state.contador} </Text>
        </View>

        <Buttons operation='+' background='green' functionOp={this.soma}></Buttons>
        <Buttons operation='-' background='red' functionOp={this.subtracao}></Buttons>
      
      </View>
      );
    }
}
    
class Buttons extends Component {
  render(){
    return(
      <TouchableOpacity style={[styles.buttonsContainer, {backgroundColor: this.props.background}]} onPress={this.props.functionOp}>
          <Text style={styles.operator}>{this.props.operation}</Text>
      </TouchableOpacity>
    );
  }
}
