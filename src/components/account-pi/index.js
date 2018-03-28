import React from 'react';
import {
  Container,
  HeaderConatiner,
  HeadingLine,
  HeadingText,
  ProductContainer,
  CardContainer,
  LoginContainer,
  LoginSection,
  FormSection,
  InputContainer,
  LoginLabel,
  Input,
  LoginCTA,
  Line,
  ButtonContainer,
  SocialCTA,
  CTALogo,
  CTAText,
  HeaderText,
  SubText,
} from './styles';
import colors from '../../utils/colors';
import images from '../../utils/images';

const fields = {
  firstName: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'First Name',
    required: true,
  },
  lastName: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Last Name',
    required: true,
  },
  addressLine1: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Adress Line 1',
    required: true,
  },
  addressLine2: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Address Line 2',
    required: true,
  },
  city: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'City',
    required: true,
  },
  state: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'State',
    required: true,
  },
  zipcode: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Zipcode',
    required: true,
  },
};

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    const { profileDetails } = this.props;
    this.state = {
      firstName:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.first_name
          : '',
      lastName:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.last_name
          : '',
      addressLine1:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.address1
          : '',
      addressLine2:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.address2
          : '',
      city:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.city
          : '',
      state:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.state
          : '',
      zipcode:
        profileDetails && profileDetails.userInfo
          ? profileDetails.userInfo.zipcode
          : '',
      enabledProfiles:
        profileDetails && profileDetails.profiles
          ? profileDetails.profiles.map(p => p.provider)
          : [],
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submit(event) {
    event.preventDefault();
    const { enabledProfiles, ...formData } = this.state;
    this.props.callback({
      first_name: formData.firstName,
      last_name: formData.lastName,
      address1: formData.addressLine1,
      address2: formData.addressLine2,
      city: formData.city,
      state: formData.state,
      zipcode: formData.zipcode,
    });
  }

  render() {
    const { enabledProfiles } = this.state;
    return (
      <Container>
        <HeaderConatiner>
          <HeadingLine />
          <HeadingText>Personal Information</HeadingText>
          <HeadingLine />
        </HeaderConatiner>
        <ProductContainer>
          <CardContainer>
            <LoginContainer>
              <LoginSection>
                <FormSection onSubmit={this.submit}>
                  <InputContainer>
                    {Object.keys(fields).map((field, index) => (
                      <LoginLabel
                        key={index}
                        width={
                          field === 'firstName' || field === 'lastName'
                            ? 'calc(50% - 15px)'
                            : field === 'addressLine1' ||
                              field === 'addressLine2'
                              ? 'calc(100% - 15px)'
                              : 'calc(33.33% - 10px)'
                        }
                      >
                        <Input
                          name={field}
                          marginRight={field === 'firstName' ? '12px' : '0px'}
                          placeholder={fields[field].placeholder}
                          type={fields[field].type}
                          value={this.state[field]}
                          required={fields[field].required}
                          onChange={this.handleChange}
                        />
                      </LoginLabel>
                    ))}
                  </InputContainer>
                  <LoginCTA
                    fontFamily={'Source Sans Pro'}
                    fontSize={20}
                    fontWeight={600}
                    color={colors.WHITE}
                    bgColor={colors.BUTTON_FONT_COLOR}
                    padding={'14px 33px'}
                    margin={'10px 20px;'}
                  >
                    SAVE
                  </LoginCTA>
                </FormSection>
              </LoginSection>
            </LoginContainer>
            <Line />
            <HeaderText fontSize={16} color={colors.BLACK}>
              Get Connected
            </HeaderText>
            <SubText fontSize={14} color={colors.BLACK}>
              Link your social media accounts to speed up your application.
            </SubText>
            <ButtonContainer>
              <SocialCTA
                bgColor={
                  enabledProfiles.indexOf('facebook') > -1
                    ? colors.DISABLEDFB
                    : colors.FACEBOOK
                }
                disabled={
                  enabledProfiles.indexOf('facebook') > -1 ? true : false
                }
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
                  {enabledProfiles.indexOf('facebook') > -1
                    ? 'Facebook Linked'
                    : 'Login with Facebook'}
                </CTAText>
              </SocialCTA>
              <SocialCTA
                bgColor={
                  enabledProfiles.indexOf('twitter') > -1
                    ? colors.DISABLEDTW
                    : colors.TWITTER
                }
                disabled={
                  enabledProfiles.indexOf('twitter') > -1 ? true : false
                }
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
                  {enabledProfiles.indexOf('twitter') > -1
                    ? 'Twitter Linked'
                    : 'Login with Twitter'}
                </CTAText>
              </SocialCTA>
              <SocialCTA
                bgColor={
                  enabledProfiles.indexOf('google-oauth2') > -1
                    ? colors.DISABLEDGoogle
                    : colors.GOOGLE
                }
                disabled={
                  enabledProfiles.indexOf('google-oauth2') > -1 ? true : false
                }
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
                  {enabledProfiles.indexOf('google-oauth2') > -1
                    ? 'Google Linked'
                    : 'Login with Google +'}
                </CTAText>
              </SocialCTA>
            </ButtonContainer>
          </CardContainer>
        </ProductContainer>
      </Container>
    );
  }
}

export default MyProfile;
