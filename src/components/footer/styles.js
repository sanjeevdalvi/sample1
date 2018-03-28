import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/colors';
import Text from '../../utils/text';

const firstBreakPoint = 1200;
const secondBreakPoint = 1024;
const thirdBreakPoint = 768;
const lastBreakPoint = 475;

export const FooterContainer = styled.footer`
  background-color: ${colors.FOOTER_BG};
  color: ${colors.WHITE};
  display: flex;
  flex-flow: row nowrap;
  padding: 5% 10%;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  height: auto;
  max-height: 600px;
  @media (max-width: ${firstBreakPoint}px) {
    flex-flow: row wrap;
    padding: 5% 8%;
  }
  @media (max-width: ${secondBreakPoint}px) {
    padding: 5%;
  }
  @media (max-width: ${lastBreakPoint}px) {
    padding: 50px 5%;
  }
`;

export const Logo = styled.div`
  flex: 0 0 auto;
  width: 168px;
  height: 62px;
  @media (max-width: ${firstBreakPoint}px) {
    width: 150px;
  }
  @media (max-width: ${secondBreakPoint}px) {
    width: 110px;
  }
  @media (max-width: ${thirdBreakPoint}px) {
    width: 100px;
    text-align: center;
  }
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const InternalLinks = styled.div`
  flex: 0 0 auto;
  width: auto;
  max-width: 50%;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  flex-flow: column nowrap;
  @media (max-width: ${lastBreakPoint}px) {
    max-width: 100%;
    text-align: center;
    height: auto;
  }
`;

export const SocialLinks = styled.div`
  flex: 0 0 auto;
  width: auto;
  height: 54px;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: ${lastBreakPoint}px) {
    width: 100%;
    justify-content: center;
    padding-top: 25px;
    height: auto;
  }
`;

export const SocialLinkLogo = styled.img`
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  @media (max-width: ${firstBreakPoint}px) {
    transform: scale(0.8, 0.8);
  }
`;

export const LogoImage = styled.img`
  width: 167.7px;
  height: 51.9px;
  object-fit: contain;
  margin: auto;
  @media (max-width: ${firstBreakPoint}px) {
    width:100%;
    height:100%:
	}
  @media (max-width: ${secondBreakPoint}px) {
    width:100%;
    height: 100%;
	}
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  width: 100%;
  margin-bottom: 25px;
  justify-content: flex-start;
  @media (max-width: ${lastBreakPoint}px) {
    justify-content: center;
  }
`;

export const LinkContainer = styled.div`
  flex: 0 0 auto;
`;

export const FooterLink = styled(Link)`
  color: ${colors.WHITE};
  font-size: 11px;
  text-decoration: none;
  line-height: 23px;
  font-weight: 100;
  letter-spacing: 0.5px;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 10px;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Seperator = styled.span`
  font-size: 13px;
  padding: 0 10px;
`;

export const Copyright = Text.extend`
  letter-spacing: 0.5px;
  @media (max-width: ${firstBreakPoint}px) {
    font-size: 10px;
  }
  @media (max-width: ${lastBreakPoint}px) {
    text-align: center;
  }
`;
