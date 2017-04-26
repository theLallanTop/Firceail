import { StyleSheet} from 'react-native';
import { Colors, Metrics, ApplicationStyles } from '../../theme';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  dashcontainer: {
    flex: 1,
    marginTop: Metrics.navBarHeight
  }
})