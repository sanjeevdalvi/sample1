import styled from 'styled-components';
import Text from '../../utils/text.js';
import Button from '../../utils/button.js';

const firstBreakPoint = 890;
const lastBreakPoint = 485;

export const Container = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  margin: 30px auto 70px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const HeaderConatiner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
export const HeadingLine = styled.div`
  height: 2px;
  width: calc(50% - 117.5px);
  background-color: #d1d1d1;
`;
export const HeadingText = Text.extend`
  font-size: 36px;
  color: #000000;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const InputGroup = styled.div`
  margin: 20px 50px 30px;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 0 0 20px;
  }
`;

export const RadioGroup = styled.div`
  margin: 5px 0 0 30px;
  height: 150px;
  display: flex;
  flex-flow: column wrap;
  @media (max-width: ${lastBreakPoint}px) {
    height: auto;
    margin: 0 30px;
  }
`;

export const Radio = styled.div`
  height: 50px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 180px;
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  flex: 0 0 auto;
  width: ${({ width = '50%' }) => `${width}`};
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
    color: black;
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
  letter-spacing: 1px;
  margin: 0 auto 20px;
  font-weight: 400;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 20px auto;
  }
`;

export const SubText = Text.extend`
  flex: 0 0 auto;
  width: ${({ width = '100%' }) => `${width}`};
  padding-bottom: 15px;
  font-weight: 400;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    display: inline-block;
    text-align: center;
    padding: 15px 0 8px;
  }
`;

export const DisclaimerCTAContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

export const DisclaimerText = Text.extend`
  @media (max-width: ${lastBreakPoint}px) {
    width: 61%;
  }
`;
