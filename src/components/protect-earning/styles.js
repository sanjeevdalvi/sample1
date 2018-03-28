import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

import checkMarkImage from '../../assets/images/check-circle.png';

const firstBreakPoint = '840px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle3 = StyledText.extend`
  margin-top: 16px;
`;

export const Container = styled.div`
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '0px')};
  padding-bottom: 65px;
  background-color: ${colors.WHITE};
  display: flex;
  flex-direction: column;

  @media (max-width: ${firstBreakPoint}) {
    height: auto;
    margin-bottom: 30px;
  }
`;

export const CheckMark = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${checkMarkImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoBoxContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-left: 20px;
`;

export const InfoGridContainer = styled.div`
  text-align: center;
  display: flex;
  height: auto;
  align-self: stretch;
  align-items: stretch;
  justify-content: space-evenly;
  margin-top: 20px;
  margin-left: 9vw;
  margin-right: 9vw;
  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    height: auto;
  }
`;
