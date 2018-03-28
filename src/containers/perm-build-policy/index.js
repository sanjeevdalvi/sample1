import React from 'react';
import {
  Container,
  HeadingContainer,
  HeadingTextStyle,
  HeadingLine,
  SubHeading,
  Card,
  CardHeading,
  CardText,
  CardCTA,
  CardText2,
} from './styles';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  SetReviewDetails,
  SetPersonalInfo,
  SetStep,
} from '../../reducers/build-policy';
import { CustomLogIn } from '../../reducers/personal-info';
import Banner from '../../components/banner';
import PersonalInfo from '../personal-info';
import bannerBackground from '../../assets/images/bigstock-laughing-african-american-girl-141617363.png';
import colors from '../../utils/colors';

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
    const product = 'perm';
    return (
      <Container>
        <Banner
          background={bannerBackground}
          heading="We’re excited for you!"
        />
        <HeadingContainer>
          <HeadingLine />
          <HeadingTextStyle>Applying for a Permanent Policy</HeadingTextStyle>
          <HeadingLine />
        </HeadingContainer>
        <SubHeading>
          Permanent polices are a powerful way for you to secure your families
          future and manage your wealth. But there are so many options for
          different Permanent Policies and because you’re going to have this for
          the rest of your life, there is no real way fo us to just quote you
          directly online. Instead, the Meply team will review your application
          and build a policy that is specific to you. That way you know you’re
          set for life.
        </SubHeading>
        <Card>
          <CardHeading>Want a Policy Today?</CardHeading>
          <CardText>
            We recommend starting with a Term Policy. You can compare quotes
            online, apply within 5 minutes, and get your policy approved today
            without talking to anyone. A Term Policy is an easy way to get a
            policy and once a carrier has approved you it can be easy to convert
            it into a permanent policy.
          </CardText>
          <CardText2>
            Apply for your Term Policy now and get your policy right away.
          </CardText2>
          <CardCTA
            fontSize={18}
            fontWeight={600}
            color={colors.WHITE}
            bgColor={colors.BUTTON_FONT_COLOR}
            padding={'14px 50px'}
            onClick={() => this.navigateTo('/term-life-insurance/build-policy')}
          >
            Get Started
          </CardCTA>
        </Card>
        <PersonalInfo
          product={product}
          SetStep={this.props.SetStep}
          navigateTo={this.navigateTo}
          login={this.login}
          socialLogin={this.socialLogin}
          auth={auth}
          userInfo={userInfo}
        />
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
  SetStep: (stepname, reUrl) => dispatch(SetStep(stepname, reUrl)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(PermBuildPolicy);
