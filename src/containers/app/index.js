import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PrivateRoute from '../../components/private-route';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ChatBoxCTA from '../../components/chat-cta';
import HomePage from '../home';
import LoginForm from '../login';
import FamilyProvisions from '../family-provisions';
import StudentLoans from '../student-loans';
import HomeLoans from '../home-loans';
import RetirementPlans from '../retirement-plans';
import WealthManagement from '../wealth-management';
import TermLifeInsurance from '../term-life-insurance';
import TypeOfTermLife from '../type-of-term-life';
import PermLifeInsurance from '../perm-life-insurance';
import FinalExpInsurance from '../final-expense-insurance';
import MedSupplementInsurance from '../medical-supplemental-insurance';
import ForgotPassword from '../forgot-password';
import MyAccount from '../my-account';
import PermBuildPolicy from '../perm-build-policy';
import TermBuildPolicy from '../term-build-policy';
import FinalExpenseBuildPolicy from '../final-expense-build-poilcy';
import RedirectPage from '../redirect';
import { SetUserProfile, SetAuthHeaders } from '../../reducers/personal-info';
import ConnectedSwitch from '../../components/connected-switch';
import Auth from '../../auth';

import styles from './styles';
import Redirect from 'react-router-dom/Redirect';
const auth = new Auth();

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { profile, redirectUrl } = this.props;
    if (window.location.hash.indexOf('access_token') > -1) {
      auth.handleAuthentication(
        headers => this.props.SetAuthHeaders(headers),
        profiles => this.props.SetUserProfile(profiles, profile, redirectUrl)
      );
    }
  }

  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <styles.Meply>
        <ConnectedSwitch>
          <Route
            path="/"
            component={({ match }) => (
              <Header isHomePage={match.isExact} location={match.location} />
            )}
          />
        </ConnectedSwitch>
        <main>
          {window.location.hash.indexOf('access_token') > -1 && (
            <RedirectPage />
          )}
          <ConnectedSwitch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginForm} />
            <Route
              path="/term-life-insurance"
              exact
              component={TermLifeInsurance}
            />
            <Route
              path="/perm-life-insurance"
              exact
              component={PermLifeInsurance}
            />
            <Route
              path="/type-of-term-life"
              component={() => <TypeOfTermLife auth={auth} />}
            />
            <Route
              path="/term-life-insurance/build-policy"
              component={() => <TermBuildPolicy auth={auth} />}
            />
            <Route
              path="/perm-life-insurance/build-policy"
              component={() => <PermBuildPolicy auth={auth} />}
            />

            <Route
              path="/final-expense-insurance"
              exact
              component={FinalExpInsurance}
            />

            <Route
              path="/final-expense-insurance/build-policy"
              component={() => <FinalExpenseBuildPolicy auth={auth} />}
            />
            <Route
              path="/medical-supplemental-insurance"
              component={MedSupplementInsurance}
            />
            <Route path="/student-loans" component={StudentLoans} />
            <Route path="/home-loans" component={HomeLoans} />
            <Route path="/retirement-plans" component={RetirementPlans} />
            <Route path="/wealth-management" component={WealthManagement} />
            <Route path="/family-provisions" component={FamilyProvisions} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route
              path="/my-account"
              component={() => <MyAccount auth={auth} />}
            />
            <PrivateRoute path="/loggedIn" component={Protected} />
          </ConnectedSwitch>
        </main>
        <ChatBoxCTA />
        <Footer />
      </styles.Meply>
    );
  }
}

const Protected = () => <h3>Protected</h3>;

const mapsStateToProps = ({
  personalFormReducer: {
    loggingIn,
    error,
    isAuthenticated,
    authToken,
    profile,
    primaryUserId,
    redirectUrl,
  },
  buildPolicyReducer: { policyType, currentStep },
  location,
}) => ({
  loggingIn,
  error,
  isAuthenticated,
  authToken,
  location,
  policyType,
  currentStep,
  profile,
  primaryUserId,
  redirectUrl,
});

const mapDispatchToProps = dispatch => ({
  SetUserProfile: (payload, policyType, stepname, existingProfile) =>
    dispatch(SetUserProfile(payload, policyType, stepname, existingProfile)),
  SetAuthHeaders: headers => dispatch(SetAuthHeaders(headers)),
});

export default withRouter(connect(mapsStateToProps, mapDispatchToProps)(App));
