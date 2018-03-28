import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import colors from '../../utils/colors';
import Button from '../../utils/button';

const firstBreakPoint = 1200;
const secondBreakPoint = 1024;
const thirdBreakPoint = 835;
const lastBreakPoint = 475;

export const HeaderContainer = styled.header`
  background-color: ${colors.WHITE};
  color: ${colors.HEADER_FONT_COLOR};
  display: flex;
  flex-flow: row wrap;
  padding: 20px 10vw 0;
  max-width: 80vw;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${firstBreakPoint}px) {
    padding: 30px 8vw 7px;
    max-width: 84vw;
  }
  @media (max-width: ${secondBreakPoint}px) {
    padding: 30px 5vw 7px;
    max-width: 90vw;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    position: relative;
    margin-bottom: 15px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    background-color: ${colors.MOBILE_HEADER_BG};
    padding: 0;
    justify-content: center;
    flex-flow: column wrap;
    height: auto;
    max-width: 100vw;
    margin-bottom: 0;
  }
`;

export const Logo = styled(NavLink)`
  flex: 0 0 auto;
  width: 200px;
  height: 62px;
  box-sizing: border-box;
  @media (max-width: ${firstBreakPoint}px) {
    width: 150px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    width: 110px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    position: absolute;
    top: 20px;
    left: 5%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    order: 2;
    height: 100px;
    width: 100%;
    text-align: center;
    background-color: ${({ isHomePage = false }) =>
      isHomePage === true ? 'transparent' : `${colors.WHITE}`};
    padding: 24px 0;
    position: ${({ isHomePage = false }) =>
      isHomePage === true ? 'absolute' : 'relative'};
    top: ${({ isHomePage = false }) => (isHomePage === true ? '53px' : '0')};
    left: 0;
    z-index: ${({ isHomePage = false }) => (isHomePage === true ? '2' : '1')};
  }
`;

export const InternalLinks = styled.div`
  flex: 0 0 auto;
  width: calc(100% - 200px);
  height: 100%;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  flex-flow: column nowrap;
  box-sizing: border-box;
  padding-left: 20px;
  @media (max-width: ${firstBreakPoint}px) {
    width: calc(100% - 150px);
  }
  @media (max-width: ${secondBreakPoint}px) {
    width: calc(100% - 120px);
  }
  @media (max-width: ${thirdBreakPoint}px) {
    width: 100%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    order: 1;
    width: 80%;
    text-align: center;
    height: auto;
  }
`;

export const HeaderOtherLinks = styled.div`
  flex: 0 0 auto;
  width: auto;
  height: 54px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  @media (max-width: ${lastBreakPoint}px) {
    display: none;
  }
`;

export const OtherLink = styled(Link)`
  color: ${colors.HEADER_FONT_COLOR};
  font-size: 10px;
  text-decoration: none;
  line-height: 23px;
  font-weight: 100;
  letter-spacing: 0.3px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Logout = Button.extend`
  color: ${colors.HEADER_FONT_COLOR};
  font-size: 10px;
  text-decoration: none;
  line-height: 23px;
  font-weight: 100;
  letter-spacing: 0.3px;
  padding: 0 15px 10px;
  flex: 0 0 auto;
  display: block;
  height: 25px;
  box-sizing: border-box;
  font-weight: 500;
  margin-left: 10px;
  border: 1px solid ${colors.HEADER_FONT_COLOR};
`;

export const LogoImage = styled.img`
  width: 167.7px;
  height: 51.9px;
  object-fit: contain;
  margin: auto;
  cursor: pointer;
  @media (max-width: ${firstBreakPoint}px) {
    width:100%;
    height:100%:
	}
  @media (max-width: ${secondBreakPoint}px) {
    width:100%;
    height: 100%;
	}
`;

export const HamburgerMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  @media (max-width: ${thirdBreakPoint}px) {
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 740px) {
    width: 100%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    position: absolute;
    top: 53px;
    left: 0;
    z-index: 5;
    background-color: ${colors.WHITE};
    width: 100%;
    height: ${({ isHamBurgerOpen = false }) =>
      isHamBurgerOpen === true ? '100vh' : '0'};
    padding-top: ${({ isHamBurgerOpen = false }) =>
      isHamBurgerOpen === true ? '20px' : '0'};
    transition: height 0.4s;
    flex-flow: column nowrap;
    justify-content: flex-start;
  }
`;

export const HeaderLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: ${thirdBreakPoint}px) {
    width: 100%;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  @media (max-width: 740px) {
    padding-bottom: 0;
    margin-bottom: 0;
  }
  @media (max-width: ${lastBreakPoint}px) {
    margin: 10px auto;
    width: 100%;
    justify-content: space-between;
  }
`;

export const LinkContainer = styled.div`
  flex: 0 0 auto;
  @media (max-width: ${lastBreakPoint}px) {
    display: ${({ isHamBurgerOpen = false }) =>
      isHamBurgerOpen === true ? 'block' : 'none'};
    flex: 0 0 auto;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const HeaderLink = styled(NavLink)`
  color: ${colors.HEADER_FONT_COLOR};
  font-size: 13px;
  text-decoration: none;
  line-height: 23px;
  font-weight: 100;
  letter-spacing: 0.3px;
  margin-right: 25px;
  padding-bottom: 15px;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 12px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    margin-right: 15px;
    padding-bottom: 5px;
  }
  @media (max-width: 740px) {
    margin-right: 0;
    line-height: 15px;
    border: none !important;
    display: inline-block;
    max-width: 95px;
    padding-bottom: 15px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    border: none !important;
    padding-bottom: 0;
    max-width: 100%;
    font-size: 13px;
  }
`;

export const SearchContainer = styled.div`
  width: ${({ isSearchOpen = false }) =>
    isSearchOpen === true ? '105px' : '15px'};
  height: 23px;
  line-height: 23px;
  overflow: hidden;
  cursor: pointer;
  transition: width 1s ease-in-out;
`;

export const InputText = styled.input`
  width: 50px;
  border: none;
  border-bottom: 1px solid;
  display: none;
  @media (max-width: ${lastBreakPoint}px) {
    width: 80%;
    height: 30px;
    border-radius: 20px;
    border: none;
    outline: none;
    text-indent: 15px;
    display: initial;
  }
`;

export const Hamburger = styled.div`
  display: none;
  @media (max-width: ${lastBreakPoint}px) {
    display: inline-block;
    width: 30px;
  }
`;

export const Bar1 = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${colors.WHITE};
  margin: 6px 0;
  border-radius: 3px;
  transition: 0.4s;
  transform: ${({ isHamBurgerOpen = false }) =>
    isHamBurgerOpen === true ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'};
`;

export const Bar2 = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${colors.WHITE};
  margin: 6px 0;
  border-radius: 3px;
  transition: 0.2s;
  opacity: ${({ isHamBurgerOpen = false }) =>
    isHamBurgerOpen === true ? '0' : '1'};
`;

export const Bar3 = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${colors.WHITE};
  margin: 6px 0;
  border-radius: 3px;
  transition: 0.4s;
  transform: ${({ isHamBurgerOpen = false }) =>
    isHamBurgerOpen === true ? 'rotate(45deg) translate(-6px, -8px)' : 'none'};
`;

export const Seperator = styled.span`
  font-size: 13px;
  padding: 0 5px;
  @media (max-width: ${secondBreakPoint}px) {
    font-size: 11px;
  }
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 12px;
  }
`;
