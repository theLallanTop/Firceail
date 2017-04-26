import { StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics, ApplicationStyles } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  signincontainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  }
})