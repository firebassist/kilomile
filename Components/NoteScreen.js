import React, { Component } from 'react';
import { TouchableHighlight, TextInput, StyleSheet, View, Text } from 'react-native';


export default class NoteScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        myText:this.props.myText
      }
    }

    changeText = (myText) => {
       this.setState({myText})
    }

    updateNote = (myText) => {
       this.changeText(myText)
       this.props.onChangeNote(myText)
       //this.props.navigator.pop()
    }

    render () {
    return (
      <View style={styles.container}>
        <View style = {styles.inputContainer}>
          <TextInput
            ref='note'
            placeholder='Untitled'
            style={[styles.title, styles.textInput]}
            value={this.state.myText}
            //onChangeText = {this.updateNote}
            //onChangeText = {(myText) => {this.setState({myText})}}
            //onChangeText={(myText) => this.props.onChangeNote(myText)}
            onChangeText={(myText) => this.updateNote(myText)}
          />
        </View>
        <View>
          <TouchableHighlight
            onPress={() => this.props.onChangeNote('vvx')} >
             <Text>Update</Text>
           </TouchableHighlight>
        </View>
      </View>
      );
    }
  }

  var styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
    },
    title: {
      height: 40
    },
    body: {
      flex: 1
    },
    inputContainer: {
      borderBottomColor: '#9E7CE3',
      borderBottomWidth: 1,
      flexDirection: 'row',
      marginBottom: 10
    },
    textInput: {
      flex: 1,
      fontSize: 16
    }
  })
