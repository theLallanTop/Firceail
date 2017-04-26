/**
 * Created by ph-266 on 24/04/17.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { } from '../../theme';
import styles from './DrawerStyle';
export default class DrawerItem extends Component {
  render(){
    return(
      <View style={styles.DrawerContainer}>
        <View style={styles}>
          <Text>Hello</Text>
        </View>
      </View>
    );
  }
}