import styled from 'styled-components';
import Text from '../../utils/text';
import colors from '../../utils/colors';

const firstBreakPoint = 1175;
const secondBreakPoint = 920;
const thirdBreakPoint = 697;
const fourthBreakPoint = 515;
const lastBreakPoint = 475;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  flex: 3;
  padding: 5vw 3vw 2.5vw 10vw;
  box-sizing: border-box;
  @media (max-width: ${secondBreakPoint}px) {
    padding: 5vw 2vw 2.5vw 5vw;
  }
  @media (max-width: ${fourthBreakPoint}px) {
    padding: 3vw 1vw 1.5vw 3vw;
  }
  @media (max-width: ${lastBreakPoint}px) {
    flex: 0 0 auto;
    width: 100vw;
  }
`;

export const ImageContainer = styled.div`
  flex: 2;
  @media (max-width: ${lastBreakPoint}px) {
    flex: 0 0 auto;
    width: 100vw;
    height: 409px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  background-color: ${colors.GRAY};
`;

export const HeaderContainer = styled.div`
  display flex; 
  width :100%;
  justify-content: center;
  margin-bottom: 20px;
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
export const SubHeader = Text.extend`
  display: inline-block;
  width: 100%;
  padding: 0 10% 30px;
  box-sizing: border-box;
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 14px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    font-size: 13px;
  }
`;
export const GridContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 20px;
`;
export const GridItem = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  align-items: center;
  @media (max-width: ${lastBreakPoint}px) {
    width: 50%;
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
`;
