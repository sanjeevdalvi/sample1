import styled from 'styled-components';
import checkMarkImage from '../../assets/images/check-circle.png';
import colors from '../../utils/colors';
import StyledText from '../../utils/text.js';

const firstBreakPoint = '800px';
const secondBreakPoint = '450px';

export const Container = styled.div`
  padding-bottom: 50px;
`;

export const HeadingContainer = styled.div`
  text-align: center;
  margin-top: 46px;

  @media (max-width: ${secondBreakPoint}) {
  }
`;

export const HeadingStyle = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 30px;
    line-height: 1.14;
    display: flex;
    flex-direction: column;
  }
`;

export const BoxHeadingStyle = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
    font-size: 30px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 30px;
    line-height: normal;
  }
`;

export const TextStyle1 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const GridContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-top: 46px;
  margin-left: 12vw;
  margin-right: 12vw;
  width: 90vw;
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    margin-left: 1vw;
    margin-right: 1vw;
  }
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 1vw;
    margin-right: 1vw;
  }
`;

export const InfoBox = styled.div`
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: space-evenly;
         flex-basis: 30%;
         margin-left: 20px;
         margin-bottom: 20px;
         height: 232px;
         padding-left: 5vw;
         padding-right: 5vw;
         padding-bottom: 6px;
         border-radius: 8px;
         background-color: ${colors.WHITE};
         box-shadow: 0 2px 4px 0 ${colors.SHADOW_COLOR};
         border: solid 1px ${colors.BORDER_COLOR_1};
         @media (max-width: ${firstBreakPoint}) { }
         @media (max-width: ${secondBreakPoint}) {{ margin-left: 10px;
          height: 206px;
         padding-left: 0;
         padding-right: 0;}`;

export const CheckMark = styled.div`
  width: 40px;
  height: 40px;

  background-image: url(${checkMarkImage});
  background-repeat: no-repeat;
  background-size: cover;
`;
