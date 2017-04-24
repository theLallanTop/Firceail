/**
 * Created by ph-266 on 24/04/17.
 */

import { AsyncStorage } from 'react-native';

export default {
  active: true,
  reducerVersion: '1',
  storeConfig: {
    storage: AsyncStorage,
    blacklist: ['signIn'],
  }
};
