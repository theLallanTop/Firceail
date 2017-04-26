import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import styles from './DashboardStyle';

export default class Dashboard extends Component {

  constructor(){
    super();
    this.state={
      isAppActive: true, isCameraActive: false, isProfileActive: false, isSettingActive: false
    }
  }

  render(){
    return(
      <Container>
        <Content/>
        <Footer >
          <FooterTab>
            <Button active={this.state.isAppActive} onPress={this.onPressApp}>
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.isCameraActive} onPress={this.onPressCamera}>
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.isProfileActive} onPress={this.onPressProfile}>
              <Text>Profile</Text>
            </Button>
            <Button active={this.state.isSettingActive} onPress={this.onPressSetting}>
              <Text>Setting</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }

  onPressApp = () => {
    this.setState({
      isAppActive: true,
      isCameraActive: false,
      isProfileActive: false,
      isSettingActive: false,
    });

  };
  onPressCamera = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: true,
      isProfileActive: false,
      isSettingActive: false,
    });
  };
  onPressProfile = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: false,
      isProfileActive: true,
      isSettingActive: false,
    });
  };
  onPressSetting = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: false,
      isProfileActive: false,
      isSettingActive: true,
    });
  };

}