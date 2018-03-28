import React from 'react';
import {
  Container,
  TextContainer,
  CTAContainer,
  InnerTextContainer,
  CTA,
  PrimaryText,
  PrimaryText1,
  SecondaryText,
} from './styles';
import colors from '../../utils/colors';

const PhotoBanner = () => (
  <Container>
    <TextContainer>
      <PrimaryText1
        fontSize={28}
        lineHeight={1.65}
        textAlign={'center'}
        color={colors.BUTTON_FONT_COLOR}
      >
        Life Insurance&nbsp;
        <SecondaryText
          fontSize={28}
          lineHeight={1.65}
          textAlign={'center'}
          color={colors.WHITE}
        >
          isn’t just about protecting your from the worst-case scenarios, it’s a
          financial tool that you can use to&nbsp;
        </SecondaryText>
        build a stable and happy&nbsp;
        <SecondaryText
          fontSize={28}
          lineHeight={1.65}
          textAlign={'center'}
          color={colors.WHITE}
        >
          future for yourself.
        </SecondaryText>
      </PrimaryText1>
    </TextContainer>
    <CTAContainer>
      <InnerTextContainer>
        <SecondaryText
          fontSize={24}
          lineHeight={1.65}
          textAlign={'center'}
          color={colors.WHITE}
        >
          Nobody ever told you that Life Insurance can help with your student
          loans?&nbsp;
          <PrimaryText
            fontSize={24}
            lineHeight={1.65}
            textAlign={'center'}
            color={colors.BUTTON_FONT_COLOR}
          >
            Get your Policy Today!
          </PrimaryText>
        </SecondaryText>
      </InnerTextContainer>
      <CTA
        radius={999}
        bgColor={colors.BUTTON_FONT_COLOR}
        fontSize={18}
        fontWeight={600}
        color={colors.WHITE}
        padding={'12px 34px'}
        lineHeight={1.2}
        margin={'10px 0'}
      >
        Get Started
      </CTA>
    </CTAContainer>
  </Container>
);

export default PhotoBanner;
