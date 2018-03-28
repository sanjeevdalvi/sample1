import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';

const firstBreakPoint = 933;
const secondBreakPoint = 800;
const thirdBreakPoint = 598;
const fourthBreakPoint = 400;
const lastBreakPoint = 350;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-bottom: 84px;
  @media max-width(${firstBreakPoint}px) {
    margin-top: 55px;
    margin-bottom: 68px;
  }
  @media (max-width:${secondBreakPoint}px) {
    margin-top: 40px;
    margin-bottom: 45px;
  }
  @media (max-width:${thirdBreakPoint}px) {
    margin-top: 13px;
    margin-bottom: 13px;
  }
`;

export const InsuranceNavigator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${thirdBreakPoint}px) {
    margin: 0 7px;
    background-color: #ececec;
    border-radius: 8px;
    padding: 12px;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    margin: 7px;
    padding: 7px;
  }
`;

export const InsuranceContainer = styled.div`
  display: ${({ isHidden = false }) => (isHidden ? 'none' : 'flex')};
  flex-direction: row;
`;

export const Image = styled.img`
  height: 52px;
  width: auto;
  @media max-width(${firstBreakPoint}px) {
    height: 45px;
  }
  @media (max-width:${secondBreakPoint}px) {
    height: 40px;
  }
  @media (max-width:${fourthBreakPoint}px) {
    max-height: 57px;
  }
  @media (max-width:${lastBreakPoint}px) {
    max-height: 30px;
  }
`;

export const Line = styled.div`
  width: 2px;
  align-self: stretch;
  background-color: #dadada;
  margin: 0 22px;
  @media max-width(${firstBreakPoint}px) {
    margin: 0 15px;
  }
  @media (max-width:${secondBreakPoint}px) {
    margin: 0 8px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    display: none;
  }
`;

export const CustomText = Text.extend`
  max-width: 175px;
  margin-top: 21px;
  margin-bottom: 16px;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 15px;
    max-width: calc(20vw - 40px);
  }
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 12px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    display: none;
  }
`;

export const CustomButton = Button.extend`
  white-space: nowrap;
  outline: none;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 12px;
    padding: 7px 25px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 10px;
    padding: 7px 20px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    display: none;
  }
`;
