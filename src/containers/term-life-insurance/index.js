import React from 'react';
import { Container } from './styles';
import colors from '../../utils/colors';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import StyledText from '../../utils/text.js';
import Hero from '../../components/hero';
import images from '../../utils/images.js';
import InsuranceNavigation from '../../components/insurance-navigation';
import StartInvesting from '../../components/start-investing';
import GetPolicy from '../../components/get-policy';
import LifeInsurance from '../../components/life-insurance';

import ContactUs from '../../components/contact-us';
import HomeApplyOnline from '../../components/home-apply-online';

import PremiumInsCarriers from '../../containers/premium-insurance-carriers';
import OtherInsCarriers from '../../containers/other-insurance-carriers';

const details = [
  {
    heading: 'Flexible Coverage',
    subHeading: 'As you life changes, your policy can too.',
    description:
      'Life insurance isn’t just for major life milestones. When you begin coverage, you can have the peace of mind to know that your coverage can grow with you – to help you meet new goals, or cover an additional family member.',
  },
  {
    heading: 'Financial Planning',
    subHeading: 'Take advantage of your policy earlier than you think.',
    description:
      'Looking to secure a loan for a new car, or do you need the capital to support the purchase of your first family home? How about clearing out student loan debt? You have the power to borrow against a permanent life insurance policy. The possibilities may surprise you.',
  },
  {
    heading: 'Easy to Start',
    subHeading: 'Once you’re in, you’re in.',
    description:
      'After going through the application process, you’re in full control of the future if your policy. Changes to your life or health cannot take away your coverage. The future of you and your family should – and will – be in your hands.',
  },
  {
    heading: 'Start Your Legacy',
    subHeading: 'Know that your loved ones are provided for.',
    description:
      'The future is uncertain, and the time to prepare for it is today. With a great life insurance policy, you can rest easy knowing that your family will be taken care of. Allow yourself the gift of time with your family now, when it means the most.',
  },
];

const header =
  'Life Insurance isn’t about the worst case scenario, it’s about building your best case scenario.';
const footer =
  'Acquire a policy worth up to $300,000 with little to no screening. Select from the top trusted companies in the industry.';

const contactPagePara = props => (
  <StyledText
    fontSize="14"
    color={colors.WHITE}
    textAlign="left"
    marginLeft="65"
    marginTop="46"
  >
    Nothing is worse than being hard-sold on an insurance plan you don’t
    understand. With MePly, you can get a quote without having to talk to a
    salesperson; but, if you have questions about your coverage options, a
    friendly and knowledgeable service team is available every step of the way.<br
    />
    No upsells on options you don’t understand – just fair, unbiased advice to
    help you make the best choice possible.
  </StyledText>
);
const smallBusinessPara = props => (
  <StyledText
    fontSize="14"
    color={colors.WHITE}
    textAlign="left"
    marginLeft="65px"
    marginTop="46px"
  >
    Learn how you can offer your employees benefits that inspire loyalty.
  </StyledText>
);

class TermLifeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(route) {
    if (route.length) {
      this.props.navigateTo(route);
    }
  }

  render() {
    const { match } = this.props;
    const path = match.path.split('/')[1];
    return (
      <Container>
        <Hero
          background={images.TermLifeBackground}
          heading="It’s time you join the club"
          heading1FontSize="48"
          ctaPrimary="Apply in just 5 minutes and get your policy today!"
          top="40px"
          left="50vw"
          width="145px"
          height="156px"
          heading1MarginLeft="13vw"
          ctaPrimaryColor={colors.WHITE}
          navigateTo={this.navigateTo}
          onNavigate={() =>
            this.navigateTo('/term-life-insurance/build-policy')
          }
        />
        <InsuranceNavigation navCallback={this.navigateTo} hiddenRoute={path} />
        <StartInvesting
          heading1="Life insurance costs less than you think."
          heading2="Rates start as low as $15/month."
          heading3="Think about it. That’s just:"
        />
        <GetPolicy
          onNavigate={() =>
            this.navigateTo('/term-life-insurance/build-policy')
          }
        />
        <LifeInsurance
          bgImage={images.lifeInsuranceBackgroundImage}
          details={details}
          header={header}
          footer={footer}
        />
        <PremiumInsCarriers />
        <ContactUs
          background={images.CONTACTUSBG}
          heading="Help when you need it… "
          heading2="not when you don’t."
          para={contactPagePara}
        />
        <ContactUs
          background={images.smallBusinessBackground}
          heading="Small Business Owner?"
          para={smallBusinessPara}
          imageFirst="0"
        />
        <HomeApplyOnline
          BoxText="Nobody else can get you a great policy as fast as we can."
          boxTextFontSize={24}
          boxTextAlign="center"
          onNavigate={() =>
            this.navigateTo('/term-life-insurance/build-policy')
          }
        />
        <OtherInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(TermLifeContainer);
