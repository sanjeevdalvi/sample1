import styled from 'styled-components';
import Text from '../../utils/text';
import colors from '../../utils/colors';

const secondBreakPoint = 920;
const thirdBreakPoint = 697;
const fourthBreakPoint = 515;
const lastBreakPoint = 425;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  box-sizing: border-box;
  margin: 50px auto 20px;
`;

export const HeaderContainer = styled.div`
  display flex; 
  width :100%;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  @media (max-width : ${lastBreakPoint}px) {
    margin-bottom: 0;
  }
`;

export const Line = styled.div`
  width: 25%;
  height: 3px;
  background-color: ${colors.GRAY3};
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const HeaderText = styled.div`
  margin: 0 10px;
`;

export const PrimaryHeader = Text.extend`
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 29px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    font-size: 24px;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    font-size: 20px;
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
    font-size: 20px;
  }
`;

export const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
  box-sizing: border-box;
  margin: 20px 10%;
  justify-content: space-around;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 0 10% 20px;
  }
`;

export const GridItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  align-items: center;
  width: 30%;
  @media (max-width: ${lastBreakPoint}px) {
    width: 200px;
    margin: 5% auto;
  }
`;

export const PrimaryText = Text.extend``;
export const SecondaryText = Text.extend``;
