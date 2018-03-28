import styled from 'styled-components';
import Text from '../../utils/text';
import Button from '../../utils/button';
import colors from '../../utils/colors';
const styles = {};

const firstBreakPoint = '1077px';
const secondBreakPoint = '880px';
const thirdBreakPoint = '750px';

export const GridContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  @media (max-width: ${thirdBreakPoint}) {
    margin-bottom: 0px;
  }
`;

export const GridItem = styled.div`
  align-self: center;
  justify-self: center;
  background-color: ${colors.SECTION_BK_COLOR_6};
  width: 39vw;
  height: 28vw;
  margin-left: 10px;
  margin-top: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: ${thirdBreakPoint}) {
    width: 100vw;
    height: 73vw;
    order: ${({ secondOrder }) => (secondOrder ? secondOrder : 'initial')};
  }
`;

export const Box = styled.div`
         align-self: center;
         justify-self: center;
         background-color: ${colors.SECTION_BK_COLOR_6};
         width: 39vw;
         height: 28vw;
         margin-left: 10px;
         margin-top: 8px;
background-image: url(${({ img }) => img});
         background-repeat: no-repeat;
         background-size: cover;
         @media (max-width: ${thirdBreakPoint}) {
     width: 100vw;
     height: 73vw;
     order: ${({ secondOrder }) => (secondOrder ? secondOrder : 'initial')};
  }
//         order: ${({ order }) => (order ? order : 'initial')};
`;

export const Box2Text = styled.div`
  width: 15vw;
  display: flex;
  flex-flow: column nowrap;
  margin-top: 63px;
  vertical-align: middle;
  @media (max-width: ${firstBreakPoint}) {
    width: 17vw;
  }
  @media (max-width: ${secondBreakPoint}) {
    width: 25vw;
    margin-top: 33px;
  }
  @media (max-width: ${thirdBreakPoint}) {
    width: 60vw;
  }
`;
export const Box2Title = Text.extend`
  padding-bottom: 10px;
`;

export const OrangeButton = Button.extend`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: ${({ top }) => (top ? top : '43px')};
  margin-bottom: 30px;
`;

export const BottomBox = styled.div`
  width: 100%;
  height: 125px;
  background-color: ${colors.FOOTER_BG};
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  @media (max-width: ${thirdBreakPoint}) {
    height: auto;
    padding: 30px 10px;
    box-sizing: border-box;
  }
`;

export default styles;
