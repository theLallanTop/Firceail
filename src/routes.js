import React, { Component } from 'react';
import { Home, Intro, SignIn, SignUp, Dashboard, Setting } from './containers';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import NavigationDrawer from './NavigationDrawer';
import { Colors, Images, Fonts } from './theme';
import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';

const Styles = {
  navBar: {
    backgroundColor: Colors.bloodOrange,
    borderBottomWidth: null,
  },
  titleTextStyle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.Roboto.medium
  },
  navTitle: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default class AppRouter extends Component {
  render() {
    return (
        <Router
          navigationBarStyle={Styles.navBar}
          titleStyle={Styles.titleTextStyle}
          drawerImage={Images.drawericon}
          hideNavBar={false}
          backButtonImage={{}}
        >
          <Scene key="drawer" component={NavigationDrawer} hideNavBar={false} type="replace" open={false}>
            <Scene key="drawerChildrenWrapper" tabs>
              <Scene key="dashboard" component={Dashboard} title="Firceail" hideNavBar={false} />
            </Scene>
          </Scene>
          <Scene key="setting" component={Setting} />
          <Scene key="intro" component={Intro} hideNavBar={true} initial />
          <Scene key="signin" component={SignIn} hideNavBar={true} />
          <Scene key="signup" component={SignUp} hideNavBar={true} />
        </ Router>
    );
  }
}
