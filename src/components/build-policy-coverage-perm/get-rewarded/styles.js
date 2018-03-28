import styled from 'styled-components';
import StyledText from '../../../utils/text.js';
import colors from '../../../utils/colors';

import checkMarkImage from '../../../assets/images/check-circle.png';

const firstBreakPoint = '840px';
const lastBreakPoint = '650px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle3 = StyledText.extend`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: 4px;
  text-align: center;
  margin-top: 30px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : '30px')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : '0px')};

  color: ${colors.MOBILE_HEADER_BG};
`;

export const TextStyle2 = StyledText.extend`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  color: ${colors.HEADER_FONT_COLOR};
`;

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  margin-left: 10vw;
  margin-right: 10vw;
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
  width: 218px;
  height: 2px;
  margin-top: 20px;
  align-self: stretch;
  background-color: ${colors.GRAY3};
  @media (max-width: ${firstBreakPoint}) {
    width: 120px;
  }
  @media (max-width: ${lastBreakPoint}) {
    width: 44px;
  }
`;

export const CheckMark = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${checkMarkImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 23vw;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;

  @media (max-width: ${firstBreakPoint}) {
    width: 80vw;
    justify-content: center;
  }
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  align-self: stretch;
  align-items: start;
  justify-content: space-evenly;
  margin-top: 40px;

  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
