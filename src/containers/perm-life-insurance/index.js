import React, { Component } from 'react';
import { Container, PolicyText } from './styles';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import HomeApplyOnline from '../../components/home-apply-online';
import PremiumInsCarriers from '../../containers/premium-insurance-carriers';
import Hero from '../../components/hero';
import InsuranceNavigation from '../../components/insurance-navigation';
import OtherInsCarriers from '../../containers/other-insurance-carriers';
import Images from '../../utils/images';
import colors from '../../utils/colors';
import ContactUs from '../../components/contact-us';
import StyledText from '../../utils/text.js';
import StartInvesting from '../../components/start-investing';
import GetPolicy from '../../components/get-policy';
import LifeInsurance from '../../components/life-insurance';

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
    It’s our goal to help you feel educated and comfortable with the options in
    front of you. Our team of fully licensed advisors is available if you need
    it to answer your questions. You don’t have to worry about pushy a pushy
    salesperson, we’re just here to help.
    <br /> <br />
    No Upsells on options you don’t understand – just fair, unbiased advice to
    help you make the best choice possible.
  </StyledText>
);

const getPolicyCTAText = (
  <PolicyText
    fontSize={24}
    lineHeight={1.25}
    fontWeight={600}
    textAlign={'center'}
    color={colors.WHITE}
  >
    It’s time you start investing in yourself.{' '}
    <PolicyText
      fontSize={24}
      lineHeight={1.25}
      fontWeight={600}
      textAlign={'center'}
      color={colors.BUTTON_FONT_COLOR}
    >
      Apply Today!
    </PolicyText>
  </PolicyText>
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

class PermLifeContainer extends Component {
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
    return (
      <Container>
        <Hero
          background={Images.PERMHEROBG}
          heading="A Permanent Policy is the Strongest Foundation of Your Life"
          ctaPrimary="Experience the benefits of your investment "
          ctaPrimaryColor={colors.WHITE}
          ctaSecondary="by applying today!"
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
          ctaSecondaryMobile={colors.WHITE}
          left={'10.66vw'}
          paddingTop={'85px'}
          textAlign={'left'}
          ctaMarginBottom={'30px'}
          onNavigate={() =>
            this.navigateTo('/perm-life-insurance/build-policy')
          }
        />
        <InsuranceNavigation navCallback={this.navigateTo} />
        <StartInvesting
          heading1="Just a little investment each month can start working for you today."
          heading2="Rates start as low as $15/month."
          heading3="Think about it. That’s just:"
        />
        <GetPolicy
          header={getPolicyCTAText}
          onNavigate={() =>
            this.navigateTo('/perm-life-insurance/build-policy')
          }
        />
        <LifeInsurance
          bgImage={Images.lifeInsuranceBackgroundImage}
          details={details}
          header={header}
          footer={footer}
        />
        <PremiumInsCarriers />
        <ContactUs
          background={Images.CONTACTUSBG}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <ContactUs
          background={Images.smallBusinessBackground}
          heading="Small Business Owner?"
          para={smallBusinessPara}
          imageFirst="0"
        />
        <HomeApplyOnline
          BoxText="Nobody else can get you a great policy as fast as we can."
          onNavigate={() =>
            this.navigateTo('/perm-life-insurance/build-policy')
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

export default connect(null, mapDispatchToProps)(PermLifeContainer);
