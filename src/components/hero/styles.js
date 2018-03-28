import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';

const firstBreakPoint = '1145px';
const secondBreakPoint = '1030px';
const thirdBreakPoint = '910px';
const forthBreakPoint = '800px';
const fifthBreakPoint = '650px';

export const Container = styled.div`
  min-height: 436px;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  background-color: ${({ bgColorBlend = 'rgba(0, 0, 0, 0.25)' }) =>
    bgColorBlend};
  background-blend-mode: multiply;
  @media (max-width: ${forthBreakPoint}) {
    height: auto;
  }
  @media (max-width: ${fifthBreakPoint}) {
    height: auto;
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.HERO_BK_COLOR};
  z-index: 0;
`;

export const HeadingContainer = styled.div`
  @media (max-width: ${fifthBreakPoint}) {
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 30px;
  }
`;

export const Rectangle = styled.div`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: solid 9px rgba(255, 255, 255, 0.41);
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  z-index: 1;
  @media (max-width: ${thirdBreakPoint}) {
    display: none;
  }
`;

export const Heading = Text.extend`
  padding-top: ${({ appendToHeading, paddingTop = '104px' }) =>
    paddingTop && !appendToHeading ? paddingTop : 0};
  z-index: 2;
  display: ${({ appendToHeading }) =>
    appendToHeading ? 'inline' : 'inline-block'};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  line-height: ${({ headingLineHeight }) =>
    headingLineHeight ? headingLineHeight : '1.33'};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 46px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 42px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    font-size: 38px;
  }
  @media (max-width: ${forthBreakPoint}) {
    font-size: 34px;
  }
  @media (max-width: ${fifthBreakPoint}) {
    font-size: 34px;
    margin-left: 0px;
    margin-right: 0px;
    line-height: 1.1;
    text-align: left;
    display: block;
  }
`;

export const CTA = styled.div`
  padding: 42px 50px;
  margin-top: ${({ ctaMarginTop }) => (ctaMarginTop ? ctaMarginTop : '75px')};
  background-color: rgba(0, 73, 82, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1;
  ${({ CTASettings }) => (CTASettings ? CTASettings : '')};
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    padding: 42px 60px;
  }
  @media (max-width: ${forthBreakPoint}) {
    flex-direction: column;
    margin-top: 120px;
    padding: 21px 30px;
  }
  @media (max-width: ${fifthBreakPoint}) {
    padding: 21px 10px;
    margin-top: 40px;
    margin-bottom: ${({ ctaMarginBottom = 0 }) => ctaMarginBottom};
  }
`;

export const CTAText = styled.div`
  display: inline-block;
  flex: ${({ flexSet }) => (flexSet ? flexSet : '0.88')};
  margin-right: 20px;
  ${({ secondNewLine }) =>
    secondNewLine ? 'display: flex; flex-direction: column;' : ''};
  font-size: 26px;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: ${forthBreakPoint}) {
    margin-bottom: 10px;
  }
  @media (max-width: ${fifthBreakPoint}) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ${({ CTATextSettings }) => (CTATextSettings ? CTATextSettings : '')};
`;

export const CTAPrimary = Text.extend`
  margin-right: 5px;

  ${({ CTAPrimarySettings }) => (CTAPrimarySettings ? CTAPrimarySettings : '')};

  @media (max-width: ${firstBreakPoint}) {
    font-size: 22px;
  }
  @media (max-width: ${secondBreakPoint}) {
  }
  @media (max-width: ${thirdBreakPoint}) {
    font-size: 20px;
    text-align: center;
    font-weight: 600;
    margin-left: 0px;
    margin-right: 0px;
    line-height: 1.2;
  }
`;

export const CTASecondary = Text.extend`
  ${({ secondNewLine }) => (secondNewLine ? 'text-align: center;' : '')};

  @media (max-width: ${firstBreakPoint}) {
    font-size: 22px;
  }

  @media (max-width: ${thirdBreakPoint}) {
    font-size: 20px;
    font-weight: 600;
  }
  @media (max-width: ${fifthBreakPoint}) {
    text-align: center;
    color: ${({ ctaSecondaryMobile, color }) =>
      color ? color : ctaSecondaryMobile};
  }
`;

export const CTAButton = Button.extend`
  z-index: 1;

  @media (max-width: ${firstBreakPoint}) {
    font-size: 18px;
    padding: 10px 28px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    font-size: 16px;
    padding: 8px 20px;
  }
`;
