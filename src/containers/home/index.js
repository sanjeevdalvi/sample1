import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import HomeApplyOnline from '../../components/home-apply-online';
import PremiumInsCarriers from '../../containers/premium-insurance-carriers';
import OtherInsCarriers from '../../containers/other-insurance-carriers';
import Hero from '../../components/hero';
import InsuranceNavigation from '../../components/insurance-navigation';
import ContactUs from '../../components/contact-us';
import Video from '../../components/video';

import Images from '../../utils/images';
import StyledText from '../../utils/text.js';

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

class HomePage extends Component {
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
      <div className="homepage">
        <Hero
          background={Images.HEROHOMEPAGEBG}
          heading="Discover an Easy Way to Take Control"
          ctaPrimary="Get Your Policy Today."
          ctaSecondary="Your 5 Minute Quote Starts Now."
          width={'135px'}
          height={'146px'}
        />
        <InsuranceNavigation navCallback={this.navigateTo} />
        <Video
          videoURL="https://vimeo.com/243133191"
          image={Images.homeVideoBGImage}
          description={`Ask Yourself \n "What does this have to do with me?"`}
          poster={Images.homeVideoPosterImage}
        />
        <HomeApplyOnline BoxText="Apply Online and Get Your Policy Today!" />
        <PremiumInsCarriers />
        <ContactUs
          background={Images.CONTACTUSBG}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <OtherInsCarriers />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(HomePage);
