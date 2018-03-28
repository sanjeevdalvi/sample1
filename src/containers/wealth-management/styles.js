import styled from 'styled-components';
import StyledText from '../../utils/text.js';

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
`;

// Following styles are for ProtectEarning component heading
const firstBreakPointProtectEarning = '840px';
const secondBreakPointProtectEarning = '600px';

export const TextStyle1 = StyledText.extend`
  margin-bottom: 10px;
`;
export const TextStyle2 = StyledText.extend`
  margin-bottom: 10px;
  font-weight: bold;

  letter-spacing: 3px;
  @media (max-width: ${secondBreakPointProtectEarning}) {
    font-size: 24px;
    padding-right: 10px;
  }
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
    margin-left: 0;
    margin-right: 0;
  }
`;
export const HeadingSection2 = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
export const Line = styled.div`
  width: 192px;
  height: 2px;
  margin-top: 20px;
  align-self: stretch;
  background-color: #cbcbcb;
  @media (max-width: ${firstBreakPointProtectEarning}) {
    width: 105px;
  }
  @media (max-width: ${secondBreakPointProtectEarning}) {
    display: none;
  }
`;
