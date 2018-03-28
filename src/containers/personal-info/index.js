import React from 'react';
import {
  Container,
  HeadingContainer,
  HeadingTextStyle,
  HeadingLine,
  LoginContainer,
  LoginText1,
  LoginText2,
  LoginButton,
  CardContainer,
  ButtonContainer,
  MiddleContainer,
  FormContainer,
  CTA,
  CTALogo,
  CTAText,
  OrText,
  Line,
} from './styles';
import ExpressForm from '../../components/express-form';
import PersonalInfoForm from '../../components/personal-info-form';
import { connect } from 'react-redux';
import { SetPersonalInfo } from '../../reducers/build-policy';
import colors from '../../utils/colors';
import images from '../../utils/images';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.setInfo = this.setInfo.bind(this);
  }

  componentDidMount() {
    const { product } = this.props;
    const url = window.location.hash.split('#')[1];
    let urArray = url.split('/');
    const baseUrl = urArray.slice(0, urArray.length - 1).join('/');
    this.props.SetStep('info', url);
  }

  setInfo(info) {
    const { profile, product, profileDetails } = this.props;
    const personalInfo = {
      first_name: info.firstName,
      last_name: info.lastName,
      zipcode: info.zipcode,
      gender: info.checkedGender,
      is_smoker: info.isSmoker,
      address1: 'india',
      address2: 'india',
      state: 'india',
      city: 'mumbai',
      country: 'india',
      phone: '9769623639',
      income: '384745',
      past_treatment: Object.keys(info.treatmentOptions).filter(opt => {
        if (info.treatmentOptions[opt].value) {
          return info.treatmentOptions[opt].label;
        }
      }),
      sibling_effect: info.hasCardioVascular,
      driving_info: info.hasSuspendedLicense,
      us_citizen: info.isUSCitizen,
    };
    if (!profileDetails && !profileDetails.user_id) {
      personalInfo['user_id'] = profile.sub;
    }
    const profileExists = profileDetails ? true : false;
    const url = window.location.hash.split('#')[1].split('/');
    const baseUrl =
      product === 'perm'
        ? url.join('/')
        : url.slice(0, url.length - 1).join('/');
    this.props.SetPersonalInfo(
      personalInfo,
      baseUrl,
      product,
      profile.sub,
      profileExists
    );
  }

  render() {
    const { profile, userInfo, profileDetails, product } = this.props;
    return (
      <Container>
        {product !== 'perm' && (
          <HeadingContainer>
            <HeadingLine />
            <HeadingTextStyle>Personal Information</HeadingTextStyle>
            <HeadingLine />
          </HeadingContainer>
        )}
        {product !== 'perm' && (
          <LoginContainer isVisible={profile === null}>
            <LoginText1
              fontSize={22}
              color={colors.BLACK}
              lineHeight={'40px'}
              textAlign={'center'}
            >
              Already have a Meply account?
            </LoginText1>
            <LoginButton
              fontSize={18}
              color={colors.WHITE}
              bgColor={colors.BUTTON_FONT_COLOR}
              radius={74}
              padding={'10px 15px'}
              margin={'0 12px'}
            >
              Login
            </LoginButton>
            <LoginText2
              fontSize={22}
              color={colors.BLACK}
              lineHeight={'40px'}
              textAlign={'center'}
            >
              and let us speed up the process.
            </LoginText2>
          </LoginContainer>
        )}
        <LoginContainer isVisible={profile !== null}>
          <LoginText2
            fontSize={22}
            color={colors.BLACK}
            lineHeight={'40px'}
            textAlign={'center'}
          >
            Welcome back{' '}
            {profile ? profile.given_name : userInfo ? userInfo.firstName : ''}{' '}
            {profile ? profile.family_name : userInfo ? userInfo.lastName : ''}.
            Let’s get started building your policy.
          </LoginText2>
        </LoginContainer>
        <CardContainer isVisible={profile === null && userInfo == null}>
          <ButtonContainer>
            <CTA
              bgColor={colors.FACEBOOK}
              onClick={() => this.props.socialLogin('facebook')}
            >
              <CTALogo src={images.FBBUTTON} alt="facebook" />
              <CTAText
                fontFamily={'Source Sans Pro'}
                fontSize={14}
                fontWeight={600}
                textAlign={'center'}
                color={colors.WHITE}
              >
                Login with Facebook
              </CTAText>
            </CTA>
            <CTA
              bgColor={colors.TWITTER}
              onClick={() => this.props.socialLogin('twitter')}
            >
              <CTALogo src={images.TWITTERBUTTON} alt="twitter" />
              <CTAText
                fontFamily={'Source Sans Pro'}
                fontSize={14}
                fontWeight={600}
                textAlign={'center'}
                color={colors.WHITE}
              >
                Login with Twitter
              </CTAText>
            </CTA>
            <CTA
              bgColor={colors.GOOGLE}
              onClick={() => this.props.socialLogin('google')}
            >
              <CTALogo src={images.GOOGLEPLUSBUTTON} alt="g +" />
              <CTAText
                fontFamily={'Source Sans Pro'}
                fontSize={14}
                fontWeight={600}
                textAlign={'center'}
                color={colors.WHITE}
              >
                Login with Google +
              </CTAText>
            </CTA>
          </ButtonContainer>
          <MiddleContainer>
            <Line />
            <OrText
              fontFamily={'Source Sans Pro'}
              fontSize={14}
              fontWeight={600}
              textAlign={'center'}
              color={colors.BUTTONBG}
            >
              OR
            </OrText>
            <Line />
          </MiddleContainer>
          <FormContainer>
            <ExpressForm CustomLogIn={this.props.login} />
          </FormContainer>
        </CardContainer>
        <CardContainer>
          <PersonalInfoForm
            profile={profile}
            callback={this.setInfo}
            userInfo={userInfo}
            profileDetails={profileDetails ? profileDetails.userInfo : null}
            product={product}
          />
        </CardContainer>
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
    profileDetails,
  },
  buildPolicyReducer: { policyType },
}) => ({
  isAuthenticated,
  signinResponse,
  loggingIn,
  error,
  authHeaders,
  profile,
  policyType,
  profileDetails,
});

const mapDispatchToProps = dispatch => ({
  SetPersonalInfo: (info, baseUrl, product, userId, profileExist) =>
    dispatch(SetPersonalInfo(info, baseUrl, product, userId, profileExist)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(PersonalInfo);
