import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';

const styles = {};

const firstBreakPoint = '1077px';
const secondBreakPoint = '880px';
const thirdBreakPoint = '600px';
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  }
`;

export const GridItem = styled.div`
  align-self: center;
  justify-self: center;
  background-color: ${colors.SECTION_BK_COLOR_1};
  width: 50%;
  height: 273px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: ${({ order }) => order};
  @media (max-width: ${firstBreakPoint}) {
    width: 50%;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 50%;
  }
  @media (max-width: ${thirdBreakPoint}) {
    width: 100%;
    order: initial;
  }
`;

export const Box = styled.div`
  flex: 0 0 auto;
  width: 50%;
  height: auto;
  min-height: 273px;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  align-self: stretch;
  justify-self: stretch;
  order: ${({ order }) => order};
  @media (max-width: ${firstBreakPoint}) {
    width: 50%;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 50%;
  }
  @media (max-width: ${thirdBreakPoint}) {
    width: 100%;
    order: initial;
  }
`;

export const Box2Text = styled.div`
  display: flex;
  flex-flow: column nowrap;
  vertical-align: middle;
  padding-left: 60px;
  padding-right: 60px;
  max-width: 350px;
`;
export const Box2Title = Text.extend`
  padding-bottom: 10px;
`;

export const OrangeButton = Button.extend`
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 12px;
  padding-top: 12px;
  margin-top: 20px;
`;

export const BottomBox = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;

  padding-left: 9vw;
  padding-right: 9vw;
  background-color: ${colors.FOOTER_BG};
  display: ${({ HideCTA }) => (HideCTA === true ? 'none' : 'flex')};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: ${secondBreakPoint}) {
    height: auto;
    flex-direction: column;
    padding: 30px 10px;
    box-sizing: border-box;
  }
`;

export const BottomTextContainer = styled.div`
  display: inline;
  flex: 0.75;
  text-align: center;
  margin-right: ${({ boxTextMarginRight }) =>
    boxTextMarginRight ? boxTextMarginRight : '30px'};
`;

export const BottomBoxText = Text.extend`
  width: ${({ AppendToText }) => (AppendToText ? '455px' : 'auto')};
  line-height: 1.33;
  @media (max-width: ${firstBreakPoint}) {
    font-size: 24px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 22px;
    text-align: center;
    display: inline;
    line-height: 32px;
    margin-bottom: 20px;
    margin-right: 0;
  }
  @media (max-width: ${thirdBreakPoint}) {
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
    margin-top: 20px;
  }
  @media (max-width: ${thirdBreakPoint}) {
  }
`;

export default styles;
