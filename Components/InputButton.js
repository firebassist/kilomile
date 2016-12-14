import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';


export default class InputButton extends Component {

    render() {
        return (
            <TouchableHighlight
              style={styles.inputButton}
              underlayColor="#193441"
              onPress={this.props.onPress}>
                <Text
                  style={styles.inputButtonText}>
                  {this.props.value}
                </Text>
            </TouchableHighlight>
        )
    }

    _onInputButtonPressed(input) {
        alert(input)
    }

}

var styles = StyleSheet.create({

    inputButton: {
      backgroundColor: '#444F7F',
      borderColor: '#3C4259',
      borderWidth: 1,
      borderRadius: 4,
      paddingHorizontal: 20,
      shadowColor: 'darkgrey',
      shadowOffset: {
      width: 1,
      height: 1,
      flex: 1
    },
      shadowOpacity: 0.8,
      shadowRadius: 1
    },

    inputButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
});
