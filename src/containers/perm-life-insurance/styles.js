import styled from 'styled-components';
import Text from '../../utils/text.js';
const firstBreakPoint = 768;
const secondBreakPoint = 375;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
`;

export const PolicyText = Text.extend`
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 18px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 15px;
  }
`;
