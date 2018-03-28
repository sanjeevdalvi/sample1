import React from 'react';

import {
  Container,
  TextStyle1,
  HeadingContainer,
  HeadingTextStyle,
  Line,
  VerticalLine,
  InfoBoxContainer,
  InfoGridContainer,
  LearnButton,
} from './styles.js';

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Are you Looking for Something Else?</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

const insTypes = [
  { name: 'Term Life Insurance', link: '' },
  { name: 'Universal  Life Insurance', link: '' },
  { name: 'Indexed Universal Life Insurance', link: '' },
  { name: 'Guaranteed Issue Life Insurance', link: '' },
  { name: 'Guaranteed Universal Life Insurance', link: '', width: '27vw' },
];

const Box = ({ name, width, navigateTo }) => (
  <InfoBoxContainer width={width}>
    <TextStyle1>{name}</TextStyle1>
    <LearnButton onClick={() => navigateTo('/medical-supplemental-insurance')}>
      {' '}
      LEARN MORE{' '}
    </LearnButton>
  </InfoBoxContainer>
);

const InfoGrid = ({ navigateTo }) => (
  <InfoGridContainer>
    <Box name={insTypes[0].name} navigateTo={navigateTo} />
    <VerticalLine />
    <Box name={insTypes[1].name} navigateTo={navigateTo} />
    <VerticalLine />
    <Box name={insTypes[2].name} navigateTo={navigateTo} />
    <Box name={insTypes[3].name} navigateTo={navigateTo} />
    <VerticalLine />
    <Box name={insTypes[4].name} width={insTypes[4].width} />
  </InfoGridContainer>
);

const InsPolicyTypes = ({ navigateTo }) => (
  <Container>
    <Heading />
    <InfoGrid navigateTo={navigateTo} />
  </Container>
);

export default InsPolicyTypes;
