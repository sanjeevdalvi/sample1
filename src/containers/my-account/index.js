import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  EnterMyAccPIDetails,
  FetchMyQuotes,
  FetchMyInsurance,
  SaveMyProfile,
  SetRedirectUrl,
  FetchProfileDetails,
} from '../../reducers/personal-info';
import { Container, NavBar, HeaderLink, LinkImage, LinkText } from './styles';
import Banner from '../../components/banner';
import MyQuotes from '../../components/my-quotes';
import MyInsurance from '../../components/my-insurance';
import MyProfile from '../../components/my-profile';
import PersonalInformation from '../../components/account-pi';
import colors from '../../utils/colors.js';
import images from '../../utils/images.js';

const Links = [
  {
    display: 'Personal Information',
    url: '/my-account/personal-info',
    src: images.Info,
    activeSrc: images.InfoSelected,
  },
  {
    display: 'My Quotes',
    url: '/my-account/my-quotes',
    src: images.Quotes,
    activeSrc: images.QuotesSelected,
  },
  {
    display: 'My Profile',
    url: '/my-account/my-profile',
    src: images.Profile,
    activeSrc: images.ProfileSelected,
  },
  {
    display: 'My Insurance',
    url: '/my-account/my-insurance',
    src: images.Insurance,
    activeSrc: images.InsuranceSelected,
  },
];

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {};
    this.submitPersonalInfo = this.submitPersonalInfo.bind(this);
    this.submitProfileInfo = this.submitProfileInfo.bind(this);
    this.socialLogin = this.socialLogin.bind(this);
  }

  componentWillMount() {
    const { primaryUserId } = this.props;
    if (primaryUserId) {
      this.props.FetchProfileDetails(primaryUserId);
      this.props.FetchMyQuotes(primaryUserId);
      this.props.FetchMyInsurance(primaryUserId);
    }
    const url = window.location.hash.split('#')[1];
    this.props.SetRedirectUrl(url);
  }

  submitPersonalInfo(payload) {
    const { primaryUserId } = this.props;
    this.props.EnterMyAccPIDetails(primaryUserId, payload);
  }

  submitProfileInfo(payload) {
    this.props.SaveMyProfile(payload);
  }

  socialLogin(type) {
    const { auth } = this.props;
    auth.login(type);
  }

  render() {
    const location = window.location.hash.split('#')[1];
    const {
      quotes,
      profileDetails,
      personalInfo,
      insurances,
      primaryUserId,
      userInfo,
    } = this.props;
    return (
      <Container>
        <Banner
          paddingLeft={'15vw'}
          background={images.myAccountBg}
          heading={'My Account'}
          textAlign={'left'}
          fontColor={colors.WHITE}
        />
        <NavBar>
          {Links.map((link, index) => (
            <HeaderLink
              key={index}
              exact
              to={link.url}
              activeClassName="active-route"
            >
              <LinkImage
                src={location === link.url ? link.activeSrc : link.src}
                alt={link.display}
              />
              <LinkText>{link.display}</LinkText>
            </HeaderLink>
          ))}
        </NavBar>
        <Switch>
          <Route
            path="/my-account"
            exact
            component={() => (
              <PersonalInformation
                personalInfo={personalInfo}
                callback={this.submitPersonalInfo}
                socialLogin={this.socialLogin}
              />
            )}
          />
          <Route
            path="/my-account/personal-info"
            exact
            component={() => (
              <PersonalInformation
                profileDetails={profileDetails}
                callback={this.submitPersonalInfo}
                socialLogin={this.socialLogin}
              />
            )}
          />
          <Route
            path="/my-account/my-quotes"
            exact
            component={() => <MyQuotes quotes={quotes} />}
          />
          <Route
            path="/my-account/my-profile"
            exact
            component={() => (
              <MyProfile
                profileDetails={profileDetails}
                callback={this.submitProfileInfo}
              />
            )}
          />
          <Route
            path="/my-account/my-insurance"
            exact
            component={() => <MyInsurance insurances={insurances} />}
          />
        </Switch>
      </Container>
    );
  }
}

const mapsStateToProps = ({
  personalFormReducer: {
    loggingIn,
    error,
    isAuthenticated,
    authToken,
    resetPassword,
    personalInfo,
    quotes,
    profileDetails,
    insurances,
    profile,
    primaryUserId,
  },
  buildPolicyReducer: { userInfo },
  location,
}) => ({
  loggingIn,
  error,
  isAuthenticated,
  authToken,
  location,
  resetPassword,
  personalInfo,
  quotes,
  profileDetails,
  insurances,
  userInfo,
  profile,
  primaryUserId,
});

const mapDispatchToProps = dispatch => ({
  EnterMyAccPIDetails: (userid, payload) =>
    dispatch(EnterMyAccPIDetails(userid, payload)),
  FetchMyQuotes: id => dispatch(FetchMyQuotes(id)),
  SaveMyProfile: payload => dispatch(SaveMyProfile(payload)),
  FetchMyInsurance: id => dispatch(FetchMyInsurance(id)),
  SetRedirectUrl: url => dispatch(SetRedirectUrl(url)),
  FetchProfileDetails: id => dispatch(FetchProfileDetails(id)),
});

export default withRouter(
  connect(mapsStateToProps, mapDispatchToProps)(MyAccount)
);
