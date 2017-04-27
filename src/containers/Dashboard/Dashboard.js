import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Tab, Tabs, Button, TabHeading } from 'native-base';
import styles from './DashboardStyle';
import { Setting, Home, Profile } from '../../containers';
import { Metrics } from '../../theme';
import { Actions as NavActions } from 'react-native-router-flux';
export default class Dashboard extends Component {

  constructor(){
    super();
    this.state={
      isAppActive: true, isCameraActive: false, isProfileActive: false, isSettingActive: false
    }
  }

  render(){
    return(
      <Container style={{ marginTop: 15 }}>
        <Tabs initialPage={0} ref={(tabView) => {this.tabView = tabView}} tabBarUnderlineStyle={{opacity: 0}}>
          <Tab heading={<TabHeading />}>
            <Home />
          </Tab>
          <Tab heading={<TabHeading />}>
            <View padder><Text>Camera</Text></View>
          </Tab>
          <Tab heading={<TabHeading />}>
            <Profile />
          </Tab>
          <Tab heading={<TabHeading />}>
            <Setting />
          </Tab>
        </Tabs>

        <Footer >
          <FooterTab >
            <Button active={this.state.isAppActive} onPress={this.onPressApp}>
              <Text>Home</Text>
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
    this.tabView.goToPage(0);
  };
  onPressCamera = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: true,
      isProfileActive: false,
      isSettingActive: false,
    });
    this.tabView.goToPage(1);
  };
  onPressProfile = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: false,
      isProfileActive: true,
      isSettingActive: false,
    });
    this.tabView.goToPage(2);
  };
  onPressSetting = () => {
    this.setState({
      isAppActive: false,
      isCameraActive: false,
      isProfileActive: false,
      isSettingActive: true,
    });
    this.tabView.goToPage(3);
  };

}