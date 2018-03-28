import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

const lineBreakPoint = '1171px';
const firstBreakPoint = '950px';
const secondBreakPoint = '850px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle2 = StyledText.extend`
  margin-top: 16px;
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  line-height: 1.33;
`;
export const TextStyle3 = StyledText.extend`
  margin-top: 16px;
  line-spacing: 1px;
  letter-spacing: 3px;
`;
export const FooterSection = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 43px;
  margin-left: 12vw;
  margin-right: 12vw;

  @media (max-width: ${secondBreakPoint}) {
    padding-bottom: 40px;
    margin-left: 3vw;
    margin-right: 3vw;
  }
`;

export const Container = styled.div`
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${colors.MOBILE_HEADER_BG};
  padding-top: 25px;
  padding-bottom: 25px;

  mix-blend-mode: multiply;
  @media (max-width: ${firstBreakPoint}) {
    height: auto;
    margin-bottom: 30px;
  }
`;

export const Line = styled.div`
  width: 3px;
  height: 163px;
  margin-top: 20px;

  background-color: ${colors.WHITE};
  @media (max-width: ${lineBreakPoint}) {
    height: 200px;
  }
  @media (max-width: ${secondBreakPoint}) {
    display: none;
  }
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  align-self: stretch;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-left: 10vw;
  margin-right: 10vw;
  @media (max-width: ${firstBreakPoint}) {
    margin-left: 1vw;
    margin-right: 1vw;
  }
  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    height: auto;
  }
`;
