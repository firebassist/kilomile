import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, ListView } from 'react-native';

import InputButton from './InputButton'
import InputContainer from './InputContainer'


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pressedKey : ''
    }
  }

  render () {
    return (
      <View style={styles.rootContainer}>

        <View style={styles.displayContainer}>
          <Text style = {styles.displayText}>{this.props.myText}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <InputButton
            onPress={() => this.props.onConvert()}
            value = 'CONVERT'
          />
          <InputButton
            onPress={() => this.props.onDeleteText()}
            value = 'CLEAR'
          />
        </View>

        <View style={styles.inputContainer}>
          <InputContainer
            pressedKey = {this.state.pressedKey}
            onInputKey = {(pressedKey) => this.props.onChangeKey(pressedKey)}
            onInputConvert = {() => this.props.onConvert()}
            onInputClear = {() => this.props.onDeleteText()}
          />
        </View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
    rootContainer: {
      flex: 1,
			marginTop: 20,
      backgroundColor: '#2A2F35'
    },

    displayContainer: {
      flex: 4,
      backgroundColor: '#BBDDD6',
      justifyContent: 'center'
    },

    inputContainer: {
      flex: 5,
      alignItems: 'center'
    },

    displayText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20
    },

    buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    }
})
