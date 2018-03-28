import styled from 'styled-components';
import Text from '../../utils/text';
import colors from '../../utils/colors';
import Button from '../../utils/button';
import Images from '../../utils/images';

const firstBreakPoint = 1193;
const secondBreakPoint = 768;

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  flex: 0 0 auto;
  height: 330px;
  width: 100%;
  background: ${`url(${Images.YOUNGCOUPLE}) no-repeat`};
  background-color: rgba(104, 103, 104, 1);
  background-blend-mode: multiply;
  background-size: cover;
`;

export const CTAContainer = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  background-color: ${colors.FOOTER_BG};
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const InnerTextContainer = styled.div`
  flex: 0 0 auto;
  width: 38%;
  padding-right: 40px;
  @media (max-width: ${secondBreakPoint}px) {
    width: 90%;
    padding-bottom: 30px;
    padding-right: 0;
  }
`;

export const CTA = Button.extend`
  @media (max-width: ${firstBreakPoint}px) {
    height: 40px;
    font-size: 16px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    height: 40px;
    font-size: 14px;
  }
`;

export const PrimaryText = Text.extend`
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 16px;
  }
`;

export const PrimaryText1 = Text.extend`
  display: inline-block;
  padding: 6% 20%;
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 16px;
    padding: 15% 20%;
  }
`;

export const SecondaryText = Text.extend`
  display: inline-block;
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 16px;
  }
`;
