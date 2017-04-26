import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './SignInStyle';

export default class SignIn extends Component{
  constructor(){
    super();
    
  }
  render(){
    return(
      <View style={styles.signincontainer}>
        <Text>Sign In</Text>
      </View>
    );
  }
}

