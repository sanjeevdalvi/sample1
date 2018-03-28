import React, { Component } from 'react';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

import {
  Container,
  HeadingStyle,
  Line,
  StepsContainer,
  StepStyle,
  ArrowBack,
  TextStyle1,
  TextStyle2,
} from './styles.js';

const steps = [
  {
    heading: 'Skip any Screenings',
    text:
      'Start with a Term Policy while you’re young and you don’t have to go through any tests or doctor’s screenings.',
  },
  { heading: '->', text: 'This is placeholder for arrow' },
  {
    heading: 'Get Your Policy Today',
    text:
      'With Meply, you can compare quotes from hundreds of carriers and we’ll get your policy processed in just a few hours.',
  },
  { heading: '->', text: 'This is placeholder for arrow' },
  {
    heading: 'Now you’re In the Club',
    text:
      'Once you have your policy approved by a carrier, you’re in their little club and you can grow or convert your coverage to other plans that you can take even more advantage of.',
  },
];

const Heading = () => (
  <HeadingStyle>
    <Line />
    <div>
      <StyledText
        fontSize="34"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        The Secret Way to{' '}
      </StyledText>
      <StyledText
        fontSize="34"
        color={colors.BUTTON_FONT_COLOR}
        textAlign="center"
      >
        Get Started
      </StyledText>
    </div>
    <Line />
  </HeadingStyle>
);

const Steps = ({ steps }) => (
  <StepsContainer>
    {steps.map((step, index) => (
      <Step key={index} heading={step.heading} text={step.text} />
    ))}
  </StepsContainer>
);

class Step extends Component {
  render() {
    const { heading, text } = this.props;
    if (heading === '->') return <ArrowBack />;

    return (
      <StepStyle>
        <TextStyle1
          fontSize="24"
          color={colors.MOBILE_HEADER_BG}
          textAlign="center"
        >
          {heading}
        </TextStyle1>
        <TextStyle2
          fontSize="14"
          color={colors.SECTION_TEXT_1}
          textAlign="center"
        >
          {text}
        </TextStyle2>
      </StepStyle>
    );
  }
}

const SecretWay = () => (
  <Container>
    <Heading />
    <Steps steps={steps} />
  </Container>
);

export default SecretWay;
