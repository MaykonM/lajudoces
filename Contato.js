import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const contato = require('../imgs/WhatsApp-icone.png');

export default class Contato extends Component {
  render() {
   return (
    <View style={estilo.tela}>
      <View style={estilo.imgContato}>
        <Image source={contato} />
      </View>
        <Text style={estilo.txtTitulo}>Celular e WhatsApp:</Text>
        <Text style={estilo.txtContato}>(11) 98875-4589</Text>
        <Text style={estilo.txtContato}>(11) 96645-2875</Text>
    </View>
  );
 }
};

const estilo = StyleSheet.create ({
  tela: {
    backgroundColor: '#fff',
    flex: 1
  },
  imgContato: {
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 5
  },
  txtTitulo: {
    backgroundColor: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginLeft: 15
  },
  txtContato: {
    backgroundColor: '#fff',
    fontSize: 20,
    marginLeft: 15,
    marginBottom: 10 
  }
})