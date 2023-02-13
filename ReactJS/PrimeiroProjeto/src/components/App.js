/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import Welcome from './Welcome';

export default class App extends Component {
  render(){
    return(
      <Welcome
        titulo="Olá Mundo!"
        slogan="Primeiro programa React-Native"/>
    );
  }  
}