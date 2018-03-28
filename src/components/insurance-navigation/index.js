import React from 'react';
import windowDimensions from 'react-window-dimensions';
import {
  Container,
  InsuranceNavigator,
  Image,
  Line,
  InsuranceContainer,
  CustomText,
  CustomButton,
  Top,
} from './styles.js';
import colors from '../../utils/colors';
import Images from '../../utils/images';

const navigators = [
  {
    logo: Images.LIQUIDITY,
    text: 'Pay Off your Student Loans',
    route: 'student-loans',
  },
  {
    logo: Images.BANK,
    text: 'Finance Your New Home',
    route: 'home-loans',
  },
  {
    logo: Images.DEPOSIT,
    text: 'Saving for Retirement',
    route: 'retirement-plans',
  },
  {
    logo: Images.LOAN,
    text: 'Manage Your Wealth',
    route: 'wealth-management',
  },
  {
    logo: Images.USD,
    text: 'Provide for Your Family',
    route: 'family-provisions',
  },
];

const InsuranceNavigation = ({ width, height, navCallback, hiddenRoute }) => (
  <Container>
    {navigators.map((navigator, index) => (
      <InsuranceContainer
        key={index}
        isHidden={navigator.route === hiddenRoute}
      >
        <InsuranceNavigator>
          <Top>
            <Image
              src={navigator.logo}
              alt={navigator.text}
              onClick={width <= 598 ? () => navCallback(navigator.route) : null}
            />
            <CustomText
              color={colors.GRAY}
              fontWeight={600}
              fontSize={16}
              lineHeight={1.33}
              textAlign={'center'}
            >
              {navigator.text}
            </CustomText>
          </Top>
          <CustomButton
            bgColor={colors.BUTTONBG}
            padding={'10.5px 35px'}
            color={colors.WHITE}
            fontSize={14}
            fontWeight={600}
            onClick={() => navCallback(navigator.route)}
          >
            {' '}
            Learn More{' '}
          </CustomButton>
        </InsuranceNavigator>
        {index < navigators.length - 1 ? (
          index === navigators.length - 2 &&
          navigators[index + 1].route === hiddenRoute ? null : (
            <Line />
          )
        ) : null}
      </InsuranceContainer>
    ))}
  </Container>
);

export default windowDimensions()(InsuranceNavigation);
