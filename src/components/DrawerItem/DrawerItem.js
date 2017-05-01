/**
 * Created by ph-266 on 24/04/17.
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors, Fonts, Images } from '../../theme';
import styles from './DrawerStyle';
import { List, ListItem } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';

const button = ['Home','Profile','Share','About us','Setting','Log out'];
// const Drawer = this.context.drawer;
export default class DrawerItem extends Component {

  static contextTypes = {
    drawer: React.PropTypes.object,
  };
  render(){
    drawer = this.context.drawer;
    return(
      <View style={styles.DrawerContainer}>
        <View style={styles.navDraver} />
        <List
          dataArray={button}
          renderRow={(item) =>
          {
          return(
            <ListItem style={{flex: 1}}>
              <TouchableOpacity
                underlayColor={Colors.cloud}
                style={{flex: 1}}
                onPress={() => {drawer.close(); this.onPressDrawerItemButton(item);}}>
                <View style={{ flex: 1, marginLeft: 5}}>
                 <Text style={{ color: Colors.bloodOrange}}>{item}</Text>
                </View>
              </TouchableOpacity>
            </ListItem>
           );
          }}/>
      </View>
    );
  }

  onPressDrawerItemButton = (text) => {
    console.log('on press',text);
    switch (text){
      case 'Home':{
        NavActions.dashboard();
        break;
      }
      case 'Profile':{
        NavActions.profile();
        break;
      }
      default:{
        break;
      }
    }
  }
}