import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, Images, Metrics } from '../../theme';
import styles from './SignUpStyle';
import { Container, Content, Button, Icon, List, ListItem, InputGroup, Input, Picker, Thumbnail } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';
const Item = Picker.Item;
const camera = Images.logo;

export default class SignUp extends Component {

  constructor() {
    super();
    this.state = {
      selectedItem: undefined,
      selected1: 'key0',
      results: {
        items: [],
      },
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }


  render(){
    return(
      <Container style={{ backgroundColor: Colors.silver }}>
        <TouchableOpacity style={{ marginTop:40, marginLeft: 15, width: 100, height: 60 }} onPress={this.onPressBack}>
          <Icon style={{ width: 30, height: 20 }} name='ios-arrow-round-back'/>
        </TouchableOpacity>
        <Content>
          <TouchableOpacity>
            <Thumbnail size={80} source={camera} style={{ alignSelf: 'center', marginBottom: 10 }} />
          </TouchableOpacity>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: Colors.lightTeal }} />
                <Input inlineLabel label="First Name" placeholder="First Name" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: Colors.lightTeal }} />
                <Input inlineLabel label="Last Name" placeholder="Last Name" />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup>
                <Icon name="ios-mail" style={{ color: Colors.lightTeal }} />
                <Input placeholder="EMAIL" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" style={{ color: Colors.lightTeal }} />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-call" style={{ color: Colors.lightTeal }} />
                <Input
                  placeholder="PHONE"
                  keyboardType="numeric"
                />
              </InputGroup>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-transgender" style={{ color: Colors.lightTeal }} />
              <Text>GENDER</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)} // eslint-disable-line
              >
                <Item label="Male" value="key0" />
                <Item label="Female" value="key1" />
                <Item label="Other" value="key2" />
              </Picker>
            </ListItem>

            <ListItem>
              <InputGroup >
                <Input stackedLabel label="Permanent Address" placeholder="Address" />
              </InputGroup>
            </ListItem>
          </List>
          <Button block style={{ margin: 20, backgroundColor: Colors.bloodOrange }} onPress={this.onPressSignUp}>
            <Text style={{ fontSize: 20, color: Colors.white }}>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }

  onPressBack = () => {
    NavActions.pop();
  };

  onPressSignUp = () => {
    NavActions.drawer();
  };

}