import React from 'react';
import colors from '../../utils/colors';
import StyledText from '../../utils/text.js';

import {
  Container,
  HeadingStyle,
  GridContainerStyle,
  InfoBox,
  CheckMark,
} from './styles.js';

const Heading = () => (
  <HeadingStyle>
    <StyledText
      fontSize="34"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Don’t just put money into your savings account,
    </StyledText>
    <StyledText
      fontSize="34"
      color={colors.BUTTON_FONT_COLOR}
      textAlign="center"
    >
      invest it!
    </StyledText>
  </HeadingStyle>
);
const GridContainer = () => (
  <GridContainerStyle>
    <InfoBox>
      <CheckMark />
      <StyledText
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Keep your Money
      </StyledText>
      <StyledText
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        Think of your Insurance like a savings account. The money you put in
        stays yours and can even grow.
      </StyledText>
    </InfoBox>
    <InfoBox>
      <CheckMark />
      <StyledText
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Ready when you Are
      </StyledText>
      <StyledText
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        When you are ready to retire you can borrow or withdraw the money you
        invested in your policy.
      </StyledText>
    </InfoBox>

    <InfoBox>
      <CheckMark />
      <StyledText
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Flexible
      </StyledText>
      <StyledText
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        As your life changes you can adjust your policy to better fit your
        needs.
      </StyledText>
    </InfoBox>
    <InfoBox>
      <CheckMark />
      <StyledText
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Financial Security
      </StyledText>
      <StyledText
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        While you are saving for retirement, your investment is protecting you
        and your family in case something happens to you.
      </StyledText>
    </InfoBox>
  </GridContainerStyle>
);

const InvestIt = () => (
  <Container>
    <Heading />
    <GridContainer />
  </Container>
);

export default InvestIt;
