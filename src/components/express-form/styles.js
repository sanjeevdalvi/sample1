import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';

const lastBreakPoint = 475;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const HeadingContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  @media (max-width: ${lastBreakPoint}px) {
  }
`;

export const MainHeading = Text.extend``;

export const SubHeading = Text.extend``;

export const SubText = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-top: 10px;
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
`;

export const FormSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
`;

export const InputContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`;

export const Label = styled.label`
  flex: 0 0 auto;
  width: ${({ width = '50%' }) => `${width}`};
  box-sizing: border-box;
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
  margin-left: ${({ marginLeft = 0 }) => marginLeft};
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 0;
    margin-left: 0;
    width: 100%;
  }
`;

export const CTA = Button.extend`
  flex: 0 0 auto;
  width: 110px;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 20px auto;
  }
`;
