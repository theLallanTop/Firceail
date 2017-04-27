import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SignInStyle';
import { Metrics, Images, Colors } from '../../theme';
import { Container, Content, List, ListItem, InputGroup, Input, Button, Icon, Thumbnail } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';


export default class SignIn extends Component{
  constructor(){
    super();
    
  }
  render(){
    return(
      <Container style={{ backgroundColor: Colors.silver }}>
        <TouchableOpacity style={{ marginTop:40, marginLeft: 15, width: 100, height: 60 }} onPress={this.onPressBack}>
          <Icon style={{ width: 30, height: 20 }} name='ios-arrow-round-back'/>
        </TouchableOpacity>
        <Content>
          <TouchableOpacity>
            <Thumbnail size={80} source={Images.logo} style={{ alignSelf: 'center', marginBottom: 10 }} />
          </TouchableOpacity>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-mail" style={{ color: '#0A69FE' }} />
                <Input placeholder="EMAIL" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
            </ListItem>
          </List>
          <Button block style={{ margin: 20, backgroundColor: Colors.bloodOrange }} onPress={this.onPressSignIn}>
            <Text style={{ fontSize: 20, color: Colors.white }}>Sign In</Text>
          </Button>
        </Content>
      </Container>
    );
  }
  onPressBack = () => {
    NavActions.pop();
  };

  onPressSignIn = () =>{
    NavActions.drawer();
  };
}

