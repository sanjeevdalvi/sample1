import styled from 'styled-components';
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
    width: 90%;
    margin: 46px auto 0;
  }
`;

export const HeadingStyle = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
    font-size: 30px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 20px;
    line-height: 1.14;
  }
`;

export const BoxHeadingStyle = StyledText.extend`
  padding: 30px 0;
  line-height: 1.33;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 30px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 28px;
  }
`;

export const TextStyle1 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    margin: 0 auto;
    padding: 0 15px 20px;
  }
`;

export const GridContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: 46px auto 0;
  width: 90%;
  justify-content: center;
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
  }
  @media (max-width: ${secondBreakPoint}) {
  }
`;

export const InfoBox = styled.div`
         display: flex;
         flex-direction: column;
         align-items: center;
         flex-basis: 30%;
         margin-left: 20px;
         margin-bottom: 20px;
         padding-left: 5vw;
         padding-right: 5vw;
         padding-bottom: 26px;
         border-radius: 8px;
         background-color: ${colors.WHITE};
         box-shadow: 0 2px 4px 0 ${colors.SHADOW_COLOR};
         border: solid 1px ${colors.BORDER_COLOR_1};
         @media (max-width: ${firstBreakPoint}) { }
         @media (max-width: ${secondBreakPoint}) {{ margin-left: 10px;
         padding-left: 0;
         padding-right: 0;}`;
