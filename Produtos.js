import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default class Produtos extends Component {
  render() {
   return (
    <ScrollView style={estilo.tela}>
      <View>
        <Text style={estilo.produtos}>- Bolos</Text>
      </View>
      <Text style={estilo.produtos}>- Bolos diets</Text>
      <Text style={estilo.produtos}>- Bolo bombom</Text>
      <Text style={estilo.produtos}>- Cocada</Text>
      <Text style={estilo.produtos}>- Trufa</Text>
      <Text style={estilo.produtos}>- Rapadura</Text>
    </ScrollView>
  );
 }
};

const estilo = StyleSheet.create ({
  tela: {
    backgroundColor: '#fff',
    flex: 1
  },
  produtos: {
    backgroundColor: '#F0E68C',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  }
})
