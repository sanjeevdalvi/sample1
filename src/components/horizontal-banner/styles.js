import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';

const firstBreakPoint = '1077px';
const secondBreakPoint = '880px';
const thirdBreakPoint = '600px';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 125px;
  background-color: #005d63;
  display: ${({ HideCTA }) => (HideCTA === true ? 'none' : 'flex')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: ${thirdBreakPoint}) {
    height: auto;
    padding: 30px 10px;
    box-sizing: border-box;
  }
`;

export const BottomBoxText = Text.extend`
  margin-right: 30px;
  width: 500px;
  line-height: 1.33;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 24px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 20px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    text-align: center;
    display: inline-block;
    line-height: 32px;
    margin-bottom: 20px;
    width: 100%;
    margin-right: 0;
  }
`;

export const GetStartedButton = Button.extend`
  padding-left: 30px;
  padding-right: 30px;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 18px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 16px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    padding: 10px 33.5px;
  }
`;
