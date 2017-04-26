import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  introContainer: {
    flex: 1,
    // marginBottom: Metrics.navBarHeight
  },
  wrapper: {
    flex: 1,
  },

  introFirstTextViewStyle: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 0,
    top: 30,
    alignItems: 'center',
  },

  introSecTextViewStyle: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 40,
    top: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  introThirdTextViewStyle: {
    position: 'absolute',
    left: 10,
    right: 10,
    bottom: 0,
    top: 50,
    alignItems: 'center',
  },

  imageStyle: {
    flex: 1,
    // tintColor: 'blue',
    // resizeMode: 'cover',
    // justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null
  },
  titleBase: {
    // bottom: 100,
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width:1, height: 1}
  }

})