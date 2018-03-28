import React from 'react';
import {
  Container,
  HeaderConatiner,
  HeadingLine,
  HeadingText,
  ProductContainer,
  InputGroup,
  SubText,
  RadioGroup,
  Radio,
  InputCheck,
  RadioLabel,
  DisclaimerCTAContainer,
  DisclaimerText,
  CTA,
} from './styles';
import colors from '../../utils/colors';

const insuranceOptions = {
  Life_Insurance: {
    label: 'Life Insurance',
    type: 'checkbox',
    value: false,
  },
  Medical_Supplemental: {
    label: 'Medical Supplemental',
    type: 'checkbox',
    value: false,
  },
  Home_Owners: {
    label: 'Home Owners',
    type: 'checkbox',
    value: false,
  },
  Final_Expense: {
    label: 'Final Expense',
    type: 'checkbox',
    value: false,
  },
  Auto: {
    label: 'Auto',
    type: 'checkbox',
    value: false,
  },
  Renters: {
    label: 'Renters',
    type: 'checkbox',
    value: false,
  },
};

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      insuranceOptions: insuranceOptions,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }

  handleRadioChange(radioName, field) {
    let { insuranceOptions } = this.state;
    insuranceOptions[field].value = !insuranceOptions[field].value;
    this.setState({ insuranceOptions });
  }

  handleSubmit() {
    const formData = this.state;
    this.props.callback({
      ...formData,
    });
  }
  render() {
    return (
      <Container>
        <HeaderConatiner>
          <HeadingLine />
          <HeadingText>My Profile</HeadingText>
          <HeadingLine />
        </HeaderConatiner>
        <ProductContainer>
          <InputGroup>
            <SubText fontSize={16} color={colors.BLACK}>
              Insurance I'm Interested In
            </SubText>
            <RadioGroup>
              {Object.keys(insuranceOptions).map((field, index) => (
                <Radio
                  key={index}
                  onClick={() =>
                    this.handleRadioChange('insuranceOptions', field)
                  }
                >
                  <InputCheck
                    name={field}
                    id={`${field}`}
                    type={insuranceOptions[field].type}
                    checked={insuranceOptions[field].value}
                    readOnly
                  />
                  <RadioLabel for={field}>
                    {insuranceOptions[field].label}
                  </RadioLabel>
                </Radio>
              ))}
            </RadioGroup>
          </InputGroup>
          <DisclaimerCTAContainer>
            <CTA
              fontSize={18}
              fontWeight={600}
              color={colors.WHITE}
              bgColor={colors.BUTTON_FONT_COLOR}
              padding={'10px 27px'}
              onClick={this.handleSubmit}
            >
              Take the Insurance Survey
            </CTA>
            <DisclaimerText>
              Let us help indentify what insurance you should invetigate based
              on where you are in your life.
            </DisclaimerText>
          </DisclaimerCTAContainer>
        </ProductContainer>
      </Container>
    );
  }
}

export default MyProfile;
