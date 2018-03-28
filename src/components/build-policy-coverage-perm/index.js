import React from 'react';
import { connect } from 'react-redux';
import GetRewarded from './get-rewarded';
import InsPolicyTypes from './ins-policy-types';
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
  InfoContainer,
  InfoPanel1,
  InfoPanel2,
  ContinueButton,
} from './styles.js';
import { SetCoverageAmount } from '../../reducers/build-policy';

import {
  minPolicyAmount,
  maxPolicyAmount,
  deltaPolicyAmount,
  defaultPolicyAmount,
} from '../../utils/constants';
import { addCommasToNumber, generateNumSeries } from '../../utils/common';

const policyAmountData = generateNumSeries(
  minPolicyAmount,
  maxPolicyAmount,
  deltaPolicyAmount
);

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Select Coverage</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

const CoverageForm = ({
  navigateTo,
  nextStep,
  SetCoverageAmount,
  policyAmount,
  policyTerm,
}) => (
  <FormContainer>
    <TextStyle1>
      No matter your selection, we’re going to find the best rates for you.{' '}
    </TextStyle1>
    <FormFieldContainer>
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
      <ContinueButton onClick={() => navigateTo(nextStep)}>
        CONTINUE
      </ContinueButton>
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
      <TextStyle2>Looking for an easier way to get started? </TextStyle2>
      <TextStyle3>
        We know that sometimes Permanent Life Insurance can seem a bit
        overwhelming. There are a lot of choices and you may have to wait for
        the results from free screenings or medical exams before you get your
        policy. <br />
        <br />
        We recommend that most people start off with a Term Life Insurance
        policy because you can apply and get approved today with out any of the
        hassle. Then, once you’re covered you can take your time working with
        your carrier to convert your policy into a permanent one.
      </TextStyle3>
    </InfoPanel2>
  </InfoContainer>
);

const BuildPolicyCoverage = ({
  navigateTo,
  nextStep,
  SetCoverageAmount,
  availableQuotes,
  policyType,
  policyAmount,
  policyTerm,
}) => (
  <Container>
    <GetRewarded />
    <Heading />
    <CoverageForm
      navigateTo={navigateTo}
      nextStep={nextStep}
      SetCoverageAmount={SetCoverageAmount}
      policyAmount={policyAmount}
      policyTerm={policyTerm}
    />
    <InfoSection />
    <InsPolicyTypes navigateTo={navigateTo} nextStep={nextStep} />
  </Container>
);

const mapDispatchToProps = dispatch => ({
  SetCoverageAmount: amount => dispatch(SetCoverageAmount(amount)),
});

const mapsStateToProps = ({
  buildPolicyReducer: { availableQuotes, policyType, policyAmount, policyTerm },
}) => ({ availableQuotes, policyType, policyAmount, policyTerm });

export default connect(mapsStateToProps, mapDispatchToProps)(
  BuildPolicyCoverage
);
