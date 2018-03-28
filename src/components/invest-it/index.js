import React from 'react';
import colors from '../../utils/colors';

import {
  Container,
  HeadingStyle,
  GridContainerStyle,
  InfoBox,
  CheckMark,
  HeadingContainer,
  BoxHeadingStyle,
  TextStyle1,
} from './styles.js';

const Heading = () => (
  <HeadingContainer>
    <HeadingStyle
      fontSize="34"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      Don’t just put money into your savings account,&nbsp;
    </HeadingStyle>
    <HeadingStyle
      fontSize="34"
      color={colors.BUTTON_FONT_COLOR}
      textAlign="center"
    >
      invest it!
    </HeadingStyle>
  </HeadingContainer>
);
const GridContainer = () => (
  <GridContainerStyle>
    <InfoBox>
      <CheckMark />
      <BoxHeadingStyle
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Keep your Money
      </BoxHeadingStyle>
      <TextStyle1
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        Think of your Insurance like a savings account. The money you put in
        stays yours and can even grow.
      </TextStyle1>
    </InfoBox>
    <InfoBox>
      <CheckMark />
      <BoxHeadingStyle
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Ready when you Are
      </BoxHeadingStyle>
      <TextStyle1
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        When you are ready to retire you can borrow or withdraw the money you
        invested in your policy.
      </TextStyle1>
    </InfoBox>

    <InfoBox>
      <CheckMark />
      <BoxHeadingStyle
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Flexible
      </BoxHeadingStyle>
      <TextStyle1
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        As your life changes you can adjust your policy to better fit your
        needs.
      </TextStyle1>
    </InfoBox>
    <InfoBox>
      <CheckMark />
      <BoxHeadingStyle
        fontSize="32"
        color={colors.MOBILE_HEADER_BG}
        textAlign="center"
      >
        Financial Security
      </BoxHeadingStyle>
      <TextStyle1
        fontSize="16"
        color={colors.BOXED_TEXT}
        textAlign="center"
        lineHeight={1.5}
        fontWeight={500}
      >
        While you are saving for retirement, your investment is protecting you
        and your family in case something happens to you.
      </TextStyle1>
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
