import React from 'react';
import { Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import bannerBackground from '../../assets/images/bigstock-laughing-african-american-girl-141617363.png';
import TypeInsTermPerm from '../../components/type-ins-term-perm';
import BuildPolicyCoveragePerm from '../../components/build-policy-coverage-perm';
import BuildPolicyQuote from '../../components/build-policy-quote';
import PersonalInfo from '../personal-info';
import ProductGrid from '../../components/product-grid';
import Review from '../../components/build-policy-review';
import Stepper from '../../components/stepper';
import {
  SetReviewDetails,
  SetPersonalInfo,
  SetStep,
} from '../../reducers/build-policy';
import { CustomLogIn } from '../../reducers/personal-info';
import images from '../../utils/images';

const stepItems = [
  {
    text: 'TYPE',
    image: images.typeImage,
    navLink: '/',
    bannerBackground,
    heading: 'Let’s build your policy.',
  },
  {
    text: 'COVERAGE',
    image: images.coverageImage,
    adjust: true,
    navLink: '/coverage',
    bannerBackground,
  },
  {
    text: 'INFO',
    image: images.infoImage,
    navLink: '/info',
    bannerBackground,
    heading: 'Let’s build your policy.',
  },
  {
    text: 'QUOTE',
    image: images.quoteImage,
    navLink: '/quote',
    bannerBackground,
    heading: 'Let’s build your policy.',
  },
  {
    text: 'REVIEW',
    image: images.reviewImage,
    navLink: '/review',
    bannerBackground,
    heading: 'Let’s build your policy.',
  },
];

class PermBuildPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
    this.onReviewSubmit = this.onReviewSubmit.bind(this);
    this.login = this.login.bind(this);
    this.socialLogin = this.socialLogin.bind(this);
  }

  navigateTo(route) {
    if (route.length) {
      this.props.navigateTo(route);
    }
  }

  onReviewSubmit(orderDetails, payload) {
    const { userInfo } = this.props;
    this.props.SetReviewDetails(userInfo.user_id, orderDetails, payload);
  }

  async login(payload) {
    const { auth, CustomLogIn } = this.props;
    const successful = await CustomLogIn(payload);
    auth.login('', payload.email, payload.password, successful);
  }

  socialLogin(type) {
    const { auth } = this.props;
    auth.login(type);
  }

  render() {
    const {
      auth,
      profile,
      userInfo,
      policyAmount,
      selectedQuote,
      policyType,
    } = this.props;
    let currentStep = 1;
    const product = 'perm';

    if (window.location.hash.split('/')[3] === 'coverage') currentStep = 2;
    if (window.location.hash.split('/')[3] === 'info') currentStep = 3;
    if (window.location.hash.split('/')[3] === 'quote') currentStep = 4;
    if (window.location.hash.split('/')[3] === 'review') currentStep = 5;

    return (
      <Stepper
        product={product}
        baseUrl="/perm-life-insurance/build-policy"
        navigateTo={this.navigateTo}
        steps={stepItems}
        currentStep={currentStep}
      >
        <Route
          path="/perm-life-insurance/build-policy"
          exact
          component={() => (
            <div>
              <TypeInsTermPerm navigateTo={this.navigateTo} />
              <ProductGrid navigateTo={this.navigateTo} />
            </div>
          )}
        />
        <Route
          path="/perm-life-insurance/build-policy/coverage"
          render={props => (
            <BuildPolicyCoveragePerm
              navigateTo={this.navigateTo}
              nextStep="/perm-life-insurance/build-policy/info"
            />
          )}
        />
        <Route
          path="/perm-life-insurance/build-policy/info"
          render={props => (
            <PersonalInfo
              SetStep={this.props.SetStep}
              navigateTo={this.navigateTo}
              login={this.login}
              socialLogin={this.socialLogin}
              auth={auth}
              userInfo={userInfo}
            />
          )}
        />
        <Route
          path="/perm-life-insurance/build-policy/quote"
          render={props => (
            <BuildPolicyQuote navigateTo={this.navigateTo} product={'perm'} />
          )}
        />
        <Route
          path="/perm-life-insurance/build-policy/review"
          render={props => (
            <Review
              navigateTo={this.navigateTo}
              onReviewSubmit={this.onReviewSubmit}
              login={this.login}
              socialLogin={this.socialLogin}
              SetStep={this.props.SetStep}
              profile={profile}
              selectedQuote={selectedQuote}
              policyAmount={policyAmount}
              policyType={policyType}
            />
          )}
        />
      </Stepper>
    );
  }
}
const mapsStateToProps = ({
  personalFormReducer: {
    isAuthenticated,
    signinResponse,
    loggingIn,
    error,
    authHeaders,
    profile,
  },
  buildPolicyReducer: {
    policyType,
    currentStep,
    userInfo,
    selectedQuote,
    policyAmount,
  },
}) => ({
  isAuthenticated,
  signinResponse,
  loggingIn,
  error,
  authHeaders,
  profile,
  policyType,
  currentStep,
  userInfo,
  selectedQuote,
  policyAmount,
});

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
  SetReviewDetails: (user_id, orderDetails, payload) =>
    dispatch(SetReviewDetails(user_id, orderDetails, payload)),
  CustomLogIn: payload => dispatch(CustomLogIn(payload)),
  SetPersonalInfo: (info, policyType) =>
    dispatch(SetPersonalInfo(info, policyType)),
  SetStep: (stepname, reUrl) => dispatch(SetStep(stepname, reUrl)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(PermBuildPolicy);
