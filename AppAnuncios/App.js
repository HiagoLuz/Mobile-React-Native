import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios:[
        {id: 1, nome: 'Bicicleta Pneu Gordo Aro 24/26 Importada', preco: 1359.90, tipo: 'Acessorio de atletas', source:require('./src/images/bicicleta.jpg')},
        {id: 2, nome: 'Teclado Gamer', preco: 259.90, tipo: 'Acessorios de PC', source:require('./src/images/teclado.jpg')},
        {id: 4, nome: 'Monitor', preco: 215.90, tipo: 'Monitores e TVs', source:require('./src/images/monitor.jpg')},
        {id: 5, nome: 'Jaqueta de couro', preco: 699.99, tipo: 'Jaquetas', source:require('./src/images/jaqueta.jpg')},
        {id: 6, nome: 'Cadeira Gamer', preco: 669.90, tipo: 'Itens de Escritório', source:require('./src/images/cadeira.jpg')},
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.areaHeader}>
          <Text style={styles.textHeader}>Anuncios</Text>
        </View>
        <FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        data={this.state.anuncios}
        keyExtractor = {(item) => item.id}
        renderItem = {({item})=> <Anuncio data={item}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaHeader:{
    backgroundColor: 'yellow',
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader:{
    fontSize: 50,
    color: '#eee',
    letterSpacing: 6, 
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  areaPessoa:{
    backgroundColor: '#222',
    width: 250,
    height: 300,
    marginTop: 50,
    marginLeft: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
  },
  textoPessoa:{
    color: '#FFF',
    fontSize: 20,
  },
  textoPreco:{
    fontSize: 40,
    color: '#f00',
    fontWeight: 'bold',
  },
  imgAnuncio:{
    width: 150,
    height: 150,
    overflow: 'hidden',
  },
})

export default App;

class Anuncio extends Component {
  render() {
    return(
      <View style={styles.areaPessoa}>
        <Image style={styles.imgAnuncio} source={this.props.data.source}/>
        <Text style={styles.textoPessoa}>{this.props.data.nome}</Text>
        <Text style={styles.textoPreco}>{this.props.data.preco.toFixed(2)}</Text>
      </View>
    )
  }
}
