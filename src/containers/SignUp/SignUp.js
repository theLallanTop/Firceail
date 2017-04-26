import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Colors } from '../../theme';
import styles from './SignUpStyle';
export default class SignUp extends Component {
  
  constructor(){
    super();
  }
  
  render(){
    return(
      <View style={styles.signupcontainer}>
        <Text>
          Sign Up
        </Text>
      </View>
    );
  }
}