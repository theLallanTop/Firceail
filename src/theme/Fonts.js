/**
 * Created by ph-266 on 24/04/17.
 */

import { Platform } from 'react-native';
import Colors from './Colors';
const helvetica = {
  base: 'ProximaNova-Light',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic'
};
const Roboto = {
  ...Platform.select({
    ios: {
      base: 'Roboto',
      bold: 'Roboto-Bold',
      emphasis: 'Roboto-Italic',
      extraBold: 'Roboto-ExtraBold',
      extraLight: 'Roboto-ExtraLight',
      heavy: 'Roboto-Heavy',
      light: 'Roboto-Light',
      medium: 'Roboto-Medium',
      semiBold: 'Roboto-SemiBold',
      thin: 'Roboto-Thin'
    },
    android: {
      base: 'Roboto-Regular',
      bold: 'Roboto-Bold',
      emphasis: 'Roboto-Italic',
      extraBold: 'Roboto-ExtraBold',
      extraLight: 'Roboto-ExtraLight',
      heavy: 'Roboto-Heavy',
      light: 'Roboto-Light',
      medium: 'Roboto-Medium',
      semiBold: 'Roboto-SemiBold',
      thin: 'Roboto-Thin'
    }
  }),

};

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5
}
export default {
  helvetica,
  Roboto,
  size
}
