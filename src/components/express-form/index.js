import React, { Component } from 'react';
import colors from '../../utils/colors';
import { AUTH_CONFIG } from '../../auth/constants';
import {
  Container,
  HeadingContainer,
  MainHeading,
  SubHeading,
  SubText,
  DisclaimerCTAContainer,
  FormSection,
  InputContainer,
  Label,
  Input,
  CTA,
} from './styles';

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

class ExpressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async handleSubmit(event) {
    const { firstName, lastName, emailAddress, password } = this.state;
    event.preventDefault();
    let payload = {
      connection: 'Username-Password-Authentication',
      client_id: AUTH_CONFIG.clientId,
      email: emailAddress,
      password,
      scope: 'openid',
      responseType: 'id_token',
      user_metadata: { firstName, lastName },
    };
    this.props.CustomLogIn(payload);
  }

  render() {
    return (
      <Container>
        <FormSection onSubmit={this.handleSubmit}>
          <HeadingContainer>
            <MainHeading
              fontSize={24}
              fontWeight={600}
              textAlign={'left'}
              color={colors.MOBILE_HEADER_BG}
            >
              Express Form{' '}
            </MainHeading>
            <SubHeading
              fontSize={14}
              fontWeight={600}
              textAlign={'left'}
              color={colors.MOBILE_HEADER_BG}
            >
              (Quick and easy)
            </SubHeading>
          </HeadingContainer>
          <SubText fontSize={14} color={colors.SECTION_TEXT_1}>
            Give us just a little information and we’ll pull in all the
            information needed to complete your quote for you.
          </SubText>
          <InputContainer>
            {Object.keys(fields).map((field, index) => (
              <Label
                key={index}
                width={
                  field === 'emailAddress' || field === 'password'
                    ? '100%'
                    : '50%'
                }
              >
                <Input
                  name={field}
                  marginRight={field === 'firstName' ? '12px' : '0px'}
                  marginLeft={field === 'lastName' ? '12px' : '0px'}
                  placeholder={fields[field].placeholder}
                  type={fields[field].type}
                  value={this.state[field]}
                  required={fields[field].required}
                  onChange={this.handleChange}
                />
              </Label>
            ))}
          </InputContainer>
          <DisclaimerCTAContainer>
            <SubText
              width={'calc(100% - 115px)'}
              fontSize={12}
              color={colors.SECTION_TEXT_1}
            >
              By clicking this button I submit to allow Meply to pull my
              personal and medical information from available databases.
            </SubText>
            <CTA
              fontFamily={'Source Sans Pro'}
              fontSize={20}
              fontWeight={600}
              color={colors.WHITE}
              bgColor={colors.BUTTON_FONT_COLOR}
              padding={'14px 33px'}
            >
              Go!
            </CTA>
          </DisclaimerCTAContainer>
        </FormSection>
      </Container>
    );
  }
}

export default ExpressForm;
