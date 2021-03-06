/**
 * Created by ph-266 on 24/04/17.
 */

import { apiDispatch } from '../../helpers/ApiClient';
import api from '../../helpers/ApiClient';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

const FBLOGIN = 'FBLOGIN';
const FBLOGIN_SUCCESS = 'FBLOGIN_SUCCESS';
const FBLOGIN_FAIL = 'FBLOGIN_FAIL';

const initialState = {
  isBusy: false,
  ErorMessage: '',
  data: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isBusy: true };
    case LOGIN_SUCCESS:
      return { ...state, isBusy: false, authToken: action.result.accessToken,
        user: action.result.user, ErorMessage: '' };
    case LOGIN_FAIL:
      return { ...state, isBusy: false, ErorMessage: 'Invalid Username/Password' };

    case FBLOGIN:
      return { ...state, isBusy: true};
    case FBLOGIN_SUCCESS:
      return { ...state, isBusy: false, data: action.result};
    case FBLOGIN_FAIL:
      return { ...state, isBusy: false, ErorMessage: 'not reponse'};

    default:
      return state;

  }
}

export function login(data, isconnected) {
  return (dispatch, getState) => new Promise((resolve, reject) => {
    resolve();
  })
}

export function socialLoginWithFacebook(data){
  return(dispatch, getState) => new Promise((resolve, reject) =>{
    dispatch({ type: FBLOGIN_SUCCESS, result: data});
    resolve();
  })
}

export function logout() {
  return apiDispatch([LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL], 'delete', '/sessions');
}

