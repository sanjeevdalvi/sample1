import React from 'react';
import {
  Container,
  BottomBox,
  BottomBoxText,
  GetStartedButton,
} from './styles';
import colors from '../../utils/colors';

const HorizontalBanner = ({ BoxText, AppendToText, HideCTA = false }) => (
  <Container>
    <BottomBox HideCTA={HideCTA}>
      <BottomBoxText
        AppendToText={AppendToText}
        fontSize={AppendToText ? 20 : 24}
        textAlign={'center'}
        fontWeight={600}
        color={colors.WHITE}
      >
        {BoxText}
        {AppendToText && (
          <BottomBoxText
            fontSize={AppendToText ? 20 : 24}
            fontWeight={600}
            color={colors.BUTTON_FONT_COLOR}
          >
            <br />
            {AppendToText}
          </BottomBoxText>
        )}
      </BottomBoxText>
      <GetStartedButton
        radius={23}
        bgColor={colors.BUTTON_FONT_COLOR}
        padding={'12px 30px'}
        fontSize={20}
        fontWeight={600}
        color={colors.WHITE}
      >
        GET STARTED
      </GetStartedButton>
    </BottomBox>
  </Container>
);

export default HorizontalBanner;
