import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';

const firstBreakPoint = 890;
const lastBreakPoint = 475;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const HeadingContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
`;

export const MainHeading = Text.extend`
  width: 100%;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 5px;
  text-align: center;
  color: #13a89e;
  display: inline-block;
`;

export const SubText = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-bottom: 10px;
  font-weight: 600;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const DisclaimerCTAContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: ${({ isPerm }) => (isPerm === true ? 'center' : 'flex-end')};
  position: relative;
  top: ${({ isPerm }) => (isPerm === true ? '180px' : '0')};
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

export const InputLeftContainer = styled.div`
  flex: 0 0 auto;
  width: ${({ width = '50%' }) => width};
  display: flex;
  flex-flow: ${({ product = '' }) =>
    product === 'perm' ? 'row wrap' : 'column nowrap'};
  box-sizing: border-box;
  padding: 30px 41px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    padding: 0;
    width: 100%;
  }
`;

export const InputRightContainer = styled.div`
  flex: 0 0 auto;
  width: 50%;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding: 30px 41px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    padding: 0;
  }
`;

export const InputGroup = styled.div`
  margin: ${({ product = '' }) =>
    product === 'perm' ? '20px 0 30px' : '0 0 30px'};
  width: ${({ product = '' }) => (product === 'perm' ? '50%' : 'auto')};
  @media (max-width: ${lastBreakPoint}px) {
    margin: 0 0 20px;
  }
`;

export const RadioGroup = styled.div`
  margin: 5px 0 0 30px;
`;

export const Radio = styled.div``;

export const Label = styled.label`
  flex: 0 0 auto;
  width: ${({ product, productWidth, width = '50%' }) =>
    product === 'perm' ? productWidth : width};
  margin-right: ${({ product = '' }) => (product === 'perm' ? '10px' : 0)};
  box-sizing: border-box;
  @media (max-width: ${firstBreakPoint}px) {
    width: 100%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const RadioLabel = styled.label`
  flex: 0 0 auto;
  width: ${({ width = '50%' }) => `${width}`};
  box-sizing: border-box;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 600;
  color: black;
  border: solid 1px #dadada;
  margin: 12px 0;
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  shadow: none;
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

export const InputRadio = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding: 10px 0 0 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #8d8d8d;
    font-family: 'Open Sans';
    font-size: 14px;
  }
  &:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 18px;
    height: 18px;
    border: 1px solid #13a89e;
    border-radius: 100%;
    background: #fff;
  }
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2cece;
    border-radius: 100%;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '';
    width: 12px;
    height: 12px;
    background: #13a89e;
    position: absolute;
    top: 14px;
    left: 4px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const InputCheck = styled.input`
  &:checked,
  &:not(:checked) {
    position: absolute;
    left: -9999px;
  }
  &:checked + label,
  &:not(:checked) + label {
    position: relative;
    padding: 10px 0 0 28px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #8d8d8d;
    font-family: 'Open Sans';
    font-size: 14px;
  }
  &:checked + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 18px;
    height: 18px;
    border: 1px solid #13a89e;
    background: #fff;
  }
  &:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 18px;
    height: 18px;
    border: 1px solid #d2cece;
    background: #fff;
  }
  &:checked + label:after,
  &:not(:checked) + label:after {
    content: '✓';
    width: 19px;
    height: 19px;
    background-color: #13a89e;
    position: absolute;
    top: 10px;
    left: 0;
    color: #fff;
    text-align: center;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  &:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  &:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
`;

export const CTA = Button.extend`
  flex: 0 0 auto;
  letter-spacing: 3px;
  align-self: right;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 20px auto;
  }
`;

export const DisclaimerText = Text.extend`
  color: #13a89e;
  font-size: 24px;
  line-height: 2.5;
  display: block;
  width: 100%;
  text-align: center;
`;
