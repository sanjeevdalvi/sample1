import React, { Component } from 'react';
import windowDimensions from 'react-window-dimensions';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Container } from './styles';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';
import Hero from '../../components/hero';
import images from '../../utils/images.js';
import InvestIt from '../../components/invest-it';
import SecretWay from '../../components/secret-way';
import InsuranceNavigation from '../../components/insurance-navigation';
import StartInvesting from '../../components/start-investing';
import ContactUs from '../../components/contact-us';
import GetStarted from '../../components/get-started';

import HomeApplyOnline from '../../components/home-apply-online';

import PremiumInsCarriers from '../../containers/premium-insurance-carriers';

const contactPagePara = props => (
  <StyledText
    fontSize="14"
    color={colors.WHITE}
    textAlign="left"
    lineHeight="1.1px"
    marginTop="16"
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

class RetirementPlansContainer extends Component {
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
          background={images.retirementBackground}
          heading="Don't wait!"
          appendToHeading="It's time to get started."
          heading1MarginLeft={30}
          ctaPrimary="Your retirement can start sooner than you think. "
          ctaSecondary="Start investing today!"
          flexSet="0.7"
          top="70px"
          left="14vw"
          width="140px"
          height="110px"
          ctaPrimaryColor={colors.WHITE}
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
        />
        {width < 600 ? (
          <InsuranceNavigation
            navCallback={this.navigateTo}
            hiddenRoute={path}
          />
        ) : null}
        <InvestIt />
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
          heading1="It doesn’t take much to start investing in your retirement."
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
  windowDimensions()(RetirementPlansContainer)
);
