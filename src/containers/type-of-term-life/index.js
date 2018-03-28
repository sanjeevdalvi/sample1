import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from './styles';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Banner from '../../components/banner';
import images from '../../utils/images.js';
import BuildPolicyTab from '../../components/build-policy-tab';
import TypeInsTermPerm from '../../components/type-ins-term-perm';
import BuildPolicyCoverage from '../../components/build-policy-coverage';
import BuildPolicyCoveragePerm from '../../components/build-policy-coverage-perm';
import BuildPolicyQuote from '../../components/build-policy-quote';
import PersonalInfo from '../personal-info';
import ProductGrid from '../../components/product-grid';
import Review from '../../components/build-policy-review';
import {
  SetReviewDetails,
  SetPersonalInfo,
  SetStep,
} from '../../reducers/build-policy';
import { CustomLogIn } from '../../reducers/personal-info';

const stepItems = [
  { text: 'TYPE', image: images.typeImage, navLink: '/' },
  {
    text: 'COVERAGE',
    image: images.coverageImage,
    adjust: true,
    navLink: '/coverage',
  },
  { text: 'INFO', image: images.infoImage, navLink: '/info' },
  { text: 'QUOTE', image: images.quoteImage, navLink: '/quote' },
  { text: 'REVIEW', image: images.reviewImage, navLink: '/review' },
];

const StepType = ({ navigateTo }) => (
  <div>
    <TypeInsTermPerm navigateTo={navigateTo} />
    <ProductGrid navigateTo={navigateTo} />
  </div>
);
const StepCoverageTerm = ({ navigateTo, nextStep }) => (
  <BuildPolicyCoverage navigateTo={navigateTo} nextStep={nextStep} />
);
const StepCoveragePerm = ({ navigateTo, nextStep }) => (
  <BuildPolicyCoveragePerm navigateTo={navigateTo} nextStep={nextStep} />
);
const StepQuote = ({ navigateTo, product }) => (
  <BuildPolicyQuote navigateTo={navigateTo} product={product} />
);

class TypeOfTermLifeContainer extends React.Component {
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
    let bannerImage = images.headerPolicyBuild;
    const product = window.location.hash.split('/')[2];

    if (window.location.hash.split('/')[3] === 'coverage') {
      currentStep = 2;
      bannerImage = images.headerCoverage;
    }
    if (window.location.hash.split('/')[3] === 'info') currentStep = 3;
    if (window.location.hash.split('/')[3] === 'quote') {
      currentStep = 4;
      bannerImage = images.headerQuote;
    }
    if (window.location.hash.split('/')[3] === 'review') currentStep = 5;

    return (
      <Container>
        <Banner background={bannerImage} heading="Let’s build your policy." />
        <BuildPolicyTab
          currentTab={currentStep}
          navigateTo={this.navigateTo}
          product={product}
          stepItems={stepItems}
        />
        <Switch navigateTo={this.navigateTo}>
          <Route path="/type-of-term-life" exact component={StepType} />
          <Route
            path="/type-of-term-life/term/coverage"
            render={props => (
              <StepCoverageTerm
                navigateTo={this.navigateTo}
                nextStep="/type-of-term-life/term/info"
              />
            )}
          />
          <Route
            path="/type-of-term-life/perm/coverage"
            render={props => (
              <StepCoveragePerm
                navigateTo={this.navigateTo}
                nextStep="/type-of-term-life/perm/info"
              />
            )}
          />
          <Route
            path="/type-of-term-life/term/info"
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
            path="/type-of-term-life/perm/info"
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
            path="/type-of-term-life/term/quote"
            render={props => (
              <StepQuote navigateTo={this.navigateTo} product={product} />
            )}
          />
          <Route
            path="/type-of-term-life/perm/quote"
            render={props => (
              <StepQuote navigateTo={this.navigateTo} product={product} />
            )}
          />
          <Route
            path="/type-of-term-life/term/review"
            render={props => (
              <Review
                navigateTo={this.navigateTo}
                onReviewSubmit={this.onReviewSubmit}
                login={this.login}
                socialLogin={this.socialLogin}
                SetStep={this.props.SetStep}
                profile={userInfo}
                selectedQuote={selectedQuote}
                policyAmount={policyAmount}
              />
            )}
          />
          <Route
            path="/type-of-term-life/perm/review"
            render={props => (
              <Review
                navigateTo={this.navigateTo}
                onReviewSubmit={this.onReviewSubmit}
                login={this.login}
                socialLogin={this.socialLogin}
                SetStep={this.props.SetStep}
                profile={userInfo}
                selectedQuote={selectedQuote}
                policyAmount={policyAmount}
                policyType={policyType}
              />
            )}
          />
        </Switch>
      </Container>
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
  SetStep: stepname => dispatch(SetStep(stepname)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(
  TypeOfTermLifeContainer
);
