import styled from 'styled-components';
import Text from '../../utils/text.js';
import Button from '../../utils/button.js';
import colors from '../../utils/colors.js';
import { NavLink } from 'react-router-dom';

const lastBreakPoint = 485;

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
`;

export const NavBar = styled.div`
  width: 80%;
  flex: 0 0 auto;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
  }
`;
export const HeaderLink = styled(NavLink)`
  flex: 0 0 auto;
  width: 25%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;
export const LinkImage = styled.img`
  height: 57px;
  width: 57px;
  margin: 20px auto 0;
  cursor: pointer;
`;
export const Heading = Text.extend``;
export const LinkText = Text.extend`
  padding: 20px 0;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;
export const FormSection = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 350px;
`;
export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  height: 38px;
  border-radius: 4px;
  background-color: #fff;
  font-family: 'Source Sans Pro';
  font-size: 14px;
  font-weight: 600;
  color: black;
  border: solid 1px #dadada;
  margin: 12px 0;
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  shadow: none;
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: ${colors.FONT_COLOR_4};
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: ${colors.FONT_COLOR_4};
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: ${colors.FONT_COLOR_4};
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: ${colors.FONT_COLOR_4};
  }
  @media (max-width: ${lastBreakPoint}px) {
    margin-right: 0;
    width: 100%;
  }
`;
export const FormButton = Button.extend`
  flex: 0 0 auto;
  letter-spacing: 3px;
  align-self: right;
  margin: 20px 0;
  @media (max-width: ${lastBreakPoint}px) {
    margin: 20px auto;
  }
`;
