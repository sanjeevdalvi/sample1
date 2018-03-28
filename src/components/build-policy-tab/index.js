import React from 'react';
import {
  Container,
  Circle,
  Line,
  StepStyle,
  StepName,
  StepGroup,
} from './styles.js';
import images from '../../utils/images.js';

const Step = ({ image, text, line, opacity, navigateTo, navLink, product }) => (
  <StepStyle
    opacity={opacity}
    onClick={() => {
      if (product === 'term' && opacity === 1) navigateTo(navLink);
    }}
  >
    <Circle image={image} />
    <StepName> {text} </StepName>
  </StepStyle>
);

const BuildPolicyTab = ({
  stepItems,
  navigateTo,
  product,
  baseUrl = '/type-of-term-life/',
  currentTab = 1,
}) => (
  <Container>
    {stepItems.map((step, index) => (
      <StepGroup key={index}>
        <Step
          key={index}
          image={step.image}
          text={step.text}
          opacity={index <= currentTab - 1 ? 1 : 0.3}
          navigateTo={navigateTo}
          product={product}
          navLink={
            step.text === 'TYPE' ? baseUrl : baseUrl + product + step.navLink
          }
        />
        {index < stepItems.length - 1 ? (
          <Line
            adjust={step.adjust}
            opacity={index <= currentTab - 2 ? 1 : 0.3}
          />
        ) : null}
      </StepGroup>
    ))}
  </Container>
);

export default BuildPolicyTab;
