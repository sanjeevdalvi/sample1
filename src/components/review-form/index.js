import React, { Component } from 'react';
import colors from '../../utils/colors';
import {
  Container,
  HeadingContainer,
  MainHeading,
  SubText,
  DisclaimerCTAContainer,
  FormSection,
  InputContainer,
  Disclaimer1,
  Disclaimer2,
  Disclaimer3,
  Disclaimer4,
  InputGroup,
  Label,
  Input,
  CTA,
} from './styles';

const fields = {
  phoneNumber: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Phone Number',
    label: 'What’s the Best Phone Number to Reach you At?',
    required: true,
  },
  // password: {
  //   type: 'password',
  //   errorMessage: 'Wrong pattern',
  //   placeholder: 'Password',
  //   label: 'Create Acount',
  //   required: true,
  // },
  address: {
    label: 'Address',
    fields: {
      line1: {
        type: 'text',
        errorMessage: 'Wrong pattern',
        placeholder: 'Address 1',
        required: true,
      },
      line2: {
        type: 'text',
        errorMessage: 'Wrong pattern',
        placeholder: 'Address 2',
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
    },
  },
  countryOfBirth: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Country',
    label: 'Country of Birth',
    required: true,
  },
  individualIncome: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Annual Income',
    label: 'Individual Income',
    required: true,
  },
};

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    const { profileDetails } = props;
    this.state = {
      phoneNumber:
        profileDetails &&
        profileDetails.userInfo &&
        profileDetails.userInfo.phone
          ? profileDetails.userInfo.phone
          : '',
      password: '',
      address: {
        line1:
          profileDetails &&
          profileDetails.userInfo &&
          profileDetails.userInfo.address1
            ? profileDetails.userInfo.address1
            : '',
        line2:
          profileDetails &&
          profileDetails.userInfo &&
          profileDetails.userInfo.address2
            ? profileDetails.userInfo.address2
            : '',
        city:
          profileDetails &&
          profileDetails.userInfo &&
          profileDetails.userInfo.city
            ? profileDetails.userInfo.city
            : '',
        state:
          profileDetails &&
          profileDetails.userInfo &&
          profileDetails.userInfo.state
            ? profileDetails.userInfo.state
            : '',
        zipcode:
          profileDetails &&
          profileDetails.userInfo &&
          profileDetails.userInfo.zipcode
            ? profileDetails.userInfo.zipcode
            : '',
      },
      countryOfBirth:
        profileDetails &&
        profileDetails.userInfo &&
        profileDetails.userInfo.country
          ? profileDetails.userInfo.country
          : '',
      individualIncome:
        profileDetails &&
        profileDetails.userInfo &&
        profileDetails.userInfo.income
          ? profileDetails.userInfo.income
          : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleAddressChange(event) {
    let { address } = this.state;
    address[event.target.name] = event.target.value;
    this.setState({ address });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const payload = this.state;
    this.props.OnSubmit(payload);
  }

  render() {
    return (
      <Container>
        <FormSection onSubmit={this.handleSubmit}>
          <HeadingContainer>
            <MainHeading
              fontSize={20}
              fontWeight={600}
              textAlign={'left'}
              color={colors.MOBILE_HEADER_BG}
              lineHeight={1.5}
            >
              SUBMIT YOUR APPLICATION
            </MainHeading>
          </HeadingContainer>
          <InputContainer>
            {Object.keys(fields).map((field, index) => (
              <InputGroup
                key={index}
                bgColor={field === 'password' ? true : false}
              >
                <SubText
                  fontSize={16}
                  color={
                    field === 'password'
                      ? colors.MOBILE_HEADER_BG
                      : colors.FONT_COLOR_4
                  }
                >
                  {fields[field].label}
                </SubText>
                {field !== 'address' && (
                  <Input
                    name={field}
                    width={field === 'phoneNumber' ? '50%' : '100%'}
                    placeholder={fields[field].placeholder}
                    type={fields[field].type}
                    value={this.state[field]}
                    required={fields[field].required}
                    onChange={this.handleChange}
                  />
                )}
                {field === 'address' && (
                  <Label>
                    {Object.keys(fields[field].fields).map((subfield, i) => (
                      <Input
                        key={`${index}_${i}`}
                        name={subfield}
                        width={
                          subfield === 'zipcode' || subfield === 'state'
                            ? 'calc(50% - 10px)'
                            : '100%'
                        }
                        placeholder={fields[field].fields[subfield].placeholder}
                        type={fields[field].fields[subfield].type}
                        value={this.state[field][subfield]}
                        required={fields[field].fields[subfield].required}
                        onChange={this.handleAddressChange}
                      />
                    ))}
                  </Label>
                )}
              </InputGroup>
            ))}
          </InputContainer>
          <DisclaimerCTAContainer>
            <Disclaimer1
              fontSize={24}
              fontWeight={400}
              textAlign={'center'}
              color={colors.MOBILE_HEADER_BG}
              lineHeight={1.5}
            >
              You almost have your policy!
            </Disclaimer1>
            <Disclaimer2
              fontSize={16}
              fontWeight={400}
              textAlign={'center'}
              color={colors.FONT_COLOR_4}
              lineHeight={1.5}
              width={'70%'}
            >
              Once you hit submit, our underwriters will start reviewing your
              application and you’ll get your policy completed in the next few
              business hours.
            </Disclaimer2>
            <CTA
              fontSize={24}
              fontWeight={600}
              color={colors.WHITE}
              bgColor={colors.BUTTON_FONT_COLOR}
              padding={'10px 40px'}
            >
              SUBMIT APPLICATION
            </CTA>
            <Disclaimer3
              fontSize={18}
              fontWeight={400}
              textAlign={'center'}
              color={colors.GRAY2}
              lineHeight={1.5}
              width={'70%'}
            >
              Some fun to read fine print that we’re sure you’ll enjoy.
            </Disclaimer3>
            <Disclaimer4
              fontSize={12}
              fontWeight={400}
              textAlign={'justify'}
              color={colors.GRAY2}
              lineHeight={1.5}
              width={'80%'}
            >
              By clicking this button, you are submitting a life insurance
              application. You acknowledge that this will require a phone call
              from a Meply advisor to verify your identity and may require a
              free medical exam as part of the insurance company's application
              requirements.
              <br />
              <br />
              By submitting your application, you understand and agree that this
              call may be placed using an autodialer even if the number you
              provide is on a do not call list and that your consent to receive
              such call is not required to purchase a policy.
            </Disclaimer4>
          </DisclaimerCTAContainer>
        </FormSection>
      </Container>
    );
  }
}

export default ReviewForm;
