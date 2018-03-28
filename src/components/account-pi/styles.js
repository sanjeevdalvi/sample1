import styled from 'styled-components';
import Text from '../../utils/text.js';
import Button from '../../utils/button.js';
import colors from '../../utils/colors.js';

const firstBreakPoint = 935;
const secondBreakPoint = 740;
const lastBreakPoint = 590;

const QuoteSecondBreakPoint = 915;

export const Container = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  margin: 30px auto 70px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    margin: 30px auto;
  }
`;

export const HeaderConatiner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;
export const HeadingLine = styled.div`
  height: 2px;
  width: calc(50% - 205.5px);
  background-color: #d1d1d1;
  @media (max-width: ${lastBreakPoint}px) {
    width: 30px;
  }
`;
export const HeadingText = Text.extend`
  font-size: 36px;
  color: #000000;
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 26px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const CardContainer = styled.div`
  display: ${({ isVisible = true }) => (isVisible === true ? 'flex' : 'none')};
  flex-flow: row wrap;
  background-color: ${colors.WHITE};
  box-shadow: 0 2px 4px 0 rgba(220, 220, 220, 0.5);
  border: solid 1px #dcdcdc;
  width: calc(100% - 95px);
  margin: 20px auto 50px;
  padding: 30px 50px;
  box-sizing: border-box;
  position: relative;
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    padding: ${({ isForm = false }) => (isForm ? '50px' : '10px')};
  }
  @media (max-width: ${secondBreakPoint}px) {
    width: calc(100% - 120px);
    padding: 25px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 90%;
    padding: 10px;
    box-shadow: none;
    margin: 20px auto 0;
  }
`;
export const LoginContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-bottom: 10px;
`;

export const LoginSection = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const FormSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  @media (max-width: ${lastBreakPoint}px) {
    box-sizing: border-box;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

export const LoginLabel = styled.label`
  flex: 0 0 auto;
  width: ${({ width = '50%' }) => `${width}`};
  box-sizing: border-box;
  margin: 0 auto;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: ${({ marginRight = 0 }) => `calc(100% - ${marginRight})`};
  height: 49px;
  border-radius: 8px;
  background-color: ${colors.WHITE};
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 600;
  color: ${colors.BOXED_TEXT};
  border: 1px solid ${colors.GRAY6};
  margin: 12px 0;
  margin-right: ${({ marginRight = 0 }) => marginRight};
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${colors.FONT_COLOR_4};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${colors.FONT_COLOR_4};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${colors.FONT_COLOR_4};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${colors.FONT_COLOR_4};
  }
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const LoginCTA = Button.extend`
  flex: 0 0 auto;
  align-self: flex-end;
  letter-spacing: 2px;
  @media (max-width: ${firstBreakPoint}px) {
    margin: 15px auto;
    font-size: 14px;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.BORDER_COLOR_1};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto 0;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const SocialCTA = styled.div`
  flex: 0 0 auto;
  width: 230px;
  height: 52px;
  border-radius: 26px;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  color: ${colors.WHITE};
  background-color: ${({ bgColor = colors.FACEBOOK }) => bgColor};
  cursor: ${({ disabled = false }) =>
    disabled === true ? 'not-allowed' : 'pointer'};
  outline: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 15px 25px;
  box-sizing: border-box;
  margin: 10px auto;
  @media (max-width: ${firstBreakPoint}px) {
    margin: 10px auto;
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
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 20px;
  }
`;

export const CTAText = Text.extend`
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 12px;
  }
`;

export const HeaderText = Text.extend`
  display: inline-block;
  width: 100%;
  padding: 30px 0 10px;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 16px;
    padding: 20px 0 10px;
  }
`;

export const SubText = Text.extend`
  display: inline-block;
  width: 100%;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 12px;
  }
`;
