import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

const firstBreakPoint = '840px';
const secondBreakPoint = '500px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle2 = StyledText.extend`
  margin-bottom: 16px;
  font-size: 36px;
  @media (max-width: ${secondBreakPoint}) {
    font-size: 30px;
  }
`;
export const TextStyle3 = StyledText.extend`
  margin-top: 16px;
  font-weight: 600;
  @media (max-width: ${firstBreakPoint}) {
    margin-top: 20px;
  }
`;
export const TextStyle4 = StyledText.extend`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: ${firstBreakPoint}) {
    margin-bottom: 0px;
  }
`;

export const Container = styled.div`
  background-color: ${colors.SECTION_BK_COLOR_5};

  @media (max-width: ${firstBreakPoint}) {
    height: auto;
    padding-bottom: 20px;
  }
`;

export const HeadingStyle = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 43px;
  opacity: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Circle = styled.div`
  width: 222px;
  height: 222px;
  border-radius: 111px;
  margin-top: 20px;
  align-self: stretch;
  background-color: ${colors.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ image }) => (image ? image : 'none')});
  background-repeat: ${({ repeat }) => (repeat ? 'repeat-x' : 'no-repeat')};
  background-position: center;
`;

export const IconImage = styled.img`
  opacity: 0.5;
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 12vw;
  margin-right: 12vw;
  padding-bottom: 20px;
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    height: auto;
  }
`;
