import React from 'react';
import windowDimensions from 'react-window-dimensions';
import {
  Container,
  HeadingSection1,
  HeadingSection2,
  TextStyle1,
  TextStyle3,
} from './styles';
import colors from '../../utils/colors';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import StyledText from '../../utils/text.js';
import Hero from '../../components/hero';
import heroBackground from '../../assets/images/bigstock-multiethnic-family-playing-wit-206291710.png';
import ProtectEarning from '../../components/protect-earning';
import FutureFoundation from '../../components/future-foundation';
import futureFoundationBackground from '../../assets/images/bigstock-145156991.png';
import SecretWay from '../../components/secret-way';
import InsuranceNavigation from '../../components/insurance-navigation';
import StartInvesting from '../../components/start-investing';
import ContactUs from '../../components/contact-us';
import contactUsBackground from '../../assets/images/bigstock-young-caucasian-family-having--164275358.png';
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
  <HeadingSection2>
    <TextStyle1
      fontSize="34"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
      lineHeight={'40px'}
    >
      Don’t let something unpredictable tear down the&nbsp;
    </TextStyle1>
    <TextStyle1
      fontSize="34"
      color={colors.BUTTON_FONT_COLOR}
      textAlign="center"
    >
      legacy you’ve built.
    </TextStyle1>
  </HeadingSection2>
);

const futureFoundationHeading = props => (
  <HeadingSection1>
    <TextStyle3>
      Life Insurance isn’t just about worst case scenarios, it’s about building
      your best case scenario.
    </TextStyle3>
  </HeadingSection1>
);
const futureFoundationHeadingMobile = props => (
  <HeadingSection1>
    <TextStyle3>BUILD A FOUNDATION FOR THE FUTURE</TextStyle3>
  </HeadingSection1>
);

class FamilyProvisionsContainer extends React.Component {
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
          background={heroBackground}
          heading="How Much do you Love your Family?"
          heading2="Protecting them costs as little as $15/mo"
          ctaPrimary="Protecting your family takes just 5 minutes and"
          ctaSecondary=" it starts today!"
          top="55px"
          left="13vw"
          width="142px"
          height="154px"
          ctaPrimaryColor={colors.WHITE}
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
          flexSet="0.65"
        />
        {width < 600 ? (
          <InsuranceNavigation
            navCallback={this.navigateTo}
            hiddenRoute={path}
          />
        ) : null}
        <ProtectEarning Heading={ProtectEarningHeading} paddingTop="70px" />

        {width < 600 ? (
          <FutureFoundation
            Heading={futureFoundationHeadingMobile}
            background={futureFoundationBackground}
            footer="Your extra money can protect you today and build more wealth you can access tomorrow."
          />
        ) : (
          <FutureFoundation
            Heading={futureFoundationHeading}
            background={futureFoundationBackground}
            footer=""
          />
        )}
        <SecretWay />
        <GetStarted
          header1="Get started today in just 5 minutes and know your "
          header2="family is in good hands."
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
          background={contactUsBackground}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <HomeApplyOnline BoxText="Apply in just 5 minutes and get your family’s benefits secured today!" />
        <PremiumInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

//export default windowDimensions()(PremiumInsCarriers);
export default connect(null, mapDispatchToProps)(
  windowDimensions()(FamilyProvisionsContainer)
);
