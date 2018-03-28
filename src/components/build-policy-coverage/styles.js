import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';
import Button from '../../utils/button.js';

import arrowBackImage from '../../assets/images/arrow-forward.png';
import arrowDownImage from '../../assets/images/arrow-down.png';

const firstBreakPoint = '920px';
const secondBreakPoint = '860px';
const lastBreakPoint = '650px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-bottom: 100px;
  @media (max-width: ${lastBreakPoint}) {
    padding-bottom: 0px;
    margin-bottom: 20px;
  }
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

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const FormContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 78vw;
  margin-top: 40px;
  margin-bottom: 30px;
  padding-top: 40px;
  padding-bottom: 25px;

  border-radius: 7px;
  background-color: ${colors.WHITE};

  box-shadow: 0 0 15px 0 ${colors.SHADOW_COLOR_4};
  @media (max-width: ${firstBreakPoint}) {
    padding-left: 10px;
    padding-right: 10px;
  }
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const TextStyle1 = StyledText.extend`
  font-size: 24px;
  text-align: center;
  color: ${colors.FONT_COLOR_3};
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: ${lastBreakPoint}) {
    font-size: 20px;
  }
`;

export const TextStyle2 = StyledText.extend`
  color: ${colors.WHITE};
  font-size: 20px;
  line-height: 20px;
  padding-bottom: 30px;
  padding-left: 20px;
`;

export const TextStyle3 = StyledText.extend`
  color: ${colors.WHITE};
  font-size: 12px;
  line-height: 1.67;
  text-align: left;
  padding-left: 20px;
  padding-right: 20px;
`;

export const FormFieldContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: ${lastBreakPoint}) {
    flex-direction: column;
  }
`;
export const FormFieldStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const FormLabel = StyledText.extend`
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 10px;
  color: ${colors.BUTTON_FONT_COLOR};
`;

export const PolicyAmountStyle = styled.select`
  width: 23vw;
  height: 37.2px;
  color: ${colors.WHITE};
  font-size: 17px;
  font-weight: bold;
  text-align: left;
  border-radius: 4.8px;
  background-color: ${colors.MOBILE_HEADER_BG};
  margin-bottom: 20px;
  @media (max-width: ${lastBreakPoint}) {
    width: 70vw;
    margin-left: 20px;
    margin-right: 20px;
  }
`;
export const OptionStyle = styled.option`
  color: ${colors.GRAY4};
  background-color: white;
  font-size: 17px;
  font-weight: bold;
  padding-left: 20px;
`;

export const ArrowBack = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 44px;
  background-image: url(${arrowBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 40px;
  margin-right: 40px;

  @media (max-width: ${lastBreakPoint}) {
    background-image: url(${arrowDownImage});
    width: 32px;
    height: 30px;
    margin-top: 0px;
    align-self: center;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
  @media (max-width: ${lastBreakPoint}) {
    flex-direction: column;
  }
`;

export const InfoPanel1 = styled.div`
  width: 41vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 30px;
  margin-right: 12px;
  background-color: ${colors.MOBILE_HEADER_BG};

  @media (max-width: ${lastBreakPoint}) {
    width: auto;
    margin-left: 35px;
    margin-right: 34px;
    padding-left: 3px;
    padding-right: 2px;
    padding-top: 23px;
    padding-bottom: 35px;
  }
`;

export const InfoPanel2 = styled.div`
  width: 27vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  padding: 30px;
  @media (max-width: ${lastBreakPoint}) {
    width: auto;
    margin-left: 35px;
    margin-right: 34px;
    padding-left: 3px;
    padding-right: 2px;
    padding-top: 23px;
    padding-bottom: 31px;
    margin-top: 10px;
  }
  background-color: ${colors.MOBILE_HEADER_BG};
`;

export const ContinueButton = Button.extend`
  border-radius: 22px;
  margin: 0 auto;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 3px;
  text-align: left;
  color: ${colors.WHITE};
  background-color: ${colors.BUTTON_FONT_COLOR};
  @media (max-width: ${lastBreakPoint}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
