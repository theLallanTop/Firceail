import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './FooterTabBarStyle';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Setting, Home, Profile } from '../../containers';

export default class FooterTabBar extends Component {
  constructor(props) {
    super(props);
    this._handleTabChange = this._handleTabChange.bind(this)
  }

  _handleTabChange = (newTabIndex, oldTabIndex) => {
    console.log(`New active Tab is at position ${newTabIndex}`);
    console.log(`Old, now inactive Tab is at position ${oldTabIndex}`)
  };

  render() {
    return(
      <View style={{ flex: 1 }}>
        <BottomNavigation
          labelColor="white"
          rippleColor="white"
          style={styles.bottomNavigation}
          onTabChange={this._handleTabChange}
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Home"
            icon={<Icon size={24} color="white" name="home" />}
          />
          <Tab
            barBackgroundColor="#00796B"
            label="Favorite" icon={<Icon size={24} color="white" name="favorite" />}
          />
          <Tab
            barBackgroundColor="#5D4037"
            label="Camera"
            icon={<Icon size={24} color="white" name="camera" />}
          />
          <Tab
            barBackgroundColor="#3E2723"
            label="Setting"
            icon={<Icon size={24} color="white" name="settings" />}
          />
        </BottomNavigation>
      </View>
    );
  }
}
