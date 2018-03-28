import styled from 'styled-components';
import colors from '../../utils/colors';
import images from '../../utils/images';

import StyledText from '../../utils/text.js';

const firstBreakPoint = '900px';
const secondBreakPoint = '700px';

export const ArrowBack = styled.div`
  min-width: 21px;
  height: 21px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 10px;
  background-image: url(${images.arrowBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: ${secondBreakPoint}) {
    background-image: url(${images.arrowDownImage});
    width: 32px;
    height: 30px;
    margin-bottom: 15px;
    align-self: center;
  }
`;

export const Container = styled.div`
  padding-bottom: 20px;
  background-color: ${colors.SECTION_BK_COLOR_1};
  @media (max-width: ${secondBreakPoint}) {
    height: auto;
    padding-bottom: 40px;
  }
`;

export const HeadingStyle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding-top: 43px;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: ${firstBreakPoint}) {
    margin-left: 2vw;
    margin-right: 3vw;
  }
`;

export const TextStyle1 = StyledText.extend`
  margin-bottom: 15px;
`;
export const TextStyle2 = StyledText.extend`
  line-height: 1.71;
`;

export const Line = styled.div`
  width: 205px;
  height: 2px;
  margin-top: 20px;
  align-self: stretch;
  background-color: ${colors.GRAY3};
  @media (max-width: ${firstBreakPoint}) {
    width: 105px;
  }
  @media (max-width: ${secondBreakPoint}) {
    display: none;
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-around;
  padding-top: 43px;

  margin-left: 10vw;
  margin-right: 8vw;
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    justify-content: space-evenly;
    height: auto;
    padding-bottom: 30px;
  }
`;

export const StepStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  flex: 1;
  margin-bottom: 55px;
  height: auto;
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 5vw;
    margin-right: 5vw;
    margin-bottom: 10px;
  }
`;
