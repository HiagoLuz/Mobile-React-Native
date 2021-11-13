import React, { Component } from 'react';
import { Text, View, TextInput, Pressable, StyleSheet } from 'react-native';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      vlrGasolina: '',
      vlrEtanol: '',
      resultado:''
    }

    this.calcular = this.calcular.bind(this);
  }

  calcular(){
    if ((this.state.vlrGasolina === '') || (this.state.vlrEtanol ==='')) {
      alert('Insira os dois valores')
      return;     
    } else{
      var r = this.state.vlrEtanol / this.state.vlrGasolina
      if (r < 0.7) {
        this.setState({ resultado: 'Abasteça com Etanol'})
      } else {
        this.setState({ resultado: 'Abasteça com Gasolina' })
      }
    }
    }

    render() {
      return (
        <View style={styles.container}>
          <View style={{flexDirection: 'column', alignItems: 'center', marginTop: 50}}>
            <Text style={styles.text}>Etanol ou Gasolina</Text>
            
          </View>

          <View style={{alignItems: 'center', padding: 30, flexDirection: 'column'}}>
            <TextInput 
            style={styles.input}
            placeholder = ' Digite o preço do Etanol' 
            onChangeText={(texto) => this.setState({vlrEtanol: texto})}
            />

            <TextInput
            style={styles.input}
            placeholder = ' Digite o preço da Gasolina' 
            onChangeText = {(texto) => this.setState({vlrGasolina: texto})}
            />

          </View>

          <Pressable onPress={this.calcular} style={{ backgroundColor: '#00f', justifyContent: 'center' , alignItems: 'center', width: 150, height: 50, borderRadius: 15}}>
              <Text style={styles.button}>Calcular</Text>
            </Pressable>

            <Text style={styles.resultext}>{this.state.resultado}</Text>

        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center'
    },
    text: {
      fontSize: 50,
      fontWeight: 'bold',
      color: '#000'
    },
    input: {
      fontSize: 16,
      borderWidth: 1,
      padding: 10,
      width: 180,
      marginBottom: 30,
      borderRadius: 10
    },
    button: {
      color: '#eee',
      fontSize: 20,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    resultext: {
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 40
    }
  })
export default App;
