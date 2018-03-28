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
  minPolicyTerm,
  maxPolicyTerm,
  deltaPolicyTerm,
  defaultPolicyTerm,
} from '../../utils/constants';
import { addCommasToNumber } from '../../utils/common';

import {
  SideContainer,
  TextStyle1,
  TextStyle2,
  TextStyle3,
  TextStyle4,
  TextStyle5,
  FieldLabel,
  SliderContainer,
  Button1,
  Button1Text,
  RadioField,
  Radio,
  FieldContainer,
  TextStyleData,
} from './styles.js';
import colors from '../../utils/colors';

class TermSidePanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      plan: 'monthly',
      isROP: false,
      policyAmount: props.policyAmount
        ? props.policyAmount
        : defaultPolicyAmount,
      policyTerm: props.policyTerm ? props.policyTerm : defaultPolicyTerm,
    };
    this.onPolicyAmountChange = this.onPolicyAmountChange.bind(this);
    this.onPolicyTermChange = this.onPolicyTermChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  addCommas(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
  }
  onPolicyAmountChange(newAmount) {
    this.props.SetCoverageAmount(newAmount);
    this.setState({ policyAmount: newAmount });
  }
  onPolicyTermChange(newTerm) {
    this.props.SetCoverageTerm(newTerm);
    this.setState({ policyTerm: newTerm });
  }

  handleRadioChange(radioName, fieldValue) {
    this.setState({ [radioName]: fieldValue });
    this.props.SetFilters({ radioName, fieldValue });
  }

  render() {
    const { navigateTo, product, width } = this.props;
    return (
      <SideContainer>
        <TextStyle1>Adjust your policy </TextStyle1>
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
            <TextStyle3 color={colors.MOBILE_HEADER_BG} noSpacing={true}>
              ${addCommasToNumber(this.state.policyAmount)}
            </TextStyle3>
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
              <TextStyle3 color={colors.MOBILE_HEADER_BG} noSpacing={true}>
                ${addCommasToNumber(this.state.policyAmount)}
              </TextStyle3>
            </FieldContainer>
          </div>
        )}

        {product === 'term' && width >= 600 ? (
          <FieldContainer>
            <TextStyle3 color={colors.BUTTON_FONT_COLOR}>
              TERM LENGTH
            </TextStyle3>
            <SliderContainer>
              <div className="slider">
                <PolicySlider
                  value={this.state.policyTerm}
                  min={minPolicyTerm}
                  max={maxPolicyTerm}
                  step={deltaPolicyTerm}
                  onChange={this.onPolicyTermChange}
                />
              </div>
            </SliderContainer>
            <TextStyle3 color={colors.MOBILE_HEADER_BG} noSpacing={true}>
              {this.state.policyTerm} years
            </TextStyle3>
          </FieldContainer>
        ) : product === 'term' ? (
          <div>
            <FieldLabel>
              <TextStyle3 color={colors.BUTTON_FONT_COLOR}>
                TERM LENGTH
              </TextStyle3>
            </FieldLabel>
            <FieldContainer marginTop="10px">
              <SliderContainer>
                <div className="slider">
                  <PolicySlider
                    value={this.state.policyTerm}
                    min={minPolicyTerm}
                    max={maxPolicyTerm}
                    step={deltaPolicyTerm}
                    onChange={this.onPolicyTermChange}
                  />
                </div>
              </SliderContainer>
              <TextStyle3 color={colors.MOBILE_HEADER_BG} noSpacing={true}>
                {this.state.policyTerm} years
              </TextStyle3>
            </FieldContainer>
          </div>
        ) : null}
        <FieldContainer>
          <TextStyle4>SELECT PAYMENT OPTION</TextStyle4>
          <RadioField marginLeft="9px">
            <Radio
              type="radio"
              name="payment"
              width="20px"
              checked={this.state.plan === 'monthly'}
              height="20px"
              readOnly
              onClick={() => this.handleRadioChange('plan', 'monthly')}
            />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
              Monthly Payment
            </TextStyle2>
          </RadioField>
          <RadioField>
            <Radio
              type="radio"
              name="payment"
              checked={this.state.plan === 'annual'}
              readOnly
              onClick={() => this.handleRadioChange('plan', 'annual')}
            />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="center">
              Annual Payment
            </TextStyle2>
          </RadioField>
        </FieldContainer>
        {product === 'term' && <TextStyle5> TYPE OF POLICY </TextStyle5>}

        {product === 'term' && (
          <RadioField marginLeft="20%" justifyContent="flex-start">
            <Radio
              type="radio"
              name="insurance"
              width="20px"
              height="20px"
              checked={this.state.isROP === false}
              readOnly
              onClick={() => this.handleRadioChange('isROP', false)}
            />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="left">
              Level Term
            </TextStyle2>
          </RadioField>
        )}
        {product === 'term' && (
          <RadioField marginLeft="20%" justifyContent="flex-start">
            <Radio
              type="radio"
              name="insurance"
              width="20px"
              height="20px"
              checked={this.state.isROP === true}
              readOnly
              onClick={() => this.handleRadioChange('isROP', true)}
            />
            <TextStyle2 fontSize={16} lineHeight={1.38} textAlign="left">
              Level Term with Return of Premium
            </TextStyle2>
          </RadioField>
        )}
        <Button1
          onClick={() => navigateTo('/type-of-term-life/' + product + '/info')}
        >
          <Button1Text>Edit Personal Information </Button1Text>
        </Button1>
      </SideContainer>
    );
  }
}

export default windowDimensions()(TermSidePanel);
