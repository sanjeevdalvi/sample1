import React from 'react';
import windowDimensions from 'react-window-dimensions';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {
  Container,
  HeadingSection1,
  HeadingSection2,
  Line,
  TextStyle1,
  TextStyle2,
} from './styles';
import colors from '../../utils/colors';
import StyledText from '../../utils/text.js';
import Hero from '../../components/hero';
import images from '../../utils/images.js';

import ProtectEarning from '../../components/protect-earning';
import FutureFoundation from '../../components/future-foundation';
import SecretWay from '../../components/secret-way';
import InsuranceNavigation from '../../components/insurance-navigation';
import StartInvesting from '../../components/start-investing';
import ContactUs from '../../components/contact-us';
import HomeApplyOnline from '../../components/home-apply-online';
import GetStarted from '../../components/get-started';

import PremiumInsCarriers from '../../containers/premium-insurance-carriers';

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
const ProtectEarningHeading = props => (
  <HeadingSection1>
    <TextStyle1
      fontSize="24"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Don’t just waste your extra income by holding it in savings!
    </TextStyle1>
    <TextStyle1
      fontSize="24"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Use it to build a better future for yourself.
    </TextStyle1>
    <HeadingSection2>
      <Line />
      <StyledText
        fontSize="34"
        color={colors.BUTTON_FONT_COLOR}
        textAlign="center"
        fontWeight="600"
      >
        Protect what you’ve earned.{' '}
      </StyledText>
      <Line />
    </HeadingSection2>
  </HeadingSection1>
);

const futureFoundationHeading = props => (
  <HeadingSection1>
    <TextStyle2
      fontSize="30"
      color={colors.WHITE}
      textAlign="center"
      fontWeight={900}
    >
      BUILD A FOUNDATION FOR THE FUTURE
    </TextStyle2>
  </HeadingSection1>
);
const futureFoundationFooter =
  'Your extra money can protect you today and build more wealth you can access tomorrow.';

class WealthManagementContainer extends React.Component {
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
    const { match, width } = this.props;
    const path = match.path.split('/')[1];
    return (
      <Container>
        <Hero
          background={images.wealthMgmtBackground}
          heading="Not sure how to effectively grow or manage the wealth you recently came in to? "
          ctaPrimary="Start investing in your "
          ctaSecondary="future today!"
          top="60px"
          left="16vw"
          width="140px"
          height="150px"
          ctaPrimaryColor={colors.WHITE}
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
          ctaMarginTop="45px"
          heading1FontSize="34"
          heading1MarginLeft="21vw"
          heading1MarginRight="16vw"
          headingLineHeight="1.1"
          heading2="We know a secret that might surprise you."
          flexSet="0.65"
        />
        {width < 600 ? (
          <InsuranceNavigation
            navCallback={this.navigateTo}
            hiddenRoute={path}
          />
        ) : null}
        <ProtectEarning Heading={ProtectEarningHeading} />
        <FutureFoundation
          Heading={futureFoundationHeading}
          background={images.futureFoundationBackground}
          footer={futureFoundationFooter}
        />
        <SecretWay />
        <GetStarted
          header1="Apply in just 5 minutes and start down the "
          header2="path to Relaxation."
          breakPoint="871px"
        />
        {width >= 600 ? (
          <InsuranceNavigation
            navCallback={this.navigateTo}
            hiddenRoute={path}
          />
        ) : null}
        <StartInvesting
          heading1="Just a little investment each month can start working for you today."
          heading2="Rates start as low as $15/month."
          heading3="Think about it. That’s just:"
        />
        <ContactUs
          background={images.CONTACTUSBG}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <HomeApplyOnline
          BoxText="The longer you wait the less you’ll have saved up for retirement."
          AppendToText=" Start Today!"
          boxTextFontSize={24}
        />
        <PremiumInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(
  windowDimensions()(WealthManagementContainer)
);
