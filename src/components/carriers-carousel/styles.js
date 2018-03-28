import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 60vw;
  padding-bottom: 30px;

  background-color: #ffffff;
  margin: 0 auto;
  @media (max-width: 540px) {
    width: 70vw;
  }
  @media (max-width: 400px) {
    width: 80vw;
  }
`;

export const TopHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 7px;
  text-align: center;
  color: #fd8204;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;

  width: 110%;
  @media (max-width: 759px) {
    font-size: 16px;
  }
`;

export const SliderContainer = styled.div`
  margin: 0 auto;
  padding: 4px;
`;

export const NavButton = styled.button`
  background-color: white;
`;
export const NavIcon = styled.img`
  margin-top: -20px;
  width: 20px;
  height: 33px;
`;
export const NavBackground = styled.div`
  background-color: #ffffff;
  opacity: 0.8;
`;

export const Slide = styled.div`
  margin: 0 auto;
  background: white;
`;

export const Logo = styled.img`
  width: ${({ carrier }) => (carrier.width ? carrier.width : '133px')};
  height: ${({ carrier }) => (carrier.height ? carrier.height : '74px')};
  margin: 0 auto;
  margin-top: ${({ carrier }) => (carrier.top ? carrier.top : '0px')};

  @media (max-width: 540px) {
    width: ${({ carrier }) => (carrier.width ? carrier.width * 0.9 : '120px')};
    height: ${({ carrier }) =>
      carrier.height ? carrier.height * 0.9 : '66px'};
    margin-top: ${({ carrier }) => (carrier.top ? carrier.top * 0.9 : '0px')};
  }

  @media (max-width: 465px) {
    width: ${({ carrier }) => (carrier.width ? carrier.width * 0.8 : '106px')};
    height: ${({ carrier }) =>
      carrier.height ? carrier.height * 0.8 : '59px'};
    margin-top: ${({ carrier }) => (carrier.top ? carrier.top * 0.8 : '0px')};
  }
`;
