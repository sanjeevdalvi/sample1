import styled from 'styled-components';
import Text from '../../utils/text';

const lastBreakPoint = 475;

export const Container = styled.footer`
  position: relative;
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const HorizontalBand = styled.div`
  width: 100%;
  height: 12px;
  background-color: #f7931d;
`;

export const ChatBox = styled.div`
  position: absolute;
  bottom: 10px;
  background-color: #f7931d;
  right: 12%;
  width: 250px;
  height: 40px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 22px;
  cursor: pointer;
`;

export const ChatText = Text.extend`
  letter-spacing: 0.5px;
`;

export const ChatBoxIcon = styled.div`
  width: 28px;
  height: 18px;
  background-color: #fff;
  border-radius: 990px;
  position: relative;
  margin-right: 15px;
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    left: 5px;
    bottom: -4px;
    border-right: 9px solid transparent;
    border-top: 5px solid #fff;
  }
`;
