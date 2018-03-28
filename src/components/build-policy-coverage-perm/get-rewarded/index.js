import React from 'react';

import {
  Container,
  TextStyle2,
  TextStyle3,
  HeadingContainer,
  HeadingTextStyle,
  Line,
  CheckMark,
  InfoBoxContainer,
  InfoGridContainer,
} from './styles.js';

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Get Ready to be Rewarded</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

const Box1 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3>LIFE LONG BENEFITS</TextStyle3>
    <TextStyle2>
      A Permanent policy can build a cash value that you can take out loans
      against or withdraw when you need it.
    </TextStyle2>
  </InfoBoxContainer>
);
const Box2 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3>FINANCIAL SECURITY</TextStyle3>
    <TextStyle2>
      Make sure that whatever happens to you, your family and affairs will be
      taken care of.
    </TextStyle2>
  </InfoBoxContainer>
);
const Box3 = () => (
  <InfoBoxContainer>
    <CheckMark />
    <TextStyle3 marginTop="40px" marginBottom="17px">
      FLEXIBILITY
    </TextStyle3>
    <TextStyle2>
      You needs will change during your lifetime, so a Permanent Life Insurance
      policy is built to change with you.
    </TextStyle2>
  </InfoBoxContainer>
);

const InfoGrid = () => (
  <InfoGridContainer>
    <Box1 />
    <Box2 />
    <Box3 />
  </InfoGridContainer>
);

const GetRewarded = () => (
  <Container>
    <Heading />
    <InfoGrid />
  </Container>
);

export default GetRewarded;
