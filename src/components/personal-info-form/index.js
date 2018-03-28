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
  InputLeftContainer,
  InputRightContainer,
  InputGroup,
  RadioGroup,
  RadioLabel,
  Radio,
  Label,
  InputRadio,
  InputCheck,
  Input,
  CTA,
  DisclaimerText,
} from './styles';

const fieldsLeft = {
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
  zipcode: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Zipcode',
    required: true,
  },
  age: {
    type: 'text',
    errorMessage: 'Wrong pattern',
    placeholder: 'Age',
    required: true,
  },
};

const GenderOptions = {
  male: {
    label: 'Male',
    type: 'radio',
  },
  female: {
    label: 'Female',
    type: 'radio',
  },
  na: {
    label: 'Prefer not to answer',
    type: 'radio',
  },
};

const SmokerOptions = {
  Yes: {
    label: 'Yes',
    type: 'radio',
  },
  No: {
    label: 'No',
    type: 'radio',
  },
};

const CitizenOptions = {
  Yes: {
    label: 'Yes',
    type: 'radio',
  },
  No: {
    label: 'No',
    type: 'radio',
  },
};

const LicenseOptions = {
  Yes: {
    label: 'Yes',
    type: 'radio',
  },
  No: {
    label: 'No',
    type: 'radio',
  },
};

const CardioVascularOptions = {
  Yes: {
    label: 'Yes',
    type: 'radio',
  },
  No: {
    label: 'No',
    type: 'radio',
  },
};

const TreatmentOptions = {
  High_Blood_Pressure: {
    label: 'High Blood Pressure',
    type: 'checkbox',
    value: false,
  },
  High_Cholestrol: {
    label: 'High Cholestrol',
    type: 'checkbox',
    value: false,
  },
  Depression: {
    label: 'Depression',
    type: 'checkbox',
    value: false,
  },
  Sleep_Apnea: {
    label: 'Sleep Apnea',
    type: 'checkbox',
    value: false,
  },
  Asthma: {
    label: 'Asthma',
    type: 'checkbox',
    value: false,
  },
  Diabetes: {
    label: 'Diabetes',
    type: 'checkbox',
    value: false,
  },
  Alcohol_Abuse: {
    label: 'Alcohol Abuse',
    type: 'checkbox',
    value: false,
  },
  Drug_Abuse: {
    label: 'Drug Abuse',
    type: 'checkbox',
    value: false,
  },
  None: {
    label: 'None of the Above',
    type: 'checkbox',
    value: false,
  },
};

const markTreatments = (options, treatments) => {
  Object.keys(treatments).forEach(opt => {
    let isPresent = options
      ? options.find(o => o === treatments[opt].label)
      : false;
    if (isPresent) {
      treatments[opt].value = true;
    }
  });
  return treatments;
};

class PersonalInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:
        props.profile && props.profile.given_name
          ? props.profile.given_name
          : props.profileDetails ? props.profileDetails.first_name : '',
      lastName:
        props.profile && props.profile.family_name
          ? props.profile.family_name
          : props.profileDetails ? props.profileDetails.last_name : '',
      zipcode: props.profileDetails ? props.profileDetails.zipcode : '',
      age: props.profileDetails ? props.profileDetails.age : '',
      checkedGender: props.profileDetails ? props.profileDetails.gender : 'na',
      isSmoker: props.profileDetails ? props.profileDetails.is_smoker : 'No',
      treatmentOptions: props.userInfo
        ? markTreatments(props.userInfo.past_treatment, TreatmentOptions)
        : TreatmentOptions,
      hasCardioVascular: props.profileDetails
        ? props.profileDetails.sibling_effect
        : 'No',
      isUSCitizen: props.profileDetails
        ? props.profileDetails.us_citizen
        : 'Yes',
      hasSuspendedLicense: props.profileDetails
        ? props.profileDetails.driving_info
        : 'No',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const newState = {
      firstName:
        nextProps.profile && nextProps.profile.given_name
          ? nextProps.profile.given_name
          : nextProps.profileDetails ? nextProps.profileDetails.first_name : '',
      lastName:
        nextProps.profile && nextProps.profile.family_name
          ? nextProps.profile.family_name
          : nextProps.profileDetails ? nextProps.profileDetails.last_name : '',
      zipcode: nextProps.profileDetails ? nextProps.profileDetails.zipcode : '',
      age: nextProps.profileDetails ? nextProps.profileDetails.age : '',
      checkedGender: nextProps.profileDetails
        ? nextProps.profileDetails.gender
        : 'na',
      isSmoker: nextProps.profileDetails
        ? nextProps.profileDetails.is_smoker
        : 'No',
      treatmentOptions: nextProps.userInfo
        ? markTreatments(nextProps.userInfo.past_treatment, TreatmentOptions)
        : TreatmentOptions,
      hasCardioVascular: nextProps.profileDetails
        ? nextProps.profileDetails.sibling_effect
        : 'No',
      isUSCitizen: nextProps.profileDetails
        ? nextProps.profileDetails.us_citizen
        : 'Yes',
      hasSuspendedLicense: nextProps.profileDetails
        ? nextProps.profileDetails.driving_info
        : 'No',
    };
    this.setState({ ...newState });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleRadioChange(radioName, field) {
    if (radioName === 'treatmentOptions') {
      let { treatmentOptions } = this.state;
      treatmentOptions[field].value = !treatmentOptions[field].value;
      this.setState({ treatmentOptions });
    } else {
      this.setState({ [radioName]: field });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { age, ...formData } = this.state;
    const { profile } = this.props;
    this.props.callback({
      ...formData,
      profileInfo: {
        ...profile,
      },
    });
  }

  render() {
    const {
      checkedGender,
      isSmoker,
      treatmentOptions,
      hasCardioVascular,
      hasSuspendedLicense,
      isUSCitizen,
    } = this.state;
    const { product } = this.props;
    return (
      <Container>
        <FormSection onSubmit={this.handleSubmit}>
          <HeadingContainer>
            <MainHeading
              fontSize={16}
              fontWeight={600}
              textAlign={'left'}
              color={colors.MOBILE_HEADER_BG}
            >
              PERSONAL INFORMATION
            </MainHeading>
          </HeadingContainer>
          <InputContainer>
            <InputLeftContainer
              width={product !== 'perm' ? '50%' : '100%'}
              product={product}
            >
              {Object.keys(fieldsLeft).map((field, index) => (
                <Label
                  key={index}
                  width={
                    field !== 'zipcode' && field !== 'age' ? '305px' : '145px'
                  }
                  productWidth={
                    field !== 'zipcode' && field !== 'age' ? '40%' : '25%'
                  }
                  product={product}
                >
                  <Input
                    name={field}
                    placeholder={fieldsLeft[field].placeholder}
                    type={fieldsLeft[field].type}
                    value={this.state[field]}
                    required={fieldsLeft[field].required}
                    onChange={this.handleChange}
                  />
                </Label>
              ))}
              <br />
              <InputGroup product={product}>
                <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                  Gender
                </SubText>
                <RadioGroup>
                  {Object.keys(GenderOptions).map((field, index) => (
                    <Radio
                      key={index}
                      onClick={() =>
                        this.handleRadioChange('checkedGender', field)
                      }
                    >
                      <InputRadio
                        name={field}
                        id={`${field}`}
                        type={GenderOptions[field].type}
                        checked={field === checkedGender}
                        readOnly
                      />
                      <RadioLabel for={`${field}`}>
                        {GenderOptions[field].label}
                      </RadioLabel>
                    </Radio>
                  ))}
                </RadioGroup>
              </InputGroup>
              <InputGroup product={product}>
                <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                  Have you ever been a smoker?
                </SubText>
                <RadioGroup>
                  {Object.keys(SmokerOptions).map((field, index) => {
                    return (
                      <Radio
                        key={index}
                        onClick={() =>
                          this.handleRadioChange('isSmoker', field)
                        }
                      >
                        <InputCheck
                          name={`${field}IsSmoker`}
                          id={`${field}IsSmoker`}
                          type={SmokerOptions[field].type}
                          checked={field === isSmoker}
                          readOnly
                        />
                        <RadioLabel for={`${field}IsSmoker`}>
                          {SmokerOptions[field].label}
                        </RadioLabel>
                      </Radio>
                    );
                  })}
                </RadioGroup>
              </InputGroup>
              {product !== 'perm' && (
                <InputGroup>
                  <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                    Have you ever been treated for any of the following:
                  </SubText>
                  <RadioGroup>
                    {Object.keys(treatmentOptions).map((field, index) => (
                      <Radio
                        key={index}
                        onClick={() =>
                          this.handleRadioChange('treatmentOptions', field)
                        }
                      >
                        <InputCheck
                          name={field}
                          id={`${field}`}
                          type={treatmentOptions[field].type}
                          checked={treatmentOptions[field].value}
                          readOnly
                        />
                        <RadioLabel for={field}>
                          {treatmentOptions[field].label}
                        </RadioLabel>
                      </Radio>
                    ))}
                  </RadioGroup>
                </InputGroup>
              )}
            </InputLeftContainer>
            {product !== 'perm' && (
              <InputRightContainer>
                <InputGroup>
                  <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                    Do you have any parents or siblings who contracted
                    cardiovascular disease (heart attakes or Strokes), Cancer,
                    Diabetes, or Kidney Disease before the age of 70?
                  </SubText>
                  <RadioGroup>
                    {Object.keys(CardioVascularOptions).map((field, index) => {
                      return (
                        <Radio
                          key={index}
                          onClick={() =>
                            this.handleRadioChange('hasCardioVascular', field)
                          }
                        >
                          <InputCheck
                            name={`${field}HasCardioVascular`}
                            id={`${field}HasCardioVascular`}
                            type={CardioVascularOptions[field].type}
                            checked={field === hasCardioVascular}
                            readOnly
                          />
                          <RadioLabel for={`${field}HasCardioVascular`}>
                            {CardioVascularOptions[field].label}
                          </RadioLabel>
                        </Radio>
                      );
                    })}
                  </RadioGroup>
                </InputGroup>
                <InputGroup>
                  <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                    Have you ever had your license suspended or revoked, or had
                    more than one ticket or accident in the last 5 years?
                  </SubText>
                  <RadioGroup>
                    {Object.keys(LicenseOptions).map((field, index) => {
                      return (
                        <Radio
                          key={index}
                          onClick={() =>
                            this.handleRadioChange('hasSuspendedLicense', field)
                          }
                        >
                          <InputCheck
                            name={`${field}HasSuspendedLicense`}
                            id={`${field}HasSuspendedLicense`}
                            type={LicenseOptions[field].type}
                            checked={field === hasSuspendedLicense}
                            readOnly
                          />
                          <RadioLabel for={`${field}HasSuspendedLicense`}>
                            {LicenseOptions[field].label}
                          </RadioLabel>
                        </Radio>
                      );
                    })}
                  </RadioGroup>
                </InputGroup>
                <InputGroup>
                  <SubText fontSize={16} color={colors.SECTION_TEXT_1}>
                    Are you currently a United States citizen or a permanent
                    resident of the United States?
                  </SubText>
                  <RadioGroup>
                    {Object.keys(CitizenOptions).map((field, index) => {
                      return (
                        <Radio
                          key={index}
                          onClick={() =>
                            this.handleRadioChange('isUSCitizen', field)
                          }
                        >
                          <InputCheck
                            name={`${field}IsUSCitizen`}
                            id={`${field}IsUSCitizen`}
                            type={CitizenOptions[field].type}
                            checked={field === isUSCitizen}
                            readOnly
                          />
                          <RadioLabel for={`${field}IsUSCitizen`}>
                            {CitizenOptions[field].label}
                          </RadioLabel>
                        </Radio>
                      );
                    })}
                  </RadioGroup>
                </InputGroup>
              </InputRightContainer>
            )}
          </InputContainer>
          <DisclaimerCTAContainer isPerm={product === 'perm'}>
            {product === 'perm' && (
              <DisclaimerText>
                We’re ready to find the best insurance policy for you.
              </DisclaimerText>
            )}
            <CTA
              fontSize={18}
              fontWeight={600}
              color={colors.WHITE}
              bgColor={colors.BUTTON_FONT_COLOR}
              padding={'10px 47px'}
            >
              CONTINUE
            </CTA>
          </DisclaimerCTAContainer>
        </FormSection>
      </Container>
    );
  }
}

export default PersonalInfoForm;
