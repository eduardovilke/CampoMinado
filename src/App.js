import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import params from './configs/params'
import Field from './components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >Tamanho:{params.getRowsAmount()} X {params.getColumnsAmount()}</Text>

        <Field />
        <Field opened />
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={5} />
        <Field opened nearMines={7} />
        <Field mined opened />
        <Field mined opened exploded />
        <Field mined />
        <Field flagged />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
