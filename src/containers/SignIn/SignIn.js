import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SignInStyle';
import { Metrics, Images, Colors } from '../../theme';
import { Form, Item, Input, Button, Icon } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';


export default class SignIn extends Component{
  constructor(){
    super();
    
  }
  render(){
    return(
      <View style={{ flex: 1, backgroundColor: Colors.silver}}>
        <TouchableOpacity style={{ marginTop:40, marginLeft: 15, width: 100, height: 60 }} onPress={this.onPressBack}>
          <Icon style={{ width: 30, height: 20 }} name='ios-arrow-round-back'/>
        </TouchableOpacity>
        <View style={{ marginTop: Metrics.screenHeight/5 }}>
          <Form>
            <Item last>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button block style={{ marginTop: 20 }} onPress={this.onPressSignIn}>
            <Text style={{ fontSize: 20, color: 'white' }}>Sign In</Text>
          </Button>
          <View style={{ }}>
            <Button transparent style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20 }}>New User?</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
  onPressBack = () => {
    NavActions.pop();
  };

  onPressSignIn = () =>{
    NavActions.drawer();
  };
}

