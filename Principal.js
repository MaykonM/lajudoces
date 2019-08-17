import React, {Component} from 'react';
import { View, Image, StyleSheet, TouchableHighlight, Text, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Principal extends Component {
  render() {
   return (
    <ScrollView style={estilo.tela}>
      <View>
        <Text style={estilo.nome1}>LaJu</Text>
        <Text style={estilo.nome2}>Doces</Text>
      </View>

      <View style={estilo.menu}>
        <TouchableHighlight
        onPress={() => { Actions.produtos(); }}
        >
          <Text style={estilo.produtos}>PRODUTOS</Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={() => { Actions.contato(); }}
        >
          <Text style={estilo.contato}>CONTATO</Text>
        </TouchableHighlight>
      </View>
    </ScrollView>
  );
 }
};

const estilo = StyleSheet.create({
  tela: {
    backgroundColor: '#fff',
    flex: 1
  },
  nome1: {
    backgroundColor: '#FF0000',
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  nome2: {
    backgroundColor: '#ffff00',
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  produtos: {
    backgroundColor: '#87CEEB',
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
    paddingTop: 50,
    textAlign: 'center',
    width: 145,
    height: 145,
    marginTop: 50
  },
  contato: {
    backgroundColor: '#00FF7F',
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
    paddingTop: 50,
    textAlign: 'center',
    width: 145,
    height: 145,
    marginTop: 50
  },
  menu: {
    alignItems: 'center',
  }
})


