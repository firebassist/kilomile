import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, Navigator } from 'react-native';

import SimpleButton from './SimpleButton';
import HomeScreen from './HomeScreen';
import NoteScreen from './NoteScreen'
import LayoutScreen from './LayoutScreen'
import DegreeScreen from './DegreeScreen'


class KiloMile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      myText : '',
      pressedKey : '',
      converted: 'no'
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={{name: 'home'}}
        renderScene={this.renderScene.bind(this)}
        navigationBar={
             <Navigator.NavigationBar
               routeMapper={NavigationBarRouteMapper}
               style = {styles.navBar}
             />
           }
       />
    )
  }

  deleteText = (myText) => {
     this.setState({myText: ''})
  }

  convertKilo= (myText) => {
    newText = (this.state.myText * 0.62) + ' ' + 'mph'
    this.setState(
      {myText:newText,
      converted:'yes'}
    )
  }

  convertCelsius = (myText) => {
    newText = (this.state.myText * 9) / 5 + 32 + ' ' + '°F'
    this.setState(
      {myText:newText}
    )
  }

  changeKey= (pressedKey) => {
    converted = this.state.converted
    if(converted ='no') {
      this.setState(
        {pressedKey:pressedKey}
      )

      this.setState(
        {myText:(this.state.myText) + pressedKey}
      )
    }
    else if(converted ='yes') {
      this.setState(
        {myText: '',
        converted:'no'}
      )
    }
  }

  renderScene (route, navigator) {
    switch (route.name) {
      case 'home':
        return (
          <HomeScreen
            navigator={navigator}
            myText = {this.state.myText}
            onDeleteText = {this.deleteText}
            onChangeKey = {this.changeKey}
            onConvert={this.convertKilo}
          />
          )

      case 'createNote':
        return (
          <NoteScreen
            navigator={navigator}
            myText = {this.state.myText}
            onChangeNote={this.updateNote}
            {...route.passProps} />
        )

        case 'degreeScreen':
          return (
            <DegreeScreen
              navigator={navigator}
              myText = {this.state.myText}
              onDeleteText = {this.deleteText}
              onChangeKey = {this.changeKey}
              onConvert={this.convertCelsius}
            />
        )

      }
    }
}

var NavigationBarRouteMapper = {
  LeftButton: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'degreeScreen':
        return (
          <SimpleButton
            onPress={() => navigator.pop()}
            customText='Back'
            style = {styles.navBarLeftButton}
            textStyle = {styles.navBarButtonText}
          />
        );
      default:
        return null;
      }
    },

  RightButton: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'home':
        return (
          <SimpleButton
            onPress={() => { navigator.push({ name: 'degreeScreen' }) }}
            customText='°C to °F'
            style={styles.navBarRightButton}
            textStyle={styles.navBarButtonText}
          />
        );
        default:
          return null;
      }
    },


  Title: function(route, navigator, index, navState) {
    switch (route.name) {
      case 'home':
        return (
          <Text style = {styles.navBarTitleText}>KILOMETERS TO MILES</Text>
        );
        case 'degreeScreen':
        return (
          <Text style = {styles.navBarTitleText}>CELSIUS TO FAHRENHEIT</Text>
        );
      }
    }
}


var styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2A2F35',
    borderBottomWidth: 1
  },
  navBarTitleText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 9
    },
  navBarLeftButton: {
    paddingLeft: 10
    },
  navBarRightButton: {
    paddingRight: 10
    },
  navBarButtonText: {
    color: '#EEE',
    fontSize: 16,
    marginVertical: 10
    }
});

AppRegistry.registerComponent('KiloMile', () => KiloMile);
