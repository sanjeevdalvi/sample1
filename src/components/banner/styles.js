import styled from 'styled-components';
import Text from '../../utils/text';

const secondBreakPoint = '650px';
const lastBreakPoint = '485px';

export const Container = styled.div`
  height: 247px;
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Heading = Text.extend`
  font-size: 48px;
  font-weight: bold;
  line-height: 1;
  width: 100%;
  box-sizing: border-box;
  padding-left: ${({ paddingLeft = 0 }) => paddingLeft};
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : '104px')};
  @media (max-width: ${lastBreakPoint}) {
    padding-left: 0;
    text-align: center;
  }
`;

export const HeadingContainer = styled.div`
  margin: 0 auto;
  display: flex;
  @media (max-width: ${secondBreakPoint}) {
    margin-left: 15vw;
  }
  @media (max-width: ${lastBreakPoint}) {
    margin-left: 0;
  }
`;
