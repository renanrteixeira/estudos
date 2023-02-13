/* rcns é usando para criar a estrutura completa de uma classe */

import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../styles/App'

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.texto}>{this.props.titulo}</Text>
            <Text style={styles.slogan}>{this.props.slogan}</Text>
          </View>
        )
    }
}
