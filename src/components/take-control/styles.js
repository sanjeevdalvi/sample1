import styled from 'styled-components';
import Text from '../../utils/text';

const firstBreakPoint = 1175;
const secondBreakPoint = 920;
const thirdBreakPoint = 697;
const fourthBreakPoint = 515;
const lastBreakPoint = 425;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  padding: 5% 10%;
  box-sizing: border-box;
  @media (max-width: ${secondBreakPoint}px) {
    padding: 5% 5%;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    padding: 3% 3%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display flex; 
  width :100%;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width : ${lastBreakPoint}px) {
    margin-bottom: 10px;
  }
`;
export const PrimaryHeader = Text.extend`
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 29px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    font-size: 24px;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    font-size: 18px;
  }
`;
export const SecondaryHeader = Text.extend`
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 29px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    font-size: 24px;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    font-size: 18px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
  justify-content: space-between;
  padding-top: 25px;
  @media (max-width: ${thirdBreakPoint}px) {
    padding-top: 0;
  }
  @media (max-width: ${lastBreakPoint}px) {
    padding-top: 0;
  }
`;

export const GridItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  align-items: center;
  width: 30%;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const GridImage = styled.img`
  flex: 0 0 auto;
  width: 78px;
  height: 78px;
  margin: 0 30px 20px;
  object-fit: contain;
  @media (max-width: ${firstBreakPoint}px) {
    width: 55px;
    height: 55px;
    margin: 0 25px 20px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    width: 38px;
    height: 38px;
    margin: 15px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 58px;
    height: 58px;
    margin: 20px auto;
  }
`;

export const GridText = Text.extend`
  flex: 0 0 auto;
  @media (max-width: ${thirdBreakPoint}px) {
    font-size: 13px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 60%;
    margin-bottom: 20px;
  }
`;
