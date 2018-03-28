import styled from 'styled-components';
import Text from '../../utils/text.js';
import Button from '../../utils/button.js';
import colors from '../../utils/colors.js';

const lastBreakPoint = 485;

export const Container = styled.div`
  width: 80%;
  min-height: 50vh;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  margin: 0 auto 50px;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;

export const HeaderConatiner = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
export const HeadingLine = styled.div`
  height: 2px;
  width: calc(50% - 117.5px);
  background-color: #d1d1d1;
`;
export const HeadingText = Text.extend`
  font-size: 36px;
  color: #000000;
`;
export const ProductContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
export const GridHeading = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: 30px auto 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${colors.MOBILE_HEADER_BG};
`;
export const GHeading = Text.extend`
  flex: 0 0 auto;
  width: calc(50% - 25px);
  letter-spacing: 2.76px;
`;
export const GridContent = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;
export const GridRow = styled.div`
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: ${({ border }) =>
    border === true ? '1px solid #D6D6D6' : 'none'};
`;
export const GColumn1 = Text.extend`
  flex: 0 0 auto;
  width: calc(50% - 25px);
  font-size: 16px;
  color: #000000;
  line-height: 36px;
  text-transform: capitalize;
`;
export const GColumn2 = styled.div`
  flex: 0 0 auto;
  width: calc(50% - 25px);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const GColumn2Text = Text.extend`
  flex: 0 0 auto;
  font-size: 16px;
  color: #000000;
  line-height: 36px;
`;

export const GCTA = Button.extend`
  flex: 0 0 auto;
  background: #F7931D;
  border-radius: 85px;
  margin 10px 0;
  padding: 10px 20px;
  &>span: nth-of-type(1){
    font-size: 13.6px;
    color: #000000;
    letter-spacing: 2.27px;
    display: initial;
  }
  &>span: nth-of-type(2){
    display: none;
  }
  @media (max-width: ${lastBreakPoint}px) {
    &>span: nth-of-type(1){
      display : none;
    }
    &>span: nth-of-type(2){
      display: initial;
      font-size: 13.6px;
      color: #000000;
      letter-spacing: 2.27px;
    }
  }
`;
export const CtaText = Text.extend`
  flex: 0 0 auto;
`;

export const NotAvailable = Text.extend`
  display: block;
  width: 100%;
  font-size: 16px;
  color: #000000;
  line-height: 36px;
  text-transform: capitalize;
  text-align: center;
  margin: 30px auto 0;
`;
