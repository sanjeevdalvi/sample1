import styled from 'styled-components';
import colors from '../../utils/colors';
import Button from '../../utils/button';
import StyledText from '../../utils/text.js';

const firstBreakPoint = '666px';
const secondBreakPoint = '950px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${colors.WHITE};
`;

export const HeadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 12vw;
  padding-right: 12vw;
  background-color: ${colors.FOOTER_BG};
  padding-top: 25px;
  padding-bottom: 25px;

  height: auto;
  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    padding: 20px;
  }
`;

export const TextStyle1 = StyledText.extend`
  
 flex: 0.82; 
 font-weight: 600;
  @media (max-width: ${firstBreakPoint}) {
    margin-top; 20px;
  }
`;

export const TextStyle2 = StyledText.extend`
  margin-bottom: 30px;

  font-weight: 600;
  @media (max-width: ${secondBreakPoint}) {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: ${firstBreakPoint}) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const GetStartedButton = Button.extend`
  margin-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: ${firstBreakPoint}) {
    margin-left: 0px;
    font-size: 18px;
    margin-top: 20px;
  }
`;

export const BoxContainerStyle = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 75px 30px;
  @media (max-width: ${secondBreakPoint}) {
    justify-content: space-evenly;
    padding-left: 12px;
    padding-right: 12px;
  }
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    height: auto;
  }
`;

export const BoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-items: center;
  padding-bottom: 20px;
  flex: 1;
  @media (max-width: ${firstBreakPoint}) {
    width: 100%;
    padding-bottom: 40px;
  }
`;

export const Image = styled.img`
  height: ${({ height }) => (height ? height : '120px')};
  width: auto;
  margin-bottom: 30px;
  @media (max-width: ${firstBreakPoint}) {
    margin-bottom: 10px;
  }
  @media (max-width: ${firstBreakPoint}) {
    height: 100px;
  }
`;

export const StyledTextSub = StyledText.extend`
  width: 90%;
  margin: 0 auto;
`;
