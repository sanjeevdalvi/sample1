import styled from 'styled-components';
import colors from '../../utils/colors';
import Text from '../../utils/text';
import Button from '../../utils/button';

const firstBreakPoint = 935;
const secondBreakPoint = 740;
const thirdBreakPoint = 615;
const lastBreakPoint = 485;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  margin-bottom: 200px;
`;

export const HeadingTextStyle = Text.extend`
  font-size: 26px;
  text-align: center;
  padding: 35px 20px;
  line-height: 49px;
  box-sizing: border-box;
  display: inline-block;
  width: calc(100% - 57.6%);
  color: ${colors.MOBILE_HEADER_BG};
  @media (max-width: 1175px) {
    font-size: 30px;
    width: auto:
  }
  @media (max-width: 950px) {
    font-size: 26px;
    width: auto;
    padding: 35px 0;
  }
  @media (max-width: ${lastBreakPoint}px) {
    font-size: 22px;
    width: auto;
    padding: 0;
  }
`;

export const HeadingLine = styled.div`
  width: 28.8%;
  height: 2px;
  align-self: stretch;
  background-color: #d1d1d1;
  margin: auto;
  @media (max-width: 935px) {
    width: 77px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 50px;
  }
`;

export const HeadingContainer = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: calc(100% - 270px);
  @media (max-width: ${secondBreakPoint}px) {
    width: calc(100% - 120px);
    padding: 25px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 90%;
    padding: 10px;
    box-shadow: none;
    border: none;
  }
`;

export const SubHeading = Text.extend`
  display: block;
  width: 78%;
  font-size: 18px;
  line-height: 1.75;
  text-align: left;
  color: #838383;
  margin: 0 auto;
`;
export const Card = styled.div`
  width: 80%;
  margin 40px auto 50px;
  padding: 30px;
  box-sizing: border-box;
  opacity: 0.71;
  border-radius: 4.5px;
  background-color: #e0f6f5;
  display : flex; 
  flex-flow: column nowrap;
  align-items : space-around;
  justify-content: space-around;
`;
export const CardHeading = Text.extend`
  flex: 0 0 auto;
  font-size: 25px;
  font-weight: 600;
  margin: 10px auto;
  display: block;
  color: #13a89e;
`;
export const CardText = Text.extend`
  flex: 0 0 auto;
  font-size: 18px;
  line-height: 1.65;
  margin: 10px auto;
  text-align: center;
  display: block;
  color: #4a4a4a;
`;
export const CardCTA = Button.extend`
  flex: 0 0 auto;
  margin: 10px auto;
  letter-spacing: 1.5px;
`;
export const CardText2 = Text.extend`
  flex: 0 0 auto;
  font-size: 20px;
  font-weight: 600;
  color: #13a89e;
  margin: 10px auto;
  display: block;
`;
