import styled from 'styled-components';
import colors from '../../utils/colors';
import Text from '../../utils/text';
import Button from '../../utils/button';

const firstBreakPoint = 935;
const secondBreakPoint = 740;
const thirdBreakPoint = 615;
const lastBreakPoint = 485;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-bottom: 50px;
`;

export const HeadingTextStyle = Text.extend`
  font-size: 36px;
  text-align: center;
  padding: 35px 20px;
  line-height: 49px;
  box-sizing: border-box;
  display: inline-block;
  width: calc(100% - 57.6%);
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: 1175px) {
    font-size: 30px;
    width: auto:
  }
  @media (max-width: 950px) {
    font-size: 26px;
    width: auto;
    padding: 35px 0;
  }
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 22px;
    width: auto;
    padding: 0;
  }
`;

export const HeadingLine = styled.div`
  width: 28.8%;
  height: 2px;
  align-self: stretch;
  background-color: #d1d1d1;
  margin: auto;
  @media (max-width: 935px) {
    width: 77px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 50px;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 270px);
  @media (max-width: ${secondBreakPoint}px) {
    width: calc(100% - 120px);
    padding: 25px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 90%;
    padding: 10px;
    box-shadow: none;
    border: none;
  }
`;

export const CardContainer = styled.div`
  display: ${({ isVisible = true }) => (isVisible === true ? 'flex' : 'none')};
  flex-flow: row wrap;
  background-color: ${colors.WHITE};
  box-shadow: 0 2px 4px 0 rgba(220, 220, 220, 0.5);
  border: solid 1px #dcdcdc;
  width: calc(100% - 270px);
  margin: 20px auto;
  padding: 50px;
  box-sizing: border-box;
  @media (max-width: ${secondBreakPoint}px) {
    width: calc(100% - 120px);
    padding: 25px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 90%;
    padding: 10px;
    box-shadow: none;
    border: none;
    margin-top: 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  flex: 0 0 auto;
  width: 30%;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${thirdBreakPoint}px) {
    width: 15%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const FormContainer = styled.div`
  flex: 0 0 auto;
  width: 55%;
  @media (max-width: ${thirdBreakPoint}px) {
    width: 65%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const MiddleContainer = styled.div`
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
    margin: 20px auto;
  }
`;

export const CTA = styled.div`
  flex: 0 0 auto;
  width: 230px;
  height: 52px;
  border-radius: 26px;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  color: ${colors.WHITE};
  background-color: ${({ bgColor = colors.FACEBOOK }) => bgColor};
  cursor: pointer;
  outline: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 15px 25px;
  box-sizing: border-box;
  @media (max-width: ${firstBreakPoint}px) {
    width: 140px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    width: 50px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 230px;
    padding: 25px;
    margin: 10px auto;
  }
`;

export const CTALogo = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  object-fit: contain;
  @media (max-width: ${firstBreakPoint}px) {
    margin-right: 10px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 20px;
  }
`;

export const CTAText = Text.extend`
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 13px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    display: none;
    font-size: 14px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: initial;
  }
`;

export const Line = styled.div`
  width: 3px;
  height: 100px;
  background-color: ${colors.BORDER_COLOR_1};
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const OrText = Text.extend`
  padding: 15px;
  border-radius: 50%;
  border: 1px solid ${colors.BORDER_COLOR_1};
  flex: 0 0 auto;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
`;

export const LoginContainer = styled.div`
  display: ${({ isVisible = true }) => (isVisible === true ? 'flex' : 'none')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  max-width: 450px;
  margin: 0 auto;
`;
export const LoginText1 = Text.extend`
  flex: 0 0 auto;
  width: 100%;
`;
export const LoginText2 = Text.extend`
  flex: 0 0 auto;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;
export const LoginButton = Button.extend`
  flex: 0 0 auto;
  letter-spacing: 4px;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 10px auto;
  }
`;
