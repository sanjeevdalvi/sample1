import React from 'react';
import {
  FooterContainer,
  Logo,
  InternalLinks,
  SocialLinks,
  SocialLinkLogo,
  LogoImage,
  FooterLinks,
  LinkContainer,
  FooterLink,
  Seperator,
  Copyright,
} from './styles';
import images from '../../utils/images';
import colors from '../../utils/colors';

const Links = [
  {
    display: 'Term Life Insurance',
    url: '/',
  },
  {
    display: 'Perm Life Insurance',
    url: '/',
  },
  {
    display: 'Final Expense Insurance',
    url: '/',
  },
  {
    display: 'Medical Supplemental Insurance',
    url: '/',
  },
  {
    display: 'Security & Trust',
    url: '/',
  },
  {
    display: 'Privacy',
    url: '/',
  },
  {
    display: 'Terms of Service',
    url: '/',
  },
];

const Footer = props => {
  return (
    <FooterContainer>
      <Logo>
        <LogoImage src={images.LOGO} alt="meply" />
      </Logo>
      <InternalLinks>
        <FooterLinks>
          {Links.map((link, index) => (
            <LinkContainer key={index}>
              <FooterLink to={link.url}>{link.display}</FooterLink>
              {index < Links.length - 1 && <Seperator>|</Seperator>}
            </LinkContainer>
          ))}
        </FooterLinks>
        <Copyright
          fontSize={11}
          lineHeight={'23px'}
          fontWeight={100}
          color={colors.WHITE}
        >
          All Rights Reserved | MePly © 2017
        </Copyright>
      </InternalLinks>
      <SocialLinks>
        <SocialLinkLogo src={images.FACEBOOK} alt="facebook" />
        <SocialLinkLogo src={images.TWITTER} alt="twitter" />
        <SocialLinkLogo src={images.TUMBLER} alt="tumbler" />
        <SocialLinkLogo src={images.YOUTUBE} alt="youtube" />
      </SocialLinks>
    </FooterContainer>
  );
};
export default Footer;
