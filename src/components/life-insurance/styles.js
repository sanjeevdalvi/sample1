import styled from 'styled-components';
import colors from '../../utils/colors';
import Button from '../../utils/button';
import StyledText from '../../utils/text.js';

const firstBreakPoint = '950px';
const secondBreakPoint = '700px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${({ bgImage }) => bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.LIFE_INS_SECTION_BK};
  background-blend-mode: overlay;
  padding-bottom: 50px;
  padding-top: 30px;
`;

export const HeadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 10vw;
  padding-right: 10vw;

  height: auto;
`;

export const TextStyle1 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
    font-size: 30px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 20px;
  }
`;

export const TextStyle2 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
    margin-bottom: 18px;
  }
  @media (max-width: ${secondBreakPoint}) {
    margin-bottom: 10px;
    margin-top: 20px;
  }
`;

export const TextStyle3 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
    margin-bottom: 18px;
  }
  @media (max-width: ${secondBreakPoint}) {
    margin-bottom: 25px;
    font-size: 22px;
  }
`;

export const TextStyle4 = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 18px;
  }
`;

export const GetStartedButton = Button.extend`
  padding-left: 30px;
  padding-right: 30px;
`;

export const BoxContainerStyle = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 30px;
  flex-wrap: wrap;
  height: 820px;

  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    margin-left: 0vw;
    width: auto;
    margin-right: 0vw;
    flex-wrap: wrap;
    align-items: center;
    height: auto;
    padding-top: 0px;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-items: center;
  width: 40%;
  padding: 35px;
  margin-left: 15px;
  margin-top: 15px;
  order: ${({ order = 'initial' }) => order};
  box-sizing: border-box;
  opacity: ${({ opacity = 1 }) => opacity};
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
  justify-content: space-around;
  @media (max-width: ${firstBreakPoint}) {
    width: 100%;
    order: ${({ verticalOrder = 'initial' }) => verticalOrder};
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const Image = styled.img`
  height: ${({ height }) => (height ? height : '153px')};
  width: auto;
`;
