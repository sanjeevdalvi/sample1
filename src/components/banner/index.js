import React from 'react';
import colors from '../../utils/colors';
import { Container, Heading, HeadingContainer } from './styles.js';

const Banner = ({
  background,
  paddingLeft,
  heading,
  textAlign = 'center',
  fontColor = colors.WHITE,
}) => (
  <Container background={background}>
    <HeadingContainer>
      <Heading
        paddingLeft={paddingLeft}
        color={fontColor}
        textAlign={textAlign}
      >
        {heading}
      </Heading>
    </HeadingContainer>
  </Container>
);

export default Banner;
