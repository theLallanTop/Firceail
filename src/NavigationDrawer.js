/**
 * Created by ph-266 on 24/04/17.
 */
import React, { PropTypes } from 'react';
import { Text, Platform } from 'react-native';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';
import { DrawerItem } from './components';

const propTypes = {
  navigationState: PropTypes.object,
  onNavigate: PropTypes.any
};

class NavigationDrawer extends React.Component {
  closeControlPanel = () =>{
    this._drawer.close();
  };


  render() {
    const state = this.props.navigationState;
    const children = state.children;

    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        onOpen={() =>Actions.refresh({ key: state.key, open: true })}
        onClose={() => Actions.refresh({ key: state.key, open: false })}
        content={ <DrawerItem homeSection={() => this.closeControlPanel()} />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        tweenHandler={(ratio) => ({
          main: { opacity: Math.max(0.54, 1 - ratio) },
        })}
      >
        <DefaultRenderer
          navigationState={children[0]}
          onNavigate={this.props.onNavigate}
        />
      </Drawer>
    );
  }
}

NavigationDrawer.propTypes = propTypes;
export default NavigationDrawer;