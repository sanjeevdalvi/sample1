import React from 'react';
import colors from '../../utils/colors';

import {
  Container,
  HeadingStyle,
  GridContainerStyle,
  InfoBox,
  HeadingContainer,
  BoxHeadingStyle,
  TextStyle1,
} from './styles.js';
const CardLayout = ({ heading1, heading2, cards }) => (
  <Container>
    <HeadingContainer>
      <HeadingStyle
        fontSize="34"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        {heading1}
      </HeadingStyle>
      <HeadingStyle
        fontSize="34"
        color={colors.BUTTON_FONT_COLOR}
        textAlign="center"
      >
        {heading2}
      </HeadingStyle>
    </HeadingContainer>
    <GridContainerStyle>
      {cards.map((card, index) => (
        <InfoBox key={index}>
          <BoxHeadingStyle
            fontSize="32"
            color={colors.MOBILE_HEADER_BG}
            textAlign="center"
          >
            {card.heading}
          </BoxHeadingStyle>
          <TextStyle1
            fontSize="16"
            color={colors.BOXED_TEXT}
            textAlign="center"
            lineHeight={1.5}
            fontWeight={500}
          >
            {card.text}
          </TextStyle1>
        </InfoBox>
      ))}
    </GridContainerStyle>
  </Container>
);

export default CardLayout;
