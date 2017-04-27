import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Colors, Images, Metrics } from '../../theme';
import styles from './IntroStyle';
import Swipe from 'react-native-swipe-a-lot';
import { Segment, Left, Right, Button, Icon, StyleProvider } from 'native-base';
import { Actions as NavActions } from 'react-native-router-flux';
import getTheme from '../../../native-base-theme/components';
import material from '../../../native-base-theme/variables/material';
export default class Intro extends Component{

  constructor(){
    super();
    this.state = {
      isSegment: false,
    };
  }

  render(){
    return(
      <StyleProvider style={getTheme(material)}>
        <View style={{ flex: 1, backgroundColor: Colors.bloodOrange}}>
          <View style={styles.introContainer}>
            <Swipe autoplay={{ enabled: true, disableOnSwipe: true }}>
              <View style={styles.wrapper}>
                <Image style={styles.imageStyle} source={Images.swipeintrofirst} >
                  <Text style={[styles.titleBase,{top: 30}]}>
                    Simple Swiping Component.
                  </Text>
                </Image>
              </View>
              <View style={styles.wrapper}>
                <Image style={styles.imageStyle} source={Images.swipeintrosec}>
                  <Text style={[styles.titleBase, {color: Colors.bloodOrange, textShadowColor: Colors.panther, top: 120}]}>Support for iOS{'\n'}and Android.</Text>
                </Image>
              </View>
              <View style={styles.wrapper}>
                <Image style={styles.imageStyle} source={Images.swipeintrothird} >
                  <View style={styles.introFirstTextViewStyle}>
                    <Text style={[styles.titleBase, {color: Colors.charcoal, textShadowColor: Colors.bloodOrange}]}>Works with any View!</Text>
                  </View>
                  <View style={styles.introSecTextViewStyle}>
                    <Text style={[styles.titleBase, {fontSize: 20}]}>Whether your view is positioned absolutely or takes only a portion of the screen.</Text>
                  </View>
                </Image>
              </View>
              <View style={styles.wrapper}>
                <Image style={styles.imageStyle} source={Images.swipeintrosec}>
                  <View style={styles.introThirdTextViewStyle}>
                    <Text style={[styles.titleBase, {color: 'cyan', textShadowColor: 'red'}]}>Any device orientation</Text>
                  </View>
                  <View style={styles.introSecTextViewStyle}>
                    <Text style={[styles.titleBase, {fontSize: 20}]}>Adjusts itself to landscape/portrait mode when you rotate your phone.</Text>
                  </View>
                </Image>
              </View>
              <View style={styles.wrapper}>
                <Image
                  style={styles.imageStyle}
                  source={Images.swipeintrothird}
                >
                  <View style={styles.introFirstTextViewStyle}>
                    <Text style={[styles.titleBase, {color: 'pink', textShadowColor: 'red'}]}>Includes autoplay!</Text>
                  </View>
                  <View style={styles.introSecTextViewStyle}>
                    <Text style={[styles.titleBase, {fontSize: 20}]}>Automatically goes to the next slide after a set amount of seconds.</Text>
                  </View>
                </Image>
              </View>
            </Swipe>
          </View>
          <Segment>
            <Button first active = {!this.state.isSegment} onPress={this.onPressSignIn}>
              <Text style={{ color: Colors.lightTeal }}>Sign In</Text>
            </Button>
            <Button last active = {this.state.isSegment} onPress={this.onPressSignUp}>
              <Text style={{ color: Colors.lightTeal }}>Sign Up</Text>
            </Button>
          </Segment>
        </View>
      </StyleProvider>
    );
  }
  onPressSignIn = () => {
    this.setState({ isSegment: !this.state.isSegment });
    NavActions.signin();
  };

  onPressSignUp = () => {
    this.setState({ isSegment: !this.state.isSegment });
    NavActions.signup();
  };
}