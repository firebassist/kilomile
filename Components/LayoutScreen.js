import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import InputButton from './InputButton'

const inputButtons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
]


export default class LayoutScreen extends Component {

    render() {
        return (
          <View style={styles.rootContainer}>
            <View style={styles.displayContainer}></View>
            <View style={styles.inputContainer}>
              {this._renderInputButtons()}
            </View>
          </View>

        )
    }

    _renderInputButtons() {
          let views = [];

          //inputButtons.map((rex) => {
          for (var rex = 0; rex < inputButtons.length; rex ++) {
              let row = inputButtons[rex];

              let inputRow = [];
              //row.map((pizza) => {
              for (var pizza = 0; pizza < row.length; pizza ++) {
                  let input = row[pizza];

                  inputRow.push(
                      <InputButton
                      value={input}
                      //onPress={this.props.onChangeKey(input)}
                      key={rex + "-" + pizza} />
                  );
              }

              views.push(<View style={styles.inputRow} key={"row-" + rex}>{inputRow}</View>)
          }

          return views;
      }


}

var styles = StyleSheet.create({

  rootContainer: {
      flex: 1,
      marginTop: 20
  },

  displayContainer: {
      flex: 2,
      backgroundColor: 'green'
  },

  inputContainer: {
      flex: 8,
      backgroundColor: '#3E606F',
      alignItems: 'center'
  },

  inputRow: {
        flex: 1,
        flexDirection: 'row'
    }
});
