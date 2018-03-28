import React from 'react';
import {
  Container,
  TextContainer,
  ImageContainer,
  Image,
  HeaderContainer,
  PrimaryHeader,
  SecondaryHeader,
  SubHeader,
  GridContainer,
  GridItem,
  GridImage,
  GridText,
} from './styles';
import images from '../../utils/images';
import colors from '../../utils/colors';

const gridItems = [
  {
    src: images.FIRE,
    text: 'Fire',
  },
  {
    src: images.FLOOD,
    text: 'Flood',
  },
  {
    src: images.TORNADO,
    text: 'Tornado',
  },
  {
    src: images.MONEY,
    text: 'Money',
  },
];

const SecureFoundation = () => (
  <Container>
    <TextContainer>
      <HeaderContainer>
        <PrimaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.MOBILE_HEADER_BG}
        >
          Secure Your&nbsp;
        </PrimaryHeader>
        <SecondaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.BUTTON_FONT_COLOR}
        >
          Foundation
        </SecondaryHeader>
      </HeaderContainer>
      <SubHeader fontSize={16} lineHeight={1.5} color={colors.GRAY2}>
        Homeowners Insurance may protect you from catastrophes but that isn’t
        your biggest concern.
      </SubHeader>
      <GridContainer>
        {gridItems.map((item, index) => {
          return (
            <GridItem key={index}>
              <GridImage src={item.src} alt={item.text} />
              <GridText
                fontSize={18}
                lineHeight={'33px'}
                color={colors.MOBILE_HEADER_BG}
              >
                {item.text}
              </GridText>
            </GridItem>
          );
        })}
      </GridContainer>
      <SubHeader fontSize={16} lineHeight={1.5} color={colors.GRAY2}>
        More families lose their homes each year when the mortgage payer passes
        away than from foreclosure due to fires or other catastrophes.
      </SubHeader>
    </TextContainer>
    <ImageContainer>
      <Image src={images.SECURE} alt="Secure your foundation" />
    </ImageContainer>
  </Container>
);

export default SecureFoundation;
