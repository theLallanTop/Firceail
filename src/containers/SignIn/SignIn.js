import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SignInStyle';
import { Metrics, Images } from '../../theme';
import { Form, Item, Input, Button } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';


export default class SignIn extends Component{
  constructor(){
    super();
    
  }
  render(){
    return(
      <View style={{ flex: 1}}>
        <Image resizeMode='cover' style={{ height: Metrics.screenHeight, width: Metrics.screenWidth}} source={Images.swipeintrofirst}>
          <View style={{ marginTop: Metrics.screenHeight/3 }}>

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
        </Image>
      </View>
    );
  }

  onPressSignIn = () =>{
    NavActions.drawer();
  };
}

