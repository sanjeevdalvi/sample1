import { push } from 'react-router-redux';
import {
  customAuth0Registeration,
  getUserData,
  sendPasswordLink,
  updateUserInfo,
  fetchQuotes,
  saveProfile,
  fetchInsurance,
  fetchPersonInformation,
  linkSocial,
} from '../helpers/api';
import { ULogOut } from './build-policy';
export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';
export const AUTH_FAIL = 'auth/AUTH_FAIL';
export const AUTH_LOGIN_STATUS = 'auth/LOGIN_STATUS';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const AUTH_SET_USER_PROFILE = 'AUTH_SET_USER_PROFILE';
export const SET_AUTH_HEADERS = 'SET_AUTH_HEADERS';
export const PASSWORDLINK_SENT = 'PASSWORDLINK_SENT';
export const PASSWORDLINK_ERROR = 'PASSWORDLINK_ERROR';
export const ADD_PI_DETAILS = 'ADD_PI_DETAILS';
export const FETCH_MY_QUOTES = 'FETCH_MY_QUOTES';
export const SAVE_MY_PROFILE = 'SAVE_MY_PROFILE';
export const FETCH_MY_INSURANCE = 'FETCH_MY_INSURANCE';
export const SET_REDIRECTLINK = 'SET_REDIRECTLINK';
export const FETCH_PROFILE_DETAILS = 'FETCH_PROFILE_DETAILS';
export const LOGOUT = 'LOGOUT';

export const authSuccess = signinResponse => ({
  type: AUTH_SUCCESS,
  signinResponse,
});

export const authFail = error => ({
  type: AUTH_FAIL,
  error,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const startLogging = () => ({
  type: AUTH_LOGIN_STATUS,
  loggingIn: true,
});

export const endLogging = () => ({
  type: AUTH_LOGIN_STATUS,
  loggingIn: false,
});

export const setUserProfile = profile => ({
  type: AUTH_SET_USER_PROFILE,
  profile,
});

export const setAuthHeaders = authHeaders => ({
  type: SET_AUTH_HEADERS,
  authHeaders,
});

export const setPasswordError = payload => ({
  type: PASSWORDLINK_ERROR,
  error: payload,
});

export const passwordLinkSent = payload => ({
  type: PASSWORDLINK_SENT,
  payload,
});

export const enterMyAccPIDetails = payload => ({
  type: ADD_PI_DETAILS,
  payload,
});

export const fetchMyQuotes = payload => ({
  type: FETCH_MY_QUOTES,
  payload,
});

export const saveMyProfile = payload => ({
  type: SAVE_MY_PROFILE,
  payload,
});

export const fetchMyInsurance = payload => ({
  type: FETCH_MY_INSURANCE,
  payload,
});

export const fetchProfileDetails = payload => ({
  type: FETCH_PROFILE_DETAILS,
  payload,
});

export const setRedirectUrl = redirectUrl => ({
  type: SET_REDIRECTLINK,
  redirectUrl,
});

export const logOut = () => ({
  type: LOGOUT,
});

export const SetRedirectUrl = redirectUrl => dispatch => {
  dispatch(setRedirectUrl(redirectUrl));
};

export const CustomLogIn = payload => async dispatch => {
  dispatch(startLogging());
  const response = await customAuth0Registeration(payload);
  if (response.success === false) {
    dispatch(authFail(response));
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    dispatch(authSuccess(response));
    localStorage.setItem(AUTH_TOKEN, response);
  }
  dispatch(endLogging());
  return response.success;
};

export const SetUserProfile = (
  profile,
  existingProfile,
  redirectUrl
) => async dispatch => {
  try {
    if (existingProfile) {
      const provider = profile.sub.split('|')[0];
      await linkSocial(existingProfile.sub, {
        id: profile.sub,
        provider,
      });
    } else {
      await getUserData({
        userId: profile.sub,
        domain: 'string',
      });
      dispatch(setUserProfile(profile));
    }
  } catch (error) {}
  dispatch(FetchProfileDetails(profile.sub));
  dispatch(push(redirectUrl));
};

export const ChangePassword = payload => async dispatch => {
  let response = null;
  try {
    response = await sendPasswordLink(payload);
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  if (response && response.success) {
    dispatch(passwordLinkSent(response));
  }
};

export const SetAuthHeaders = headers => dispatch => {
  dispatch(setAuthHeaders(headers));
};

export const EnterMyAccPIDetails = (userid, payload) => async dispatch => {
  let response = null;
  try {
    response = await updateUserInfo(userid, payload);
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  dispatch(enterMyAccPIDetails(response));
};

export const FetchMyQuotes = id => async dispatch => {
  let response = null;
  try {
    response = await fetchQuotes(id);
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  dispatch(fetchMyQuotes(response));
};

export const SaveMyProfile = payload => async dispatch => {
  let response = null;
  try {
    response = await saveProfile(payload);
    if (response.success) {
      dispatch(saveMyProfile(response));
    }
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  dispatch(FetchProfileDetails(response.user_id));
};

export const FetchMyInsurance = id => async dispatch => {
  let response = null;
  try {
    response = await fetchInsurance(id);
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  dispatch(fetchMyInsurance(response));
};

export const FetchProfileDetails = id => async dispatch => {
  let response = null;
  try {
    response = await fetchPersonInformation(id);
  } catch (error) {
    dispatch(setPasswordError(error));
  }
  dispatch(fetchProfileDetails(response));
};

export const UserLogOut = () => dispatch => {
  localStorage.removeItem('state');
  dispatch(logOut());
  dispatch(ULogOut());
  dispatch(push('/'));
};

const initialState = {
  isAuthenticated: false,
  signinResponse: null,
  loggingIn: false,
  authHeaders: null,
  profile: null,
  authStep: '',
  resetPassword: null,
  error: null,
  personalInfo: null,
  quotes: [],
  profileDetails: null,
  insurances: [],
  primaryUserId: null,
  redirectUrl: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        signinResponse: action.signinResponse,
        error: '',
      };
    case AUTH_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error,
      };
    case AUTH_LOGIN_STATUS:
      return {
        ...state,
        error: action.loggingIn ? '' : state.error,
        loggingIn: action.loggingIn,
      };
    case SET_AUTH_HEADERS:
      return {
        ...state,
        authHeaders: action.authHeaders,
      };
    case AUTH_SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
        primaryUserId: action.profile.sub,
      };
    case AUTH_LOGOUT:
      return {
        ...initialState,
      };
    case PASSWORDLINK_SENT:
      return {
        ...state,
        resetPassword: action.payload,
        error: null,
      };
    case ADD_PI_DETAILS:
      return {
        ...state,
        profileDetails: action.payload,
        error: null,
      };
    case FETCH_MY_QUOTES:
      return {
        ...state,
        quotes: action.payload,
        error: null,
      };
    case FETCH_PROFILE_DETAILS:
      return {
        ...state,
        profileDetails: action.payload,
        error: null,
      };
    case FETCH_MY_INSURANCE:
      return {
        ...state,
        insurances: action.payload,
        error: null,
      };
    case PASSWORDLINK_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_REDIRECTLINK:
      return {
        ...state,
        redirectUrl: action.redirectUrl,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
