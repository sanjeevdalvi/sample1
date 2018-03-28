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
    heading: 'Manage your End of Life Cost',
    subHeading: 'Just a small monthly investment can make a big difference',
    description:
      'Make sure that you don’t leave your loved ones to cover the costs of your burial, memorial, and other final expenses.',
  },
  {
    heading: 'Avoid Unfair Estate Taxes',
    subHeading: 'Make sure that your money get to the people who need it',
    description:
      'Don’t just leave your family money, because the estate taxes and income taxes might leave your loved ones still short to pay off all the bills. But your Final Expense Insurance payout is tax free, so you know the money goes where it is needed.',
  },
  {
    heading: 'Defeat the Stress',
    subHeading: "Stop worrying about what if's and the when's",
    description:
      'Be rewarded with the peace of mind that comes with knowing that everything is taken care of. Stop worrying and just enjoy your life.',
  },
  {
    heading: 'Defend your Legacy',
    subHeading: "You've worked hard to build something good",
    description:
      'Let your family focus on remembering you the way you were in life, rather than worrying about the costs they have to cover. If you leave them a plan and the means to cover the costs, you help alleviate the grief of your passing.',
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

class FinalExpenseInsurance extends Component {
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
          background={Images.finalExpenseHeroBGImage}
          heading="Stop expecting Social Security to cover your final expenses. They wont."
          ctaPrimary="Don’t worry any longer. "
          ctaPrimaryColor={colors.WHITE}
          ctaSecondary="Apply in 5 minutes and get your policy today!"
          ctaSecondaryColor={colors.BUTTON_FONT_COLOR}
          ctaSecondaryMobile={colors.WHITE}
          left={'10.66vw'}
          paddingTop={'90px'}
          textAlign={'left'}
          ctaMarginBottom={'30px'}
          top={'35px'}
          onNavigate={() =>
            this.navigateTo('/final-expense-insurance/build-policy/info')
          }
        />
        <InsuranceNavigation navCallback={this.navigateTo} />
        <Video
          videoURL="https://vimeo.com/243133191"
          image={Images.finalExpenseVideoBGImage}
          description={`Don’t leave your family to figure out your final expenses.`}
          poster={Images.medicalPosterImage}
        />
        <GetPolicy
          header={getPolicyCTAText}
          details={policyDetails}
          onNavigate={() =>
            this.navigateTo('/final-expense-insurance/build-policy/info')
          }
        />
        <LifeInsurance
          bgImage={images.finalExpenseGridBGImage}
          details={details}
        />
        <PremiumInsCarriers />
        <ContactUs background={Images.CONTACTUSBG} para={contactPagePara} />
        <HomeApplyOnline
          BoxText="Nobody else can get you a great policy as fast as we can."
          onNavigate={() =>
            this.navigateTo('/final-expense-insurance/build-policy/info')
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

export default connect(null, mapDispatchToProps)(FinalExpenseInsurance);
