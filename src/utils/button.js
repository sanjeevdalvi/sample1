// Sample usage : <StyledButton color={'#0ba3ad'} fontWeight={600} fontSize={'30px'} fontFamily={'Palatino'}>Text component</StyledButton>

import styled from 'styled-components';
import colors from './colors';

const StyledButton = styled.button`
  border: none;
  shadow: none;
  border-radius: ${({ radius = 999 }) => `${radius}px`};
  padding: ${({ padding = '10px' }) => padding};
  margin: ${({ margin = '0' }) => margin};
  background-color: ${({ bgColor = colors.WHITE }) => bgColor};
  font-family: ${({ fontFamily = "'Open Sans', sans-serif" }) => fontFamily};
  font-size: ${({ fontSize = 12 }) => `${fontSize}px`};
  font-weight: ${({ fontWeight = '400' }) => fontWeight};
  color: ${({ color = colors.HEADER_FONT_COLOR }) => color};
  text-align: ${({ textAlign = 'center' }) => textAlign};
  line-height: ${({ lineHeight = 1 }) => lineHeight};
  cursor: pointer;
  outline: none;
`;

export default StyledButton;
