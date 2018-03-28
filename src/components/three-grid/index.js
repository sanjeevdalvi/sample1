import React from 'react';
import {
  Container,
  Line,
  HeaderContainer,
  PrimaryHeader,
  SecondaryHeader,
  HeaderText,
  GridContainer,
  GridItem,
  PrimaryText,
  SecondaryText,
} from './styles';
import colors from '../../utils/colors';

const ThreeGrid = () => (
  <Container>
    <HeaderContainer>
      <Line />
      <HeaderText>
        <PrimaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.MOBILE_HEADER_BG}
        >
          You’re Not&nbsp;
        </PrimaryHeader>
        <SecondaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.BUTTON_FONT_COLOR}
        >
          Alone
        </SecondaryHeader>
      </HeaderText>
      <Line />
    </HeaderContainer>
    <GridContainer>
      <GridItem>
        <PrimaryText
          fontSize={24}
          textAlign={'center'}
          lineHeight={'27px'}
          color={colors.MOBILE_HEADER_BG}
        >
          There are over&nbsp;<SecondaryText
            fontSize={24}
            textAlign={'center'}
            lineHeight={'27px'}
            color={colors.BUTTON_FONT_COLOR}
          >
            44 Million&nbsp;
          </SecondaryText>Americans with Student Loan Debt.
        </PrimaryText>
      </GridItem>
      <GridItem>
        <PrimaryText
          fontSize={24}
          textAlign={'center'}
          lineHeight={'27px'}
          color={colors.MOBILE_HEADER_BG}
        >
          An average graduate needs&nbsp;<SecondaryText
            fontSize={24}
            textAlign={'center'}
            lineHeight={'27px'}
            color={colors.BUTTON_FONT_COLOR}
          >
            21 years&nbsp;
          </SecondaryText>Americans with Student Loan Debt.
        </PrimaryText>
      </GridItem>
      <GridItem>
        <PrimaryText
          fontSize={24}
          textAlign={'center'}
          lineHeight={'27px'}
          color={colors.MOBILE_HEADER_BG}
        >
          {' '}
          Most student loans have&nbsp;<SecondaryText
            fontSize={24}
            textAlign={'center'}
            lineHeight={'27px'}
            color={colors.BUTTON_FONT_COLOR}
          >
            a cosigner
          </SecondaryText>, who is responsible if the debt  can’t be paid off.
        </PrimaryText>
      </GridItem>
    </GridContainer>
  </Container>
);

export default ThreeGrid;
