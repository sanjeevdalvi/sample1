import React from 'react';
import colors from '../../utils/colors';
import StyledText from '../../utils/text.js';
import {
  Container,
  HeadingStyle,
  Circle,
  IconImage,
  InfoBoxContainer,
  InfoGridContainer,
  TextStyle1,
  TextStyle2,
  TextStyle3,
  TextStyle4,
} from './styles.js';

import images from '../../utils/images.js';

const Heading = ({ heading1, heading2, heading3 }) => (
  <HeadingStyle>
    <TextStyle1
      fontSize="22"
      color={colors.BOXED_TEXT}
      textAlign="center"
      fontWeight="900"
    >
      {' '}
      {heading1}{' '}
    </TextStyle1>
    <TextStyle2 color={colors.FOOTER_BG} textAlign="center" fontWeight="900">
      {' '}
      {heading2}{' '}
    </TextStyle2>
    <StyledText
      fontSize="24"
      color={colors.BOXED_TEXT}
      textAlign="center"
      fontWeight="900"
    >
      {' '}
      {heading3}{' '}
    </StyledText>
  </HeadingStyle>
);

const MealInfoBox = () => (
  <InfoBoxContainer>
    <Circle>
      <IconImage src={images.mealImage} alt="coffee" />
    </Circle>
    <TextStyle3 fontSize="24" color={colors.FOOTER_BG} textAlign="center">
      {' '}
      1 Dinner Out{' '}
    </TextStyle3>
  </InfoBoxContainer>
);
const LatteInfoBox = () => (
  <InfoBoxContainer>
    <Circle>
      {' '}
      <IconImage src={images.coffeeImage} alt="coffee" />
      <IconImage src={images.coffeeImage} alt="coffee" />
    </Circle>
    <TextStyle3 fontSize="24" color={colors.FOOTER_BG} textAlign="center">
      {' '}
      2 Lattes{' '}
    </TextStyle3>
  </InfoBoxContainer>
);
const NetflixInfoBox = () => (
  <InfoBoxContainer>
    <Circle>
      <IconImage src={images.netflixImage} alt="coffee" />
    </Circle>
    <TextStyle3 fontSize="24" color={colors.FOOTER_BG} textAlign="center">
      1 Netflix Subscription
    </TextStyle3>
  </InfoBoxContainer>
);

const InfoGrid = () => (
  <InfoGridContainer>
    <MealInfoBox />
    <TextStyle4
      fontSize="24"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
      fontWeight="600"
    >
      or
    </TextStyle4>
    <LatteInfoBox />
    <TextStyle4
      fontSize="24"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
      fontWeight="600"
    >
      or
    </TextStyle4>
    <NetflixInfoBox />
  </InfoGridContainer>
);

const StartInvesting = ({ heading1, heading2, heading3 }) => (
  <Container>
    <Heading heading1={heading1} heading2={heading2} heading3={heading3} />
    <InfoGrid />
  </Container>
);

export default StartInvesting;
