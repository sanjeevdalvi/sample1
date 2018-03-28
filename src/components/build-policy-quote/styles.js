import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';
import Button from '../../utils/button.js';

const firstBreakPoint = '1055px';
const secondBreakPoint = '800px';
const lastBreakPoint = '600px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 100px;
  @media (max-width: ${lastBreakPoint}) {
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;
export const HeadingTextStyle = StyledText.extend`
  font-size: 36px;
  text-align: center;

  padding-right: 20px;

  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 34px;
  }
  @media (max-width: ${lastBreakPoint}) {
    font-size: 28.8px;
  }
`;

export const Line = styled.div`
  width: ${({ width }) => (width ? width : '20%')};
  height: 1px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '20px')};
  margin-left: 15px;
  margin-right: 20px;

  ${({ margin }) => (margin ? 'margin:' + margin : '')};
  align-self: stretch;
  background-color: ${colors.GRAY3};
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${lastBreakPoint}) {
    display: ${({ width }) => (width ? 'block' : 'none')};
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const MainContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    align-items: center;
    max-height: initial;
    overflow: initial;
  }
  margin-top: 30px;
  margin-bottom: 30px;
  max-height: 1200px;
  overflow: scroll;
`;

export const SideContainer = styled.div`
  width: 28vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin-top: 20px;
  border-radius: 6px;
  background-color: ${colors.WHITE};
  box-shadow: 0 2px 4px 0 ${colors.SHADOW_COLOR_3};
  border: solid 1px ${colors.GREY5};
  @media (max-width: ${secondBreakPoint}) {
    width: 85vw;
  }
  @media (max-width: ${lastBreakPoint}) {
  }
`;

export const QuoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  align-self: flex-start;
  margin-top: 20px;
  padding-left: 20px;
  min-width: 45%;
  @media (max-width: ${secondBreakPoint}) {
    width: 90vw;
    margin-left: 20px;
    min-width: initial;
  }
  @media (max-width: ${lastBreakPoint}) {
    width: auto;
    margin-left: 0px;
    padding-left: 0px;
    margin: 20px auto 0;
    min-width: initial;
  }
`;
export const QuoteSectionContainer = styled.div`
  flex: top;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin-top: 10px;
`;
export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  margin: 20px;
  padding: 10px 0;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '20px')};

  background-color: ${colors.SECTION_BK_COLOR_4};
  border: solid 1px ${colors.GREY5};
`;
export const SliderContainer = styled.div`
  margin: 5px;
  margin-left: 20px;
  margin-right: 20px;
  align-self: stretch;
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 10px;
  }
`;

export const TextStyle1 = StyledText.extend`
  font-size: 30px;
  line-height: 0.8;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;

  color: ${colors.MOBILE_HEADER_BG};
`;

export const TextStyle2 = StyledText.extend`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : '18px')};
  line-height: 1.33;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  color: ${colors.GRAY2};
`;

export const TextStyle3 = StyledText.extend`
  font-size: 24px;
  font-weight: 600;
  ${({ noSpacing }) => (noSpacing ? '' : 'letter-spacing: 4px')};
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 0px;
    margin-bottom: 15px;
  }
`;

export const TextStyleData = StyledText.extend`
  font-size: 24px;
  font-weight: 400;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;

  margin-bottom: 10px;
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 0px;
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

export const FieldLabel = styled.div`
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 20px;
  }
`;

export const TextStyle4 = StyledText.extend`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 10px;
  color: ${colors.FONT_COLOR_4};
`;
export const TextStyle5 = StyledText.extend`
  font-size: 18px;
  font-weight: 600;

  ${({ noSpacing }) => (noSpacing ? '' : 'letter-spacing: 2.3px')};
  text-align: center;
  margin-top: 15px;
  color: ${colors.BUTTON_FONT_COLOR};
`;

export const TextStyle6 = StyledText.extend`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 40px;

  color: ${colors.GRAY2};
`;

export const TextStyle7 = StyledText.extend`
  flex: 0.3;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 5px;
  margin-left: ${({ heading }) => (heading ? '50px' : '0px')};
  color: ${colors.GRAY2};
  @media (max-width: ${firstBreakPoint}) {
    margin-left: ${({ heading }) => (heading ? '50px' : '0px')};
  }
  @media (max-width: ${lastBreakPoint}) {
    display: none;
  }
`;

export const TextStyle8 = StyledText.extend`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 5px;
  margin-left: ${({ heading }) => (heading ? '70px' : '0px')};
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${lastBreakPoint}) {
    display: none;
  }
`;

export const TextStyle9 = StyledText.extend`
  font-size: 16px;
  cursor: pointer;
  line-height: 1;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;

  color: ${colors.MOBILE_HEADER_BG};
`;

export const TextStyle10 = StyledText.extend`
  font-size: 28px;
  line-height: 1.33;
  text-align: center;
  color: ${colors.GRAY2};
  @media (max-width: ${lastBreakPoint}) {
    color: ${colors.MOBILE_HEADER_BG};
    font-size: 32px;
    font-weight: 300;
    line-height: 1.13;
    text-align: center;
  }
`;

export const TextStyle11 = StyledText.extend`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  text-align: center;
  margin-top: 20px;
  color: ${colors.MOBILE_HEADER_BG};
  display: none;
  @media (max-width: ${lastBreakPoint}) {
    display: block;
  }
`;
export const Button1Text = StyledText.extend`
  font-size: 17px;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 20px;
  color: ${colors.WHITE};
  @media (max-width: ${lastBreakPoint}) {
    font-size: 13px;
  }
`;

export const Button2Text = StyledText.extend`
  font-size: 15.3px;
  letter-spacing: 2.5px;
  text-align: left;
  margin-top: 30px;
  margin-bottom: 20px;
  color: ${colors.WHITE};
  @media (max-width: ${lastBreakPoint}) {
    font-size: 13px;
    letter-spacing: 2.2px;
  }
`;

export const QuoteMessage = StyledText.extend`
         font-size: 24px;
         font-weight: 600;
         text-align: left;
         margin-top: 10px;
         margin-bottom: 10px;
         @media (max-width: ${lastBreakPoint}) {color: ${
  colors.MOBILE_HEADER_BG
}`;

export const LearnMorePanel = styled.div`
  margin-top: 10px;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${({ bestValue }) => (bestValue ? '-44px' : '0px')};
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 0px;
  }
`;
export const Badge = styled.img`
  width: 43px;
  height: 44px;
  @media (max-width: ${lastBreakPoint}) {
    display: none;
  }
`;

export const PriceStyle = StyledText.extend`
  font-size: 40px;
  text-align: center;
  color: ${colors.MOBILE_HEADER_BG};
`;

export const QuoteTopSection = styled.div`
  display: inline;
  flex: auto;
`;

export const RadioField = styled.div`
  display: flex;
  align-items: start;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'center'};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  margin-top: 10px;
  margin-right: 10px;
`;

export const Radio = styled.input`
  type: radio;
  margin-right: 10px;
  width: 18px;
  height: 18px;
  flex: none;
  background-color: ${colors.MOBILE_HEADER_BG};
`;

export const ContinueButton = Button.extend`
  border-radius: 22px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 34px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: 35px;
  font-size: 15.3px;
  font-weight: 400;
  letter-spacing: 2.5px;
  text-align: left;
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_FONT_COLOR};
  @media (max-width: ${lastBreakPoint}) {
    margin: 0 auto;
  }
`;

export const Button1 = Button.extend`
  border-radius: 25.5px;
  padding-left: 44px;
  padding-right: 40px;
  padding-top: 14px;
  padding-bottom: 15px;
  margin: 30px auto;

  color: ${colors.WHITE};
  background-color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${lastBreakPoint}) {
    padding-left: 14px;
    padding-right: 14px;
  }
`;

export const QuoteStyle = styled.div`
         flex: top;
         display: flex;
         ${({ heading }) =>
           heading ? 'justify-content: left;' : ' space-evenly'};
         align-items: center;
         
         margin-top: 15px;
         margin-bottom: 0px;
         @media (max-width: ${lastBreakPoint}) {flex-direction: column;
           height: ${({ heading }) => (heading ? '0px' : 'auto')};
          `;

export const LogoStyle = styled.div`
  margin: 0 auto;
  align-self: stretch;
`;
