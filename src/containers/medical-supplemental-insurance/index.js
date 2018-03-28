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
import LifeInsurance from '../../components/life-insurance';
import GetPolicy from '../../components/get-policy';
import images from '../../utils/images';
import Video from '../../components/video';

const details = [
  {
    heading: 'Stop Stressing',
    subHeading: 'No more worrying about what Medicare doesn’t cover',
    description:
      'Your copayments and deductibles can still stack up on Medicare. You won’t have to worry that your bills will become unmanageable.',
  },
  {
    heading: 'Cover your Worst Case Scenarios',
    subHeading: 'Lock in your coverage now and stay insured',
    description:
      'Medigap coverage is always guaranteed renewable so as long as you keep paying your premiums your carrier can’t cancel your coverage, even if you get sick.',
  },
  {
    heading: 'Stay Covered when you Travel',
    subHeading: 'Medicare doesn’t cover expenses outside the U.S.',
    description:
      'Just because you’re on Medicare doesn’t mean you should feel trapped. Have the confidence that when you travel outside the U.S. you’ll still be covered.',
  },
  {
    heading: 'Consider your Prescriptions too',
    subHeading: 'Think about adding a Prescription Drug plan',
    description:
      'Medigap plans are no longer able to include prescription drug coverage, so consider investing in one. It’s a one-two punch to make sure you never get overwhelmed with medical costs.',
  },
];

const contactPagePara = props => (
  <StyledText
    fontSize="14"
    color={colors.WHITE}
    textAlign="left"
    marginLeft="65"
    marginTop="46"
  >
    The Meply team is standing by with information and advice in order to help
    you find the best plans for you. There are some options here that you might
    be interested in so don’t hesitate to give us a call.
    <br /> <br />
    No Upsells on options you don’t understand – just fair, unbiased advice to
    help you make the best choice possible..
  </StyledText>
);

const policyDetails = [
  {
    image: images.compareQuotesImage,
    header: 'COMPARE QUOTES FOR BEST PRICE',
    subText: 'Easy, no jargon application in just 5 minutes',
  },
  {
    image: images.guaranteedCoverageImage,
    header: 'GUARANTEED COVERAGE',
    subText:
      'No matter where you are in life, we can find a carrier with a policy for you',
  },
  {
    image: images.easyApplicationImage,
    header: 'EASY APPLICATION',
    subText:
      'Getting started only takes 5 minutes and you may get a policy with little to no medical screening',
  },
];

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

class MedicalSupplementalInsurance extends Component {
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
          background={Images.medicalHeroBGImage}
          heading="Is Medicare leaving you wanting more?"
          ctaPrimary="It’s easy to fill the gap. "
          ctaPrimaryColor={colors.WHITE}
          ctaSecondary="Get a quote in just 5 minutes!"
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
          ctaSecondaryMobile={colors.WHITE}
          left={'10.66vw'}
          paddingTop={'90px'}
          textAlign={'left'}
          ctaMarginBottom={'30px'}
          top={'35px'}
        />
        <InsuranceNavigation navCallback={this.navigateTo} />
        <Video
          videoURL="https://vimeo.com/243133191"
          image={Images.medicalVideoBGImage}
          description={`We give you the choice, you enjoy the benifits.\n\n Focus on You… with MePly`}
          poster={Images.medicalPosterImage}
        />
        <GetPolicy header={getPolicyCTAText} details={policyDetails} />
        <LifeInsurance bgImage={images.medicalInfoBGImage} details={details} />
        <PremiumInsCarriers />
        <ContactUs background={Images.CONTACTUSBG} para={contactPagePara} />
        <HomeApplyOnline BoxText="Nobody else can get you a great policy as fast as we can." />
        <OtherInsCarriers />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(MedicalSupplementalInsurance);
