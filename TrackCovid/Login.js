import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
var FBLoginButton = require('./FBLoginButton');

export class LoginPage extends Component {
  render(){
  //const email = useState('');
    return (
        <View style={styles.container}>
        <Text style={styles.sectionTitle}>Welcome to the Covid Tracker</Text>
        <Text style={styles.sectionDescription}>Login through Facebook to get your unique ID</Text>
        <FBLoginButton email = {email} />
        <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        </View>
    );
  }
};