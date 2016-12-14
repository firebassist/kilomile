import React, { Component } from 'react';
import { TextInput, Text, StyleSheet, View, ListView } from 'react-native';

import InputButton from './InputButton'

const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]

export default class InputContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  _renderInputButtons() {
        let views = [];

        for (var rex = 0; rex < inputButtons.length; rex ++) {
            let row = inputButtons[rex];

            let inputRow = [];
            for (var pizza = 0; pizza < row.length; pizza ++) {
                let input = row[pizza];

                inputRow.push(
                    <InputButton
                    value={input}
                    onPress={() => this.props.onInputKey(input)}
                    key={rex + "-" + pizza} />
                )
            }

            views.push(<View style={styles.inputRow} key={"row-" + rex}>{inputRow}</View>)
        }

        return views;
    }

  render () {
    return (
      <View>
        {this._renderInputButtons()}
      </View>
    )
  }

}

var styles = StyleSheet.create({
    inputRow: {
        flexDirection: 'row',
        flex: 1
    }
})
