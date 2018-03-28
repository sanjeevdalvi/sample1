import styled from 'styled-components';
import colors from '../../utils/colors';
import Text from '../../utils/text';
import Button from '../../utils/button';

const firstBreakPoint = 935;
const secondBreakPoint = 740;
const thirdBreakPoint = 615;
const lastBreakPoint = 590;

const QuoteFirstBreakPoint = 1175;
const QuoteSecondBreakPoint = 915;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-bottom: 50px;
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

export const HeadingTextStyle = Text.extend`
  text-align: center;
  padding: 35px 20px;
  line-height: 49px;
  box-sizing: border-box;
  display: inline-block;
  width : calc(100% - 57.6%);
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 34px;
    width: auto:
    padding: 0
  }
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 28.8px;
    width: auto;
    padding: 0;
  }
`;

export const LoginTextStyle = Text.extend`
text-align: center;
padding: 0;
line-height: 49px;
box-sizing: border-box;
display: inline-block;
width : calc(100% - 57.6%);
@media (max-width: ${firstBreakPoint}px) {
  font-size: 34px;
  width: auto:
  padding: 0;
}
@media (max-width: ${lastBreakPoint}px) {
  font-size: 28.8px;
  width: 100%;
  padding: 0;
}
`;

export const HeadingLine = styled.div`
  width: 28.8%;
  height: 2px;
  align-self: stretch;
  background-color: #d1d1d1;
  margin: auto;
  @media (max-width: ${secondBreakPoint}px) {
    width: 18%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 50px;
  }
`;

export const LoginLine = styled.div`
  width: 28.8%;
  height: 2px;
  align-self: stretch;
  background-color: #d1d1d1;
  margin: auto;
  @media (max-width: ${secondBreakPoint}px) {
    width: 18%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const CardContainer = styled.div`
  display: ${({ isVisible = true }) => (isVisible === true ? 'flex' : 'none')};
  flex-flow: row wrap;
  background-color: ${colors.WHITE};
  box-shadow: 0 2px 4px 0 rgba(220, 220, 220, 0.5);
  border: solid 1px #dcdcdc;
  width: calc(100% - 270px);
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
    border: ${({ isForm = false }) => (isForm ? 'solid 1px #dcdcdc' : 'none')};
  }
`;

export const FormContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  @media (max-width: ${thirdBreakPoint}px) {
    width: 100%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CTA = Button.extend`
  flex: 0 0 auto;
  letter-spacing: 1px;
  position: absolute;
  right: 30px;
  bottom: -17px;
  z-index: 2;
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    padding: 12px 20px;
    font-size: 12px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${colors.BORDER_COLOR_1};
`;

export const VerticalLine = styled.div`
  width: 2px;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${colors.BORDER_COLOR_1};
  @media (max-width: ${QuoteSecondBreakPoint}px) {
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const VerticalLine2 = styled.div`
  width: 2px;
  flex: 0 0 auto;
  align-self: stretch;
  background-color: ${colors.BORDER_COLOR_1};
  @media (max-width: ${QuoteSecondBreakPoint}px) {
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const Quote = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  padding: 0 25px;
  align-items: center;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    padding: 0;
  }
`;
export const QuoteLogo = styled.img`
  flex: 0 0 auto;
  width: 226px;
  height: 94px;
  margin: 0 15px;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    width: 175px;
    height: 60px;
  }
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    width: 125px;
    height: 50px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 226px;
    height: 94px;
    margin: 10px auto;
  }
`;
export const Payments = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 260px);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px auto;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    width: calc(100% - 205px);
  }
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    width: calc(100% - 155px);
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;
export const Tenure = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  width: calc(49% - 10px);
  align-items: center;
  justify-content: center;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    padding: 15px 0;
  }
`;
export const Label = Text.extend`
  text-align: center;
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    font-size: 12px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    line-height: 1.5;
  }
`;

export const Value = Text.extend`
  text-align: center;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    font-size: 30px;
    margin-right: 15px;
  }
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    font-size: 24px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 40px;
  }
`;
export const OptionLabel = Text.extend`
  display: block;
  margin-right: 25px;
  text-align: center;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    font-size: 20px;
    margin-right: 15px;
  }
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    font-size: 14px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    font-size: 24px;
  }
`;
export const OptionValue = Text.extend`
  text-align: center;
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    font-size: 20px;
  }
  @media (max-width: ${QuoteSecondBreakPoint}px) {
    font-size: 14px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    display: block;
    width: 100%;
    font-size: 28px;
  }
`;
export const InnerValue = Text.extend`
  @media (max-width: ${QuoteFirstBreakPoint}px) {
    font-size: 15px;
    margin-right: 15px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 20px;
  }
`;
export const SelectedOptions = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  margin: 20px auto;
`;
export const Option = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: ${lastBreakPoint}px) {
    padding: 15px 0;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 40px auto 0;
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
  cursor: pointer;
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

export const FormSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
  width: 50%;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    box-sizing: border-box;
    margin: 20px auto 0;
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
  background-color: ${colors.GRAY6};
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 600;
  color: ${colors.BOXED_TEXT};
  border: 0;
  margin: 12px 0;
  margin-right: ${({ marginRight = 0 }) => marginRight};
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 0;
    width: 100%;
  }
`;

export const LoginCTA = Button.extend`
  flex: 0 0 auto;
  @media (max-width: ${firstBreakPoint}px) {
    margin: 0 auto;
    font-size: 14px;
  }
`;

export const SignUpCTA = Button.extend`
  flex: 0 0 auto;
  @media (max-width: ${firstBreakPoint}px) {
    margin: auto;
    font-size: 14px;
    padding: 14px 22px;
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

export const MiddleContainer = styled.div`
  flex: 0 0 auto;
  width: 15%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  @media (max-width: ${lastBreakPoint}px) {
    flex-flow: row nowrap;
    width: 100%;
    box-sizing: border-box;
    margin: 20px auto;
  }
`;
export const LoginContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  margin-bottom: 50px;
`;

export const LoginSection = styled.div`
  display: ${({ isVisible = false }) => (isVisible === true ? 'flex' : 'none')};
  flex-flow: row wrap;
`;
export const SignFormContainer = styled.div`
  flex: 0 0 auto;
  margin: 20px auto;
  display: ${({ isVisible = false }) => (isVisible === true ? 'flex' : 'none')};
  justify-content: center;
`;

export const OrLine = styled.div`
  width: 2px;
  height: 50px;
  background-color: ${colors.BORDER_COLOR_1};
  @media (max-width: ${lastBreakPoint}px) {
    width: 100px;
    height: 2px;
  }
`;

export const FormHeading = Text.extend`
  padding-bottom: 10px;
`;
