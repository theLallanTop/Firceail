import React, { Component, PropTypes } from 'react';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, InputGroup, Input } from 'native-base';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ProfileStyle';
import { Colors, Metrics } from '../../theme';
import { FooterTabBar } from '../../components';
export default class Profile extends Component {

  constructor(props) {
    super(props);
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
        <Container style={{ marginTop: Metrics.navBarHeight }}>
          <Content>
            <List>
              <ListItem>
                <InputGroup>
                  <Input inlineLabel label="First Name" placeholder="John" />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Input inlineLabel label="Last Name" placeholder="Doe" />
                </InputGroup>
              </ListItem>

              <ListItem>
                <InputGroup>
                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
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

              <ListItem>
                <InputGroup >
                  <Input stackedLabel label="Permanent Address" placeholder="Address" />
                </InputGroup>
              </ListItem>
            </List>
          </Content>
        </Container>
    );
  }
}






