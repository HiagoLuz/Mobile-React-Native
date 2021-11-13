import React, {Component} from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';
import { styles } from './styles'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      peso: '',
      altura: '',
      valorimc: '',
    }

    this.conferir =  this.conferir.bind(this);
  }

  conferir() {
    if ((this.state.peso === '') && (this.state.altura === '')) {
      alert('Preencha os campos')
    } else {
      var VI = this.state.peso / (this.state.altura * this.state.altura)
      var imcFinal = parseFloat(VI.toFixed(2))
      if (VI < 18.5){
        this.setState({valorimc:'O valor do seu IMC é: '+ imcFinal +' você está Abaixo do Peso'})

      } else if ((VI >= 18.5) && (VI <= 24.5)){
        this.setState({valorimc: 'O valor do seu IMC é: '+ imcFinal +' você está no Peso normal'})

      } else if ((VI >= 25) && (VI <= 29.9)){
        this.setState({valorimc: 'O valor do seu IMC é: '+ imcFinal +' você está Sobrepeso'})

      } else if ((VI >= 30) && (VI <= 34.9)){
        this.setState({valorimc: 'O valor do seu IMC é: '+ imcFinal +' você está com Obesidade Grau I'})

      } else if ((VI >= 35) && (VI <= 39.9)){
        this.setState({valorimc: 'O valor do seu IMC é: '+ imcFinal +' você está com Obesidade Grau II'})

      }else if (VI >= 40){
        this.setState({valorimc: 'O valor do seu IMC é: '+ imcFinal +' você está com Obesidade Grau III ou Móbida'})

      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Header}>
          <Text style={styles.textHeader}>Calcular IMC</Text>
        </View>

        
        <View style={styles.boxImput}>
          <TextInput
          keyboardType ='numeric'
          style={styles.input}
          placeholder = 'Digite o seu peso (EX: 75)'
          placeholderTextColor={'#aaa'}
          onChangeText = {(texto) => this.setState({peso: texto})}
          />

          <TextInput
          keyboardType ='numeric'
          returnKeyType= 'go'
          style={styles.input}
          placeholder = 'Digite o sua Altura (EX: 1.81)'
          placeholderTextColor={'#aaa'}
          onChangeText = {(texto) => this.setState({altura: texto})}
          />
        </View>

        <Pressable onPress={this.conferir} style={styles.botao}>
          <Text style={styles.textbutton}>Conferir</Text>
        </Pressable>


        <Text style={styles.textResultado}>{this.state.valorimc}</Text>

        
      </View>
    )
  }

}

export default App;
