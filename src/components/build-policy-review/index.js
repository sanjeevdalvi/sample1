import React from 'react';
import {
  Container,
  HeadingContainer,
  HeadingTextStyle,
  HeadingLine,
  CardContainer,
  FormContainer,
  MiddleContainer,
  OrText,
  Quote,
  QuoteLogo,
  Payments,
  Tenure,
  Label,
  Value,
  SelectedOptions,
  Option,
  OptionLabel,
  OptionValue,
  CTA,
  Line,
  VerticalLine,
  VerticalLine2,
  InnerValue,
  ButtonContainer,
  SocialCTA,
  CTALogo,
  CTAText,
  FormSection,
  InputContainer,
  LoginLabel,
  Input,
  LoginCTA,
  SignUpCTA,
  LoginContainer,
  LoginSection,
  SignFormContainer,
  OrLine,
  LoginTextStyle,
  LoginLine,
  FormHeading,
} from './styles';
import ReviewForm from '../../components/review-form';
import { AUTH_CONFIG } from '../../auth/constants';
import images from '../../utils/images';
import colors from '../../utils/colors';
import ExpressForm from '../../components/express-form';

const SelectedQuote = {
  name: 'Protective',
  logo: images.srcProtectiveLogo,
  monthlyPrice: '14.00',
  annualPrice: '300.00',
  coverage: '300,000',
  term: 10,
};

const fields = {
  emailAddress: {
    type: 'email',
    errorMessage: 'Wrong pattern',
    placeholder: 'Email Address',
    required: true,
  },
  password: {
    type: 'password',
    errorMessage: 'Wrong pattern',
    placeholder: 'Password',
    required: true,
  },
};

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      password: '',
      signUp: false,
    };
    this.submit = this.submit.bind(this);
    this.editQuotes = this.editQuotes.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.customLogin = this.customLogin.bind(this);
    this.showSignUpForm = this.showSignUpForm.bind(this);
  }

  componentDidMount() {
    this.props.SetStep('review');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  showSignUpForm() {
    this.setState({ signUp: !this.state.signUp });
  }

  async submit(payload) {
    const {
      policyAmount,
      selectedQuote,
      policyType,
      primaryUserId,
    } = this.props;
    let price = selectedQuote
      ? selectedQuote.plan === 'monthly'
        ? selectedQuote.monthly || 0
        : selectedQuote.annual || 0
      : 0;
    const orderDetails = {
      user_id: primaryUserId,
      coverage: policyAmount ? policyAmount.toString() : '',
      term_length:
        selectedQuote && selectedQuote.term
          ? selectedQuote.term.toString()
          : '',
      type: policyType || '',
      carrierCode: selectedQuote.carrierCode || '',
      carrierName: selectedQuote.carrierName || '',
      productName: selectedQuote.productName || '',
      price,
      planType: selectedQuote.plan || '',
      status: 'open',
    };
    const newPayload = {
      address1: payload.address.line1,
      address2: payload.address.line2,
      state: payload.address.state,
      city: payload.address.city,
      zipcode: payload.address.zipcode,
      phone: payload.phoneNumber,
      country: payload.countryOfBirth,
      income: payload.individualIncome,
    };
    this.props.onReviewSubmit(orderDetails, newPayload);
  }

  editQuotes() {
    const isTerm =
      window.location.hash.indexOf('perm') === -1 ? 'term' : 'perm';
    let url = '/type-of-term-life/perm/quote';
    if (isTerm === 'term') {
      url = '/type-of-term-life/term/quote';
    }
    this.props.navigateTo(url);
  }

  customLogin(event) {
    const { emailAddress, password } = this.state;
    event.preventDefault();
    let payload = {
      connection: 'Username-Password-Authentication',
      client_id: AUTH_CONFIG.clientId,
      email: emailAddress,
      password,
      scope: 'openid',
      responseType: 'id_token',
    };
    this.props.login(payload);
  }

  render() {
    const { profile, selectedQuote, policyAmount, profileDetails } = this.props;
    const { signUp } = this.state;
    return (
      <Container>
        <HeadingContainer>
          <HeadingLine />
          <HeadingTextStyle color={colors.MOBILE_HEADER_BG} fontSize={36}>
            Lets Review
          </HeadingTextStyle>
          <HeadingLine />
        </HeadingContainer>
        {selectedQuote && (
          <CardContainer>
            <Quote>
              <QuoteLogo
                src={`https://lite.xrae.com/Images/Carriers/${
                  selectedQuote.carrierCode
                }.png`}
                alt={SelectedQuote.name}
              />
              <Payments>
                <Tenure>
                  <Label
                    fontSize={16}
                    fontWeight={600}
                    letterSpacing={3.6}
                    color={colors.SECTION_TEXT_1}
                  >
                    MONTHLY PAYMENT
                  </Label>
                  <Value
                    fontSize={40}
                    fontWeight={300}
                    textAlign={'center'}
                    color={colors.MOBILE_HEADER_BG}
                  >
                    ${selectedQuote.monthly}
                    <InnerValue
                      fontSize={20}
                      fontWeight={300}
                      textAlign={'center'}
                      color={colors.MOBILE_HEADER_BG}
                    >
                      /monthly
                    </InnerValue>
                  </Value>
                </Tenure>
                <VerticalLine />
                <Tenure>
                  <Label
                    fontSize={16}
                    fontWeight={600}
                    letterSpacing={3.6}
                    color={colors.SECTION_TEXT_1}
                  >
                    ANNUALLY
                  </Label>
                  <Value
                    fontSize={40}
                    fontWeight={300}
                    textAlign={'center'}
                    color={colors.MOBILE_HEADER_BG}
                  >
                    ${selectedQuote.annual}
                  </Value>
                </Tenure>
              </Payments>
              <Line />
              <SelectedOptions>
                <Option>
                  <OptionLabel
                    fontSize={28}
                    fontWeight={300}
                    letterSpacing={4}
                    textAlign={'center'}
                    color={colors.BUTTON_FONT_COLOR}
                  >
                    COVERAGE
                  </OptionLabel>
                  <OptionValue
                    fontSize={28}
                    fontWeight={300}
                    textAlign={'center'}
                    color={colors.MOBILE_HEADER_BG}
                  >
                    ${policyAmount}
                  </OptionValue>
                </Option>
                <VerticalLine2 />
                <Option>
                  <OptionLabel
                    fontSize={28}
                    fontWeight={300}
                    letterSpacing={4}
                    textAlign={'center'}
                    color={colors.BUTTON_FONT_COLOR}
                  >
                    TERM LENGTH
                  </OptionLabel>
                  <OptionValue
                    fontSize={28}
                    fontWeight={300}
                    textAlign={'center'}
                    color={colors.MOBILE_HEADER_BG}
                  >
                    {`${selectedQuote.term} Year${
                      selectedQuote.term > 1 ? 's' : ''
                    }`}
                  </OptionValue>
                </Option>
              </SelectedOptions>
            </Quote>
            <CTA
              onClick={this.editQuotes}
              radius={19}
              fontSize={14}
              fontWeight={600}
              color={colors.WHITE}
              bgColor={colors.MOBILE_HEADER_BG}
              padding={'13px 40px'}
            >
              EDIT QUOTE
            </CTA>
          </CardContainer>
        )}
        <CardContainer isVisible={profile === null}>
          <LoginLine />
          <LoginTextStyle
            fontSize={28}
            color={colors.BLACK}
            textAlign={'center'}
            padding={'0'}
          >
            Save your progress
          </LoginTextStyle>
          <LoginLine />
          <LoginContainer>
            <LoginSection isVisible={signUp === false}>
              <FormSection onSubmit={this.customLogin}>
                <FormHeading
                  fontSize={16}
                  color={colors.BLACK}
                  letterSpacing={'5.71'}
                  textAlign={'center'}
                >
                  YOUR LOGIN
                </FormHeading>
                <InputContainer>
                  {Object.keys(fields).map((field, index) => (
                    <LoginLabel
                      key={index}
                      width={
                        field === 'emailAddress' || field === 'password'
                          ? '90%'
                          : '50%'
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
                  bgColor={colors.BUTTONBG}
                  padding={'14px 33px'}
                  margin={'0 auto 20px'}
                >
                  Login
                </LoginCTA>
              </FormSection>
              <MiddleContainer>
                <OrLine />
                <OrText
                  fontFamily={'Source Sans Pro'}
                  fontSize={14}
                  fontWeight={600}
                  textAlign={'center'}
                  color={colors.BUTTONBG}
                >
                  OR
                </OrText>
                <OrLine />
              </MiddleContainer>
              <SignUpCTA
                fontFamily={'Source Sans Pro'}
                fontSize={20}
                fontWeight={600}
                color={colors.WHITE}
                bgColor={colors.BUTTONBG}
                padding={'14px 33px'}
                margin={'auto'}
                onClick={this.showSignUpForm}
              >
                Create an Account
              </SignUpCTA>
            </LoginSection>
            <SignFormContainer isVisible={signUp === true}>
              <ExpressForm CustomLogIn={this.props.login} />
            </SignFormContainer>
          </LoginContainer>
          <Line />
          <ButtonContainer>
            <SocialCTA
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
            </SocialCTA>
            <SocialCTA
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
            </SocialCTA>
            <SocialCTA
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
            </SocialCTA>
          </ButtonContainer>
        </CardContainer>
        <CardContainer isForm>
          <FormContainer>
            <ReviewForm
              profileDetails={profileDetails}
              OnSubmit={this.submit}
            />
          </FormContainer>
        </CardContainer>
      </Container>
    );
  }
}

export default Review;
