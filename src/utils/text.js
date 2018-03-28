// Sample usage : <Text color={'#0ba3ad'} fontWeight={600} fontSize={'30px'} fontFamily={'Palatino'}>Text component</Text>

import styled from 'styled-components';
import colors from './colors';

const StyledText = styled.span`
  font-family: ${({ fontFamily = "'Open Sans', sans-serif" }) => fontFamily};
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  font-weight: ${({ fontWeight = '400' }) => fontWeight};
  color: ${({ color = colors.HEADER_FONT_COLOR }) => color};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  line-height: ${({ lineHeight = 1.33 }) => lineHeight};
  letter-spacing: ${({ letterSpacing = 0.1 }) => `${letterSpacing}px`};
`;

export default StyledText;
