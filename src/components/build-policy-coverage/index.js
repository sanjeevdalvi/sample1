import React from 'react';
import { connect } from 'react-redux';
import SelectBox from './select-box';

import {
  Container,
  HeadingContainer,
  HeadingTextStyle,
  Line,
  FormContainer,
  TextStyle1,
  TextStyle2,
  TextStyle3,
  FormLabel,
  FormFieldContainer,
  FormFieldStyle,
  ArrowBack,
  InfoContainer,
  InfoPanel1,
  InfoPanel2,
  ContinueButton,
  PolicyAmountStyle,
  OptionStyle,
} from './styles.js';

import {
  minPolicyAmount,
  maxPolicyAmount,
  deltaPolicyAmount,
  minPolicyTerm,
  maxPolicyTerm,
  deltaPolicyTerm,
  defaultPolicyAmount,
  defaultPolicyTerm,
} from '../../utils/constants';
import { addCommasToNumber, generateNumSeries } from '../../utils/common';

import {
  SetCoverageAmount,
  SetCoverageTerm,
} from '../../reducers/build-policy';

const policyAmountData = generateNumSeries(
  minPolicyAmount,
  maxPolicyAmount,
  deltaPolicyAmount
);
const policyPeriodData = generateNumSeries(
  minPolicyTerm,
  maxPolicyTerm,
  deltaPolicyTerm
);

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Type of Coverage</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

class CoverageFormA extends React.Component {
  componentDidMount() {
    this.props.SetCoverageAmount(600000);
    this.props.SetCoverageTerm(10);
  }
  render() {
    const {
      SetCoverageAmount,
      SetCoverageTerm,
      policyAmount,
      policyTerm,
    } = this.props;
    return (
      <FormContainer>
        <TextStyle1>
          No matter your selection, we’re going to find the best rates for you.{' '}
        </TextStyle1>
        <FormFieldContainer>
          <FormFieldStyle>
            <FormLabel> Coverage </FormLabel>
            <PolicyAmountStyle
              value={policyAmount ? policyAmount : defaultPolicyAmount}
              onChange={() => {
                const ele = document.getElementById('selectAmount');
                const amount = ele.options[ele.selectedIndex].value;
                SetCoverageAmount(amount);
              }}
              id="selectAmount"
              ref={input => {
                this.amountSelect = input;
              }}
            >
              {policyAmountData.map((amount, i) => (
                <OptionStyle value={amount} key={i}>
                  $ {addCommasToNumber(amount)}
                </OptionStyle>
              ))}
            </PolicyAmountStyle>
          </FormFieldStyle>
          <ArrowBack />
          <FormFieldStyle>
            <FormLabel> Term Length </FormLabel>
            <PolicyAmountStyle
              value={policyTerm ? policyTerm : defaultPolicyTerm}
              onChange={() => {
                const ele = document.getElementById('selectTerm');
                const amount = ele.options[ele.selectedIndex].value;
                SetCoverageTerm(amount);
              }}
              id="selectTerm"
            >
              {policyPeriodData.map((period, i) => (
                <OptionStyle value={period} key={i}>
                  {period} years
                </OptionStyle>
              ))}
            </PolicyAmountStyle>
          </FormFieldStyle>
        </FormFieldContainer>
      </FormContainer>
    );
  }
}
const CoverageForm = ({
  SetCoverageAmount,
  SetCoverageTerm,
  policyAmount,
  policyTerm,
}) => (
  <FormContainer>
    <TextStyle1>
      No matter your selection, we’re going to find the best rates for you.{' '}
    </TextStyle1>
    <FormFieldContainer>
      <FormFieldStyle>
        <FormLabel> Coverage </FormLabel>
        <SelectBox
          items={policyAmountData.map((amount, i) => ({
            index: i,
            value: amount,
            text: '$' + addCommasToNumber(amount),
          }))}
          value={policyAmount ? policyAmount : defaultPolicyAmount}
          onChange={value => {
            SetCoverageAmount(value);
          }}
        />
      </FormFieldStyle>
      <ArrowBack />
      <FormFieldStyle>
        <FormLabel> Term Length </FormLabel>
        <SelectBox
          items={policyPeriodData.map((period, i) => ({
            index: i,
            value: period,
            text: period + ' years',
          }))}
          value={policyTerm ? policyTerm : defaultPolicyTerm}
          onChange={value => {
            SetCoverageTerm(value);
          }}
        />
      </FormFieldStyle>
    </FormFieldContainer>
  </FormContainer>
);

const InfoSection = () => (
  <InfoContainer>
    <InfoPanel1>
      <TextStyle2>How do I calculate my Coverage? </TextStyle2>
      <TextStyle3>
        If something happens to you, how many years do you want your loved ones
        to be taken care of? Multiple your annual salary by that number and add
        your current average debt. Make sure to include any student loans,
        mortgages, car payments, or credit card debt. <br />
        <br />If you’re planning on starting a family, buying a home, or going
        back to school in the near future, make sure to take that into account.
        You’ll want to make sure your policy can cover that future increase in
        expenses or debt.<br />
        <br /> Don’t be afraid to overestimate. You’re going to be surprised how
        affordable your financial security really is.<br />
        <br />
        The higher your coverage the higher your premium, so if you’re simply
        concerned with covering your existing debt and any end of life expenses,
        a very low coverage will hardly impact your budget.{' '}
      </TextStyle3>
    </InfoPanel1>
    <InfoPanel2>
      <TextStyle2>How long should my term be? </TextStyle2>
      <TextStyle3>
        {' '}
        The longer the term the higher your rates will be because the insurance
        company is taking a greater risk, but the benefit is that you’ll be
        locked in to that rate for the entire term.<br />
        <br /> If you select a shorter term, when the term is up and you want to
        renew, your rates will increase with your age and any health issues
        you’ve encountered during that initial term. <br />
        <br />If you’re just looking to cover your debt and any end of life
        expenses, make sure that your term doesn’t extend beyond how long it
        will take you to pay off your debt.
      </TextStyle3>
    </InfoPanel2>
  </InfoContainer>
);

const BuildPolicyCoverage = ({
  navigateTo,
  nextStep,
  SetCoverageAmount,
  SetCoverageTerm,
  policyType,
  policyAmount,
  policyTerm,
}) => (
  <Container>
    <Heading />
    <CoverageForm
      SetCoverageAmount={SetCoverageAmount}
      SetCoverageTerm={SetCoverageTerm}
      policyAmount={policyAmount}
      policyTerm={policyTerm}
    />
    <InfoSection />
    <ContinueButton onClick={() => navigateTo(nextStep)}>
      {' '}
      CONTINUE{' '}
    </ContinueButton>
  </Container>
);

const mapDispatchToProps = dispatch => ({
  SetCoverageAmount: amount => dispatch(SetCoverageAmount(amount)),
  SetCoverageTerm: period => dispatch(SetCoverageTerm(period)),
});

const mapsStateToProps = ({
  buildPolicyReducer: { availableQuotes, policyType, policyAmount, policyTerm },
}) => ({ availableQuotes, policyType, policyAmount, policyTerm });

export default connect(mapsStateToProps, mapDispatchToProps)(
  BuildPolicyCoverage
);
