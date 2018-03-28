import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import HomeApplyOnline from '../../components/home-apply-online';
import PremiumInsCarriers from '../../containers/premium-insurance-carriers';
import OtherInsCarriers from '../../containers/other-insurance-carriers';
import Hero from '../../components/hero';
import InsuranceNavigation from '../../components/insurance-navigation';
import { Container } from './styles';
import SecureFoundation from '../../components/secure-foundation';
import ContactUs from '../../components/contact-us';
import SecretWay from '../../components/secret-way';
import HorizontalBanner from '../../components/horizontal-banner';
import CardLayout from '../../components/card-layout';
import StyledText from '../../utils/text';
import Images from '../../utils/images';

const contactPagePara = props => (
  <StyledText
    fontSize="14"
    color="#ffffff"
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

const CardsDetails = [
  {
    heading: 'Cash Value',
    text:
      'Some Life Insurance policies have a cash value. As you invest in your Life Insurance policy you can borrow the policy’s cash value and use that as your down payment, dramatically decreasing your interest rates!',
  },
  {
    heading: 'Mortgage Collateral',
    text:
      'Banks love knowing that they’re going to get paid back. So if you have a Life Insurance policy already it can be much easier to get your first mortgage.',
  },
];

class HomeLoansContainer extends Component {
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
          background={Images.HOMELOANBG}
          heading="A better way to finance your new home"
          ctaPrimary="Get Your Policy Today."
          ctaSecondary="Your 5 Minute Quote Starts Now."
        />
        <CardLayout
          heading1={'How Can Life Insurance help you '}
          heading2={'Buy a House?'}
          cards={CardsDetails}
        />
        <SecretWay />
        <SecureFoundation />
        <HorizontalBanner BoxText="Who knew life insurance could cost as little as your Netflix subscription?" />
        <InsuranceNavigation navCallback={this.navigateTo} hiddenRoute={path} />
        <HomeApplyOnline HideCTA={true} BoxText="" />
        <PremiumInsCarriers />
        <ContactUs
          background={Images.CONTACTUSBG}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <OtherInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(HomeLoansContainer);
