import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  FORGET_PASSWORD,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_FAIL,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  REMOVE_USER,
  BASIC_INFO,
} from './types';
import { Auth } from 'aws-amplify';




export const signupUser = (values, navigation) => {
  return (dispatch) => {
    try {
      loginUserSuccess(dispatch, user)
      dispatch({ type: SIGNUP_USER });
    } catch (error) {
      console.warn('error', error);
      signupUserFail(dispatch, error);
    }

  };
};

export const loginUser = (email, password, navigation) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_USER });
    try {
      const user = await Auth.signIn(email, password);
      AsyncStorage.setItem('UID', user?.username);
      AsyncStorage.setItem('token', user?.signInUserSession?.accessToken?.jwtToken);
      loginUserSuccess(dispatch, user)
      navigation.navigate('AuthLoading');
      return { user, success: true }
    } catch (error) {
      console.log('error signing in', error);
      loginuserFail(dispatch)
      return { error, success: false }
    }

  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch({ type: GET_USER });
    try {
      const user = await Auth.currentUserInfo();
      getUserSuccess(dispatch, user)
      return { user, success: true }
    } catch (error) {
      getUserFail(dispatch)
      return { error, success: false }
    }
  };
};

export const removeUserFromState = (navigation) => {
  return (dispatch) => {
    dispatch({ type: REMOVE_USER });
    navigation.navigate("AuthLoading")
  };
};


export const updateUser = (id, value, onsignal) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER });

  };
};

export const forgotPassword = (email, navigation) => {
  return (dispatch) => {
    dispatch({ type: FORGET_PASSWORD });
  };
};


const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS
  });
}
const signupUserFail = (dispatch, error) => {
  dispatch({
    type: SIGNUP_USER_FAIL
  });
  alert(error)
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

}

const loginuserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const getUserFail = (dispatch, error) => {
  alert(error.response.data.message)
  dispatch({ type: GET_USER_FAIL });
};

const getUserSuccess = (dispatch, user) => {
  dispatch({
    type: GET_USER_SUCCESS,
    payload: user
  });

   const basicInfoSuccess = (dispatch, basic_info) => {
    dispatch({
      type: BASIC_INFO,
      payload: basic_info
    });
  }

}
