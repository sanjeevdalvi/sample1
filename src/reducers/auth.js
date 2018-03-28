import { push } from 'react-router-redux';

export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';
export const AUTH_FAIL = 'auth/AUTH_FAIL';
export const AUTH_LOGIN_STATUS = 'auth/LOGIN_STATUS';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const AUTH_TOKEN = 'AUTH_TOKEN';

export const authSuccess = authToken => ({
  type: AUTH_SUCCESS,
  authToken,
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

const loginAPI = () => {
  return {
    sucess: true,
    message: 'successful',
    token: 'abcd',
  };
};

export const logIn = (email, password) => async dispatch => {
  dispatch(startLogging());
  const response = await loginAPI();
  if (response.success === false) {
    dispatch(authFail(response.message));
    localStorage.removeItem(AUTH_TOKEN);
  } else {
    dispatch(authSuccess(response.token));
    localStorage.setItem(AUTH_TOKEN, response.token);
    dispatch(push('/loggedIn'));
  }
  dispatch(endLogging());
};

export const logOut = () => dispatch => {
  localStorage.removeItem(AUTH_TOKEN);
  dispatch(authLogout());
  dispatch(push('/'));
};

const initialState = {
  isAuthenticated: false,
  authToken: '',
  loggingIn: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        authToken: action.authToken,
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
    case AUTH_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
