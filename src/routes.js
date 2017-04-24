import React, { Component } from 'react';
import { Home } from './containers';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import NavigationDrawer from './NavigationDrawer';
import { Colors, Images, Fonts } from './theme';
import { Router, Scene, Actions as NavigationActions } from 'react-native-router-flux';

const Styles = {
  navBar: {
    backgroundColor: Colors.background,
  },
  titleTextStyle: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: Fonts.size.h6,
    fontFamily: Fonts.raleway.medium
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
          drawerImage={Images.DrawerIcon}
          hideNavBar={false}
          backButtonImage={{}}
        >
        <Scene key="drawer" component={NavigationDrawer} type="replace" >
          <Scene key="drawerChildrenWrapper"  >
            <Scene key="home" component={Home} title="Firceail" hideNavBar={true}  />
          </Scene>
        </Scene>
      </Router>
    );
  }
}
