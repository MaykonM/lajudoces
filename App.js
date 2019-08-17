import React, {Component} from 'react';
import {  } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Principal from './src/components/Principal';
import Produtos from './src/components/Produtos';
import Contato from './src/components/Contato';

export default class App extends Component {
  render() {
   return (
    <Router>
      <Scene
      hideNavBar={true}
      >
        <Scene key='principal' component={Principal} initil />
        <Scene hideNavBar={false} key='produtos' component={Produtos} title='PRODUTOS' />
        <Scene hideNavBar={false} key='contato' component={Contato} title='CONTATO' />
      </Scene>
    </Router>
  );
 }
};