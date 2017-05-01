import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container } from 'native-base';
import styles from './DashboardStyle';
import { FooterTabBar } from '../../components';
import { Metrics } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';


export default class Dashboard extends Component {

  constructor(){
    super();
    this.state={

    }
  }

  render(){
    return(
      <Container style={{ marginTop: 15 }}>
        <FooterTabBar />
      </Container>
    );
  }
}