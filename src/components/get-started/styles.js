import styled from 'styled-components';
import colors from '../../utils/colors';
import Button from '../../utils/button';
import StyledText from '../../utils/text.js';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${colors.FOOTER_BG};
  padding-top: 30px;
  padding-bottom: 30px;

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    flex-direction: column;
  }
`;

export const HeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextStyle1 = StyledText.extend`
  flex: 0.82;
  font-weight: 600;
`;

export const TextStyle2 = StyledText.extend`
  margin-bottom: 30px;

  font-weight: 600;
`;

export const GetStartedButton = Button.extend`
  margin-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 30px;
  padding-right: 30px;

  @media (max-width: ${({ breakPoint }) => breakPoint}) {
    margin-top: 20px;
  }
`;
