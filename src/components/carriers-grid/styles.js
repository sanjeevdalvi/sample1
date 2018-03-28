import styled from 'styled-components';
import colors from '../../utils/colors';

export const Heading = styled.div`
  line-height: 27px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 7px;
  text-align: left;
  color: ${colors.FONT_COLOR_5};
  margin: 10px auto;
  text-align: center;
`;

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
`;

export const CarrierContainer = styled.div`
  margin: 25px;
`;

export const CarrierLogo = styled.img`
  margin: 0;
`;
