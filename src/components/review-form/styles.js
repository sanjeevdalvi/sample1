import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';

const secondBreakPoint = 1126;
const thirdBreakPoint = 980;
const lastBreakPoint = 475;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const HeadingContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const MainHeading = Text.extend`
  width: 48%;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 6px;
  color: #13a89e;
  display: block;
  margin: 0 auto;
  @media (max-width: ${secondBreakPoint}px) {
    width: 70%;
    text-align: center;
    height: auto;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    width: 90%;
    text-align: center;
    height: auto;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    text-align: center;
    height: auto;
  }
`;

export const SubText = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-top: 10px;
  height: auto;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const DisclaimerCTAContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`;

export const FormSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

export const InputContainer = styled.div`
  flex: 0 0 auto;
  width: 55%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 15px auto 10px;
  align-items center;
  @media (max-width: ${secondBreakPoint}px) {
    width: 70%;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    width: 90%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  flex: 0 0 auto;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  width: ${({ width = '100%' }) => width};
  height: 38px;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 12px;
  font-weight: 600;
  color: #8d8d8d;
  border: solid 1px ${colors.BORDER_COLOR};
  margin: 12px 0;
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

export const CTA = Button.extend`
  flex: 0 0 auto;
  letter-spacing: 3px;
  margin: 0 auto;
  letter-spacing: 3px;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 20px auto;
    font-size: 18px;
    padding: 10px 25px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ bgColor = false }) => (bgColor === true ? '30px' : '0 30px')};
  border-radius: 5px;
  background-color: ${({ bgColor = false }) =>
    bgColor === true ? 'rgba(19, 168, 158, 0.15)' : 'transparent'};
  display: flex;
  flex-flow: column nowrap;
  margin: 10px auto 0;
  @media (max-width: ${thirdBreakPoint}px) {
    padding: ${({ bgColor = false }) => (bgColor === true ? '15px 20px' : '0')};
  }
  @media (max-width: ${lastBreakPoint}px) {
    padding: ${({ bgColor = false }) => (bgColor === true ? '10px 20px' : '0')};
  }
`;

export const Disclaimer1 = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding: 10px 0;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    font-size: 20px;
  }
`;

export const Disclaimer2 = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding: 10px 0 35px 0;
  margin: 0 auto;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const Disclaimer3 = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-top: 20px;
  padding-bottom: 45px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const Disclaimer4 = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-top: 20px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;
