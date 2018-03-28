import styled from 'styled-components';
import StyledText from '../../../utils/text.js';
import colors from '../../../utils/colors';

const lastBreakPoint = '650px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle3 = StyledText.extend`
  font-size: 24px;
  font-weight: bold;
  line-height: 1.17;
  letter-spacing: 4px;
  text-align: center;
  margin-top: 30px;

  color: ${colors.MOBILE_HEADER_BG};
`;

export const SelectBoxStyle = styled.div`
  display: flex;
  justify-content: start;
  width: 23vw;
  height: auto;
  border-top-left-radius: 4.8px;
  border-top-right-radius: 4.8px;
  position: relative;
  margin-right: 40px;

  background-color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${lastBreakPoint}) {
    width: 70vw;
    margin-left: 20px;
    margin-right: 20px;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

export const SelectDisplayStyle = styled.div`
  color: white;
  padding-left: 20px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 25px;
  font-family: 'OpenSans', sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
`;

export const UpArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid white;
  margin-bottom: 3px;
`;

export const DownArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid white;
`;

export const SelectIconStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 20px;
  margin-top: 14px;
  z-index: 1;
`;

export const ListContainerStyle = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  display: none;
  z-index: 2;
  flex-direction: column;
  border-radius: 4.8px;
  background-color: ${colors.WHITE};
  box-shadow: 0 0 20px 0 ${colors.SHADOW_COLOR_3};
  border: solid 1.2px ${colors.BORDER_COLOR_2};
`;

export const ListItemStyle = styled.div`
  width: 100%;

  font-family: 'Lato';
  font-family: 'OpenSans', sans-serif;
  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${colors.FONT_COLOR_6};

  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 8px;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.GREY7};
`;
