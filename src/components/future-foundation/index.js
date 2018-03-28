import React from 'react';
import colors from '../../utils/colors';

import {
  Container,
  Line,
  TextStyle1,
  TextStyle2,
  TextStyle3,
  FooterSection,
  InfoBoxContainer,
  InfoGridContainer,
} from './styles.js';

const Box1 = () => (
  <InfoBoxContainer>
    <TextStyle3
      fontSize="24"
      color={colors.WHITE}
      textAlign="center"
      fontWeight={600}
    >
      CASH VALUE
    </TextStyle3>
    <TextStyle2 fontSize="18" color={colors.WHITE} textAlign="center">
      Your investment in Life Insurance can have a cash value that you can
      borrow against or withdraw from when you need it to pay for medical needs,
      college tuition, or retirement.
    </TextStyle2>
  </InfoBoxContainer>
);

const Box2 = () => (
  <InfoBoxContainer>
    <TextStyle3
      fontSize="24"
      color={colors.WHITE}
      textAlign="center"
      fontWeight={600}
    >
      FINANCIAL FOUNDATION
    </TextStyle3>
    <TextStyle2 fontSize="18" color={colors.WHITE} textAlign="center">
      Your Life Insurance Policy can help you when you need to take out a
      personal loan or mortgage, making it easier to finance your first home.
    </TextStyle2>
  </InfoBoxContainer>
);

const InfoGrid = () => (
  <InfoGridContainer>
    <Box1 />
    <Line />
    <Box2 />
  </InfoGridContainer>
);
const Footer = ({ footer }) => (
  <FooterSection>
    <TextStyle1
      fontSize="22"
      color={colors.WHITE}
      textAlign="center"
      fontWeight={600}
    >
      {footer}{' '}
    </TextStyle1>
  </FooterSection>
);

const FutureFoundation = ({ Heading, background, footer }) => (
  <Container background={background}>
    <Heading />
    <InfoGrid />
    <Footer footer={footer} />
  </Container>
);

export default FutureFoundation;
