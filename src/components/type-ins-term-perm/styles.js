import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';
import Button from '../../utils/button';

import checkMarkImage from '../../assets/images/done.png';

const firstBreakPoint = '1106px';
const secondBreakPoint = '1012px';
const lastBreakPoint = '450px';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  background-color: ${colors.WHITE};
  @media (max-width: ${lastBreakPoint}) {
  }
`;

export const TextStyle1 = StyledText.extend`
  font-size: 22px;
  text-align: left;
  display: inline;
  color: ${colors.FONT_COLOR_1};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 20px;
  }
  @media (max-width: ${lastBreakPoint}) {
    font-size: 16.5px;
  }
`;
export const TextStyle2 = StyledText.extend`
  font-size: 22px;
  text-align: left;
  display: inline;
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 20px;
  }
  @media (max-width: ${lastBreakPoint}) {
    font-size: 16.5px;
  }
`;
export const TextStyle3 = StyledText.extend`
  margin-bottom: 30px;
  font-size: 32px;
  letter-spacing: 7px;
  text-align: center;
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${firstBreakPoint}) {
    font-size: 30px;
  }
  @media (max-width: ${lastBreakPoint}) {
    font-size: 24px;
    letter-spacing: 5.3px;
    width: 162px;
  }
`;
export const TextStyle4 = StyledText.extend`
  font-size: 18px;
  line-height: 1.44;
  text-align: left;
  display: inline;
  width: 88%;
  margin-right: 32px;
  color: ${colors.FONT_COLOR_2};
  @media (max-width: ${lastBreakPoint}) {
    font-size: 13.5px;
    line-height: 1.44;
    width: 86%;
  }
`;
export const TextStyle5 = StyledText.extend`
  font-size: 14px;
  letter-spacing: 3px;
  text-align: left;
  display: inline;
  margin: 0 auto;
  cursor: pointer;

  color: ${colors.MOBILE_HEADER_BG};
`;

export const HeadingTextStyle = StyledText.extend`
  font-size: 36px;
  text-align: center;
  padding-left: 20px;
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
  width: 297px;
  height: 2px;
  background-color: ${colors.GRAY3};
  margin-top: 20px;
  align-self: stretch;
  @media (max-width: ${firstBreakPoint}) {
    width: 120px;
  }
  @media (max-width: ${lastBreakPoint}) {
    width: 34px;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  @media (max-width: ${lastBreakPoint}) {
  }
`;

export const CheckMark = styled.div`
  width: 31px;
  height: 23px;
  margin-right: 20px;

  background-image: url(${checkMarkImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${lastBreakPoint}) {
    width: 23px;
    height: 17px;
  }
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 20px;
  padding-bottom: 50px;

  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0px')};
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 0px;
  }
  background-color: ${colors.WHITE};
  box-shadow: 0 2px 20px 0 ${colors.SHADOW_COLOR_2};
`;

export const InfoBoxHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 63px;
  background-color: ${colors.MOBILE_HEADER_BG};
`;
export const InfoBoxHeaderTextStyle = StyledText.extend`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  color: ${colors.WHITE};
  @media (max-width: ${lastBreakPoint}) {
    font-size: 15px;
  }
`;

export const BoxItem = styled.div`
  text-align: left;

  display: ${({ display }) => (display ? display : 'inherit')};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '20px')};
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '46px')};
  padding-right: ${({ paddingRight }) =>
    paddingRight ? paddingRight : '10px'};
  @media (max-width: ${lastBreakPoint}) {
    padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : '32px')};
  }
`;

export const BuildItButton = Button.extend`
  border-radius: 26px;
  margin: 0 auto;
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 14px;
  padding-bottom: 14px;

  background-color: ${colors.BUTTON_FONT_COLOR};
`;
export const TextStyle6 = StyledText.extend`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-align: left;
  color: ${colors.WHITE};
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  align-self: stretch;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 20px;
  padding-bottom: 20px;
  padding-left: 10vw;
  padding-right: 10vw;

  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    padding-left: 8vw;
    padding-right: 8vw;
  }
  @media (max-width: ${lastBreakPoint}) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

export const InfoPanelsContainer = styled.div`
  display: flex;
`;

export const InfoPanelStyle = styled.div`
  position: sticky;
  font-family: 'Open Sans', sans-serif;
  display: ${({ show }) => (show === true ? 'flex' : 'none')};

  left: ${({ x }) => x + 'px'};
  top: ${({ y }) => y + 'px'};
  width: 35vw;
  height: auto;
  margin-top: -40px;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 46px;
  padding-right: 28px;
  padding-bottom: 50px;

  font-size: 12px;
  line-height: 1.64;
  text-align: left;
  color: ${colors.INFO_PANEL_TEXT_COLOR};
  background-color: ${colors.WHITE};
  box-shadow: 0 0 30px 0 ${colors.SHADOW_COLOR_3};
  @media (max-width: ${secondBreakPoint}) {
    display: none;
  }
`;

export const CrossLine = styled.div`
  width: ${({ width }) => (width ? width : '297px')};
  height: ${({ height }) => (height ? height : '2px')};
  background-color: ${({ color }) => (color ? color : colors.GRAY3)};
  transform: rotate(${({ degrees }) => (degrees ? degrees : '0deg')});
  top: ${({ top }) => (top ? top : '10px')};
  left: ${({ left }) => (left ? left : '10px')};
  position: absolute;
`;

export const Cross = styled.div`
  cursor: pointer;
  position: absolute;
  top: 12px;
  left: 90%;
  width: 30px;
  height: 30px;
`;
