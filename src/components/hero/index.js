import React from 'react';
import colors from '../../utils/colors';
import {
  Container,
  Rectangle,
  Heading,
  HeadingContainer,
  CTA,
  CTAText,
  CTAPrimary,
  CTASecondary,
  CTAButton,
} from './styles.js';

const Hero = ({
  background,
  heading,
  ctaPrimary,
  ctaSecondary,
  top,
  left,
  width,
  height,
  ctaPrimaryColor,
  ctaSecondaryColor,
  heading1FontSize,
  heading1MarginLeft,
  heading1MarginRight,
  heading2,
  heading2FontSize,
  heading2MarginLeft,
  heading3MarginRight,
  headingLineHeight,
  appendToHeading,
  bgColorBlend,
  textAlign,
  paddingTop = '104px',
  ctaMarginTop,
  ctaMarginBottom = 0,
  ctaSecondaryMobile = colors.WHITE,
  ctaSecondaryNewLine = false,
  navigateTo,
  navLink,
  flexSet,
  onNavigate,
}) => (
  <Container bgColorBlend={bgColorBlend} background={background}>
    <Rectangle
      top={top ? top : '52px'}
      left={left ? left : '10vw'}
      width={width ? width : '155px'}
      height={height ? height : '166px'}
    />
    <HeadingContainer>
      <Heading
        fontSize={heading1FontSize ? heading1FontSize : 48}
        fontWeight={600}
        color={colors.WHITE}
        paddingTop={paddingTop}
        headingLineHeight={headingLineHeight}
        textAlign={appendToHeading || textAlign ? 'left' : 'center'}
        marginLeft={heading1MarginLeft ? heading1MarginLeft : '18vw'}
        marginRight={heading1MarginRight ? heading1MarginRight : '0px'}
      >
        {heading}
        {appendToHeading && (
          <Heading
            fontSize={heading1FontSize ? heading1FontSize : 48}
            fontWeight={600}
            color={colors.BUTTON_FONT_COLOR}
            appendToHeading
            headingLineHeight={headingLineHeight}
          >
            {' '}
            {appendToHeading}
          </Heading>
        )}
      </Heading>
      <Heading
        fontSize={heading1FontSize ? heading1FontSize : 34}
        fontWeight={600}
        color={colors.BUTTON_FONT_COLOR}
        textAlign={'center'}
        marginLeft={heading1MarginLeft ? heading1MarginLeft : '18vw'}
        marginRight={heading1MarginRight ? heading1MarginRight : '0px'}
        paddingTop="0px"
        headingLineHeight={headingLineHeight}
      >
        {heading2}
      </Heading>
    </HeadingContainer>
    <CTA ctaMarginBottom={ctaMarginBottom} ctaMarginTop={ctaMarginTop}>
      <CTAText secondNewLine={ctaSecondaryNewLine} flexSet={flexSet}>
        <CTAPrimary
          fontSize={26}
          fontWeight={600}
          color={ctaPrimaryColor ? ctaPrimaryColor : colors.BUTTON_FONT_COLOR}
          lineHeight={'30px'}
        >
          {ctaPrimary}
        </CTAPrimary>
        <CTASecondary
          fontSize={26}
          fontWeight={600}
          color={ctaSecondaryColor ? ctaSecondaryColor : colors.WHITE}
          lineHeight={'30px'}
          ctaSecondaryMobile={ctaSecondaryMobile}
          secondNewLine={ctaSecondaryNewLine}
        >
          {ctaSecondary}
        </CTASecondary>
      </CTAText>
      <CTAButton
        radius={23}
        bgColor={colors.BUTTON_FONT_COLOR}
        color={colors.WHITE}
        fontWeight={600}
        fontSize={20}
        padding={'14px 28px'}
        onClick={() => onNavigate()}
      >
        GET STARTED
      </CTAButton>
    </CTA>
  </Container>
);

export default Hero;
