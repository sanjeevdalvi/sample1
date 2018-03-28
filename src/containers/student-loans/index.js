import React, { Component } from 'react';
import { Container } from './styles';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import HomeApplyOnline from '../../components/home-apply-online';
import PremiumInsCarriers from '../../containers/premium-insurance-carriers';
import Hero from '../../components/hero';
import InsuranceNavigation from '../../components/insurance-navigation';
import Video from '../../components/video';

import TakeControl from '../../components/take-control';
import ThreeGridComponent from '../../components/three-grid';
import PhotoBanner from '../../components/photo-banner';
import StartInvesting from '../../components/start-investing';
import ContactUs from '../../components/contact-us';
import Images from '../../utils/images';
import StyledText from '../../utils/text';

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

class StudentLoansContainer extends Component {
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
          background={Images.STUDENTLOANBG}
          heading="Stop letting your Student Loans "
          appendToHeading="Define your Future"
          heading1MarginLeft={'14vw'}
          ctaPrimary="Start Breaking through&nbsp;"
          ctaSecondary="your Financial Limitations Today!"
          left={'70vw'}
          bgColorBlend={'rgba(2, 13, 12, 0.35)'}
        />
        <ThreeGridComponent />
        <Video
          videoURL="https://vimeo.com/243133420"
          image={Images.slVideoBGImage}
          description={`It doesn’t take a large investment today, to start rewarding yourself tomorrow.`}
          poster={Images.slVideoPosterImage}
        />
        <TakeControl />
        <PhotoBanner />
        <InsuranceNavigation navCallback={this.navigateTo} hiddenRoute={path} />
        <StartInvesting
          heading1="Just a little investment each month can start working for you today."
          heading2="Rates start as low as $15/month."
          heading3="Think about it. That’s just:"
        />
        <ContactUs
          background={Images.CONTACTUSBG}
          heading="The Meply team is standing by"
          para={contactPagePara}
        />
        <HomeApplyOnline
          BoxText="5 minutes to apply. No annoying screenings."
          AppendToText="Get a policy Today!"
        />
        <PremiumInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(StudentLoansContainer);
