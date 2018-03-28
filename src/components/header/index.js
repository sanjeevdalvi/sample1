import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  HeaderContainer,
  Logo,
  InternalLinks,
  HeaderOtherLinks,
  OtherLink,
  LogoImage,
  HamburgerMenu,
  HeaderLinks,
  LinkContainer,
  HeaderLink,
  InputText,
  Hamburger,
  Bar1,
  Bar2,
  Bar3,
  Seperator,
  Logout,
} from './styles';
import images from '../../utils/images';
import { UserLogOut } from '../../reducers/personal-info';

const Links = [
  {
    display: 'Term Life Insurance',
    url: '/term-life-insurance',
  },
  {
    display: 'Perm Life Insurance',
    url: '/perm-life-insurance',
  },
  {
    display: 'Final Expense Insurance',
    url: '/final-expense-insurance',
  },
  {
    display: 'Medical Supplemental Insurance',
    url: '/medical-supplemental-insurance',
  },
];

const OtherLinks = [
  {
    display: 'About Us',
    url: '/',
  },
  {
    display: 'Contact Us',
    url: '/',
  },
  {
    display: 'My Account',
    url: '/my-account/personal-info',
  },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchOpen: false,
      isHamBurgerOpen: false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleHamburger = this.toggleHamburger.bind(this);
    this.closeHamburger = this.closeHamburger.bind(this);
    this.logout = this.logout.bind(this);
  }

  disableOuterScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }

  enableOuterScroll() {
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }

  toggleSearch() {
    const { isSearchOpen } = this.state;
    this.setState({ isSearchOpen: !isSearchOpen });
  }

  toggleHamburger() {
    const { isHamBurgerOpen } = this.state;
    if (isHamBurgerOpen) {
      this.enableOuterScroll();
    } else {
      this.disableOuterScroll();
    }
    this.setState({ isHamBurgerOpen: !isHamBurgerOpen });
  }

  closeHamburger() {
    this.enableOuterScroll();
    this.setState({ isHamBurgerOpen: false });
  }

  logout() {
    this.props.Logout();
  }

  render() {
    const { primaryUserId } = this.props;
    return (
      <HeaderContainer>
        <Logo to="/" exact isHomePage={this.props.isHomePage}>
          <LogoImage src={images.HEADERLOGO} alt="meply" />
        </Logo>
        <InternalLinks>
          <HeaderOtherLinks>
            {OtherLinks.map((link, index) => (
              <LinkContainer key={index}>
                <OtherLink to={link.url}>{link.display}</OtherLink>
                {index < OtherLinks.length - 1 && <Seperator>|</Seperator>}
              </LinkContainer>
            ))}
            {primaryUserId && <Logout onClick={this.logout}>Logout</Logout>}
          </HeaderOtherLinks>
          <HeaderLinks>
            <HamburgerMenu isHamBurgerOpen={this.state.isHamBurgerOpen}>
              {Links.map((link, index) => (
                <LinkContainer
                  isHamBurgerOpen={this.state.isHamBurgerOpen}
                  key={index}
                >
                  <HeaderLink
                    activeStyle={{
                      color: '#13a89e',
                      borderBottom: '8px solid #f7931d',
                    }}
                    to={link.url}
                    onClick={this.closeHamburger}
                  >
                    {link.display}
                  </HeaderLink>
                </LinkContainer>
              ))}
            </HamburgerMenu>
            <InputText type="text" />
            <Hamburger onClick={this.toggleHamburger}>
              <Bar1 isHamBurgerOpen={this.state.isHamBurgerOpen} />
              <Bar2 isHamBurgerOpen={this.state.isHamBurgerOpen} />
              <Bar3 isHamBurgerOpen={this.state.isHamBurgerOpen} />
            </Hamburger>
          </HeaderLinks>
        </InternalLinks>
      </HeaderContainer>
    );
  }
}

const mapsStateToProps = ({ personalFormReducer: { primaryUserId } }) => ({
  primaryUserId,
});

const mapDispatchToProps = dispatch => ({
  Logout: () => dispatch(UserLogOut()),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Header);
