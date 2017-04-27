import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, Images } from '../../theme';
import styles from './SignUpStyle';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, InputGroup, Input, Picker, Thumbnail } from 'native-base';

const Item = Picker.Item;
const camera = Images.drawericon;

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
      <Container style={styles.container}>
        <Content>
          <TouchableOpacity>
            <Thumbnail size={80} source={camera} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
          </TouchableOpacity>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel label="First Name" placeholder="First Name" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                <Input inlineLabel label="Last Name" placeholder="Last Name" />
              </InputGroup>
            </ListItem>

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
            <ListItem>
              <InputGroup>
                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                <Input
                  placeholder="PHONE"
                  keyboardType="numeric"
                />
              </InputGroup>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
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
          <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}