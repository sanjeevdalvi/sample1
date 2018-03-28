import React, { Component } from 'react';
import windowDimensions from 'react-window-dimensions';

import './slider.css';
import './radio.css';
import PolicySlider from './policy-slider.js';

import {
  minPolicyAmount,
  maxPolicyAmount,
  deltaPolicyAmount,
  defaultPolicyAmount,
} from '../../utils/constants';
import { addCommasToNumber } from '../../utils/common';

import {
  TextStyle1,
  TextStyle2,
  TextStyle3,
  TextStyle4,
  TextStyle5,
  TextStyleData,
  SliderContainer,
  Button1,
  Button1Text,
  RadioField,
  Radio,
  FieldContainer,
  FieldLabel,
  SideContainer,
} from './styles.js';
import colors from '../../utils/colors';

class PermSidePanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      policyAmount: props.policyAmount
        ? props.policyAmount
        : defaultPolicyAmount,
    };
    this.onPolicyAmountChange = this.onPolicyAmountChange.bind(this);
  }

  onPolicyAmountChange(newAmount) {
    this.props.SetCoverageAmount(newAmount);
    this.setState({ policyAmount: newAmount });
  }

  handleRadioChange(radioName, field) {
    this.setState({ [radioName]: field });
  }

  render() {
    const { navigateTo, product, width } = this.props;
    return (
      <SideContainer>
        <TextStyle1>Your policy </TextStyle1>
        <TextStyle2>And see price change on right</TextStyle2>
        {width >= 600 ? (
          <FieldContainer>
            <TextStyle3 color={colors.BUTTON_FONT_COLOR}>COVERAGE</TextStyle3>
            <SliderContainer>
              <div className="slider">
                <PolicySlider
                  value={this.state.policyAmount}
                  min={minPolicyAmount}
                  max={maxPolicyAmount}
                  step={deltaPolicyAmount}
                  onChange={this.onPolicyAmountChange}
                />
              </div>
            </SliderContainer>
            <TextStyleData color={colors.MOBILE_HEADER_BG} noSpacing={true}>
              ${addCommasToNumber(this.state.policyAmount)}
            </TextStyleData>
          </FieldContainer>
        ) : (
          <div>
            <FieldLabel>
              <TextStyle3 color={colors.BUTTON_FONT_COLOR}>COVERAGE</TextStyle3>
            </FieldLabel>
            <FieldContainer marginTop="10px">
              <SliderContainer>
                <div className="slider">
                  <PolicySlider
                    value={this.state.policyAmount}
                    min={minPolicyAmount}
                    max={maxPolicyAmount}
                    step={deltaPolicyAmount}
                    onChange={this.onPolicyAmountChange}
                  />
                </div>
              </SliderContainer>
              <TextStyleData color={colors.MOBILE_HEADER_BG} noSpacing={true}>
                ${addCommasToNumber(this.state.policyAmount)}
              </TextStyleData>
            </FieldContainer>
          </div>
        )}

        <FieldContainer>
          <TextStyle4>SELECT PAYMENT OPTION</TextStyle4>
          <RadioField marginLeft="9px">
            <Radio type="radio" name="payment" width="20px" height="20px" />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
              Monthly Payment
            </TextStyle2>
          </RadioField>
          <RadioField>
            <Radio type="radio" name="payment" />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
              Annual Payment
            </TextStyle2>
          </RadioField>
        </FieldContainer>
        <TextStyle5> TYPE OF POLICY </TextStyle5>

        <RadioField>
          <Radio type="radio" name="insurance" width="20px" height="20px" />
          <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
            Whole Life Insurance
          </TextStyle2>
        </RadioField>
        <RadioField marginLeft="24px">
          <Radio type="radio" name="insurance" width="20px" height="20px" />
          <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
            Universal Life Insurance
          </TextStyle2>
        </RadioField>
        <RadioField marginLeft="-14px">
          <Radio type="radio" name="insurance" width="20px" height="20px" />
          <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
            Index Universal Life
          </TextStyle2>
        </RadioField>
        <RadioField marginLeft="12px">
          <Radio type="radio" name="insurance" width="20px" height="20px" />
          <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
            Variable Universal Life
          </TextStyle2>
        </RadioField>
        <Button1
          onClick={() => navigateTo('/type-of-term-life/' + product + '/info')}
        >
          <Button1Text>Edit Personal Information </Button1Text>
        </Button1>
      </SideContainer>
    );
  }
}

export default windowDimensions()(PermSidePanel);
