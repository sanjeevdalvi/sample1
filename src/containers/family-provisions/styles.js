import styled from 'styled-components';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
`;

// Following styles are for ProtectEarning component heading
const firstBreakPointProtectEarning = '840px';
const secondBreakPointProtectEarning = '600px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
  @media (max-width: ${secondBreakPointProtectEarning}) {
    font-size: 30px;
    line-height: 1.2;
  }
`;
export const TextStyle2 = StyledText.extend`
  margin-bottom: 10px;
  letter-spacing: 3px;
`;

export const TextStyle3 = StyledText.extend`
  font-size: 24px;
  letter-spacing: 2.4px;
  text-align: center;
  font-weight: 600;
  color: ${colors.WHITE};
`;
export const HeadingSection1 = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-top: 43px;
  margin-left: 12vw;
  margin-right: 12vw;
  @media (max-width: ${secondBreakPointProtectEarning}) {
    margin-left: 8vw;
    margin-right: 8vw;
  }
`;

export const HeadingSection2 = styled.div`
  text-align: center;
  display: inline-block;
  padding-left: 22vw;
  padding-right: 22vw;
  @media (max-width: ${secondBreakPointProtectEarning}) {
    padding-left: 9vw;
    padding-right: 8vw;
  }
`;
export const Line = styled.div`
  width: 192px;
  height: 2px;
  margin-top: 20px;
  align-self: stretch;
  background-color: ${colors.GRAY3};
  @media (max-width: ${firstBreakPointProtectEarning}) {
    width: 105px;
  }
  @media (max-width: ${secondBreakPointProtectEarning}) {
    display: none;
  }
`;
