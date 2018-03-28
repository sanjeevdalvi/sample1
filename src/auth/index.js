import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './constants';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid profile email',
  });

  constructor() {
    this.login = this.login.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
  }

  login(connectionType, email, password) {
    if (connectionType === 'google') {
      // Trigger login with google
      this.auth0.authorize({
        connection: 'google-oauth2',
      });
    } else if (connectionType === 'facebook') {
      // Trigger login popup with facebook
      this.auth0.popup.authorize({
        connection: 'facebook',
      });
    } else if (connectionType === 'twitter') {
      // Trigger login popup with twitter
      this.auth0.popup.authorize({
        connection: 'twitter',
      });
    } else {
      this.auth0.login({
        realm: 'Username-Password-Authentication', //connection name or HRD domain
        username: email,
        password: password,
      });
    }
  }

  handleAuthentication(setHeaders, setProfile) {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        const authHeaders = {
          access_token: authResult.accessToken,
          id_token: authResult.idToken,
          expires_at: expiresAt,
        };
        setHeaders(authHeaders);
        this.auth0.client.userInfo(authResult.accessToken, function(err, user) {
          // Now you have the user's information
          setProfile(user);
        });
      } else if (err) {
        console.log(err);
      }
    });
  }
}
