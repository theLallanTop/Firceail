/**
 * Created by ph-266 on 24/04/17.
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Metrics } from '../../theme';
export default class Home extends Component {

  render() {
    return (
      <View style={{flex:1,flexDirection:'column', alignItems:'center', marginTop: Metrics.navBarHeight}}>
        <Text>Home Page</Text>
      </View>
    );
  }
}