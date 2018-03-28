import React from 'react';
import {
  NavButton,
  NavIcon,
  NavBackground,
  Slide,
  Logo,
  CarouselContainer,
  TopHeading,
  SliderContainer,
} from './styles';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import srcLeftArrow from '../../assets/images/left-arrow.png';
import srcRightArrow from '../../assets/images/right-arrow.png';

const LeftNavButton = ({ icon, ...rest }) => (
  <NavButton {...rest}>
    <NavBackground>
      <NavIcon src={icon} />
    </NavBackground>
  </NavButton>
);
const RightNavButton = ({ icon, ...rest }) => (
  <NavButton {...rest}>
    <NavBackground>
      <NavIcon src={icon} />
    </NavBackground>
  </NavButton>
);

const CarriersCarousel = ({ heading, carriers }) => (
  <CarouselContainer>
    <TopHeading>{heading} </TopHeading>
    <SliderComponent carriers={carriers} />
  </CarouselContainer>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  prevArrow: <LeftNavButton icon={srcLeftArrow} />,
  nextArrow: <RightNavButton icon={srcRightArrow} />,
  slidesToScroll: 1,
};

const SliderComponent = ({ carriers }) => (
  <SliderContainer>
    <Slider {...settings}>
      {carriers.map((carrier, i) => (
        <Slide key={i}>
          <InsuranceCarrier carrier={carrier} key={i} />{' '}
        </Slide>
      ))}
    </Slider>
  </SliderContainer>
);

const InsuranceCarrier = ({ carrier }) => (
  <Logo src={carrier.srcImg} carrier={carrier} />
);

export default CarriersCarousel;
