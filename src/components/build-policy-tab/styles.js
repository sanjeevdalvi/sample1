import styled from 'styled-components';
import Text from '../../utils/text';
import colors from '../../utils/colors';

const firstBreakPoint = '1000px';
const secondBreakPoint = '1000px';
const lastBreakPoint = '650px';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const StepGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 62px;
  margin-top: 20px;
  margin-bottom: 10px;

  border: solid 6px ${colors.MOBILE_HEADER_BG};
  align-self: stretch;
  background-color: ${colors.SECTION_BK_COLOR_2};

  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${({ image }) => (image ? image : 'none')});
  background-repeat: ${({ repeat }) => (repeat ? 'repeat-x' : 'no-repeat')};
  background-position: center;
  background-size: 50%;

  @media (max-width: ${lastBreakPoint}) {
    width: 34px;
    height: 34px;
    border-radius: 34px;
  }
`;

export const Line = styled.div`
  z-index: 0;
  height: 6px;
  width: ${({ adjust }) => (adjust ? '135px' : '135px')};
  margin-left: ${({ adjust }) => (adjust ? '-33px' : '-2px')};
  margin-right: -2px;

  opacity: ${({ opacity }) => opacity};
  align-self: center;
  background-color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${firstBreakPoint}) {
    width: 100px;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 50px;
  }

  @media (max-width: ${lastBreakPoint}) {
    width: 30px;
    margin-left: ${({ adjust }) => (adjust ? '-24px' : '-2px')};
    height: 2px;
  }
`;

export const StepStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ opacity }) => opacity};
  ${({ opacity }) => (opacity === 1 ? 'cursor: pointer' : '')};
  z-index: 10;
`;

export const StepName = Text.extend`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: ${lastBreakPoint}) {
    font-size: 12px;
  }
`;
