import React from 'react';
import colors from '../../utils/colors';

import {
  Container,
  TextStyle3,
  CheckMark,
  InfoBoxContainer,
  InfoGridContainer,
} from './styles.js';

const Box1 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3
      fontSize="30"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      {' '}
      Pay off your Debts{' '}
    </TextStyle3>
    <TextStyle3
      fontSize="16"
      color={colors.BOXED_TEXT}
      textAlign="center"
      lineHeight="24px"
    >
      You don’t want to leave your family with debt that they can no longer pay
      off without you.
    </TextStyle3>
  </InfoBoxContainer>
);
const Box2 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3
      fontSize="30"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Protect your Home
    </TextStyle3>
    <TextStyle3
      fontSize="16"
      color={colors.BOXED_TEXT}
      textAlign="center"
      lineHeight="24px"
    >
      You want your family to stay in the home they know and always feel safe
      there.
    </TextStyle3>
  </InfoBoxContainer>
);
const Box3 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3
      fontSize="30"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Your Family’s Future
    </TextStyle3>
    <TextStyle3
      fontSize="16"
      color={colors.BOXED_TEXT}
      textAlign="center"
      lineHeight="24px"
    >
      You want to leave enough money to help your children pay for their college
      education.
    </TextStyle3>
  </InfoBoxContainer>
);

const InfoGrid = () => (
  <InfoGridContainer>
    <Box1 />
    <Box2 />
    <Box3 />
  </InfoGridContainer>
);

const ProtectEarning = ({ Heading, paddingTop }) => (
  <Container paddingTop={paddingTop}>
    <Heading />
    <InfoGrid />
  </Container>
);

export default ProtectEarning;
