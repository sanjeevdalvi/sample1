import styled from 'styled-components';
import StyledText from '../../../utils/text.js';
import colors from '../../../utils/colors';
import Button from '../../../utils/button.js';

const firstBreakPoint = '840px';
const lastBreakPoint = '650px';

export const TextStyle1 = StyledText.extend`
  font-size: 30px;
  line-height: 1;
  text-align: center;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-bottom: 10px;
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${firstBreakPoint}) {
    margin-left: 8vw;
    margin-right: 8vw;
  }
`;

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: ${colors.WHITE};
  @media (max-width: ${firstBreakPoint}) {
    height: auto;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
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
  width: ${({ width }) => (width ? width : '138px')};
  height: 2px;
  margin: 20px;
  align-self: stretch;
  background-color: ${colors.GRAY3};
  @media (max-width: ${firstBreakPoint}) {
    display: none;
  }
  @media (max-width: ${lastBreakPoint}) {
    display: none;
  }
`;
export const VerticalLine = styled.div`
  width: 1px;
  height: 132px;
  margin-top: 30px;
  align-self: stretch;
  @media (max-width: ${firstBreakPoint}) {
    display: none;
  }
  background-color: ${colors.GRAY3};
`;

export const LearnButton = Button.extend`
  border-radius: 22px;
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  text-align: left;
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_FONT_COLOR};
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '23vw')};
  margin-top: 30px;
  margin-right: 30px;
  margin-left: 30px;
  @media (max-width: ${firstBreakPoint}) {
    width: ${({ width }) => (width ? '98vw' : '90vw')};
    margin-top: 50px;
  }
`;
export const BoxGroup = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  align-self: stretch;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    height: auto;
    margin-top: 0px;
    align-items: center;
  }
`;
