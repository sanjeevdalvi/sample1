import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';
import Button from '../../utils/button';

const firstBreakPoint = '1066px';
const secondBreakPoint = '930px';
const thirdBreakPoint = '500px';

export const Container = styled.div`
  display: flex;
  height: 405px;
  align-items: stretch;
  justify-content: space-evenly;
  flex-direction: ${({ imageFirst }) =>
    imageFirst === '1' ? 'row' : 'row-reverse'};
  @media (max-width: ${firstBreakPoint}) {
    height: 500px;
  }
  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    height: 711px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    height: auto;
  }
`;

export const ImageContainer = styled.div`
  flex-basis: 100%;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: rgba(0, 93, 99, 0.49);
  background-blend-mode: multiply;
  @media (max-width: ${secondBreakPoint}) {
    flex-basis: 80%;
    height: 68vw;
  }
  @media (max-width: ${thirdBreakPoint}) {
    flex-direction: column;
    flex-basis: 60%;
  }
`;

export const TextContainerMain = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;

  background-color: ${colors.MOBILE_HEADER_BG};
`;

export const TextSection = styled.div`
  margin-left: 5vw;
  margin-right: 5vw;
  padding-top; 20px;
  
  @media (max-width: ${firstBreakPoint}) {height:auto;}
`;

export const TextContainerPara = styled.div`
  margin-top: 30px;
  line-height: 1.71;
`;
export const HeadingStyle = StyledText.extend`
  @media (max-width: ${firstBreakPoint}) {
  }
  @media (max-width: ${secondBreakPoint}) {
  }
  @media (max-width: ${thirdBreakPoint}) {
  }
`;

export const ContactUsButton = Button.extend`
  border: 2px solid ${colors.WHITE};
  line-height: 27px;
  align-self: center;
  margin-top: 30px;
  padding-right: 41px;
  padding-left: 41px;

  border: solid 2px ${colors.WHITE};
  @media (max-width: ${secondBreakPoint}) {
    margin-bottom: 20px;
  }
`;
