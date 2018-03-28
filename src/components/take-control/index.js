import React from 'react';
import {
  Container,
  TextContainer,
  HeaderContainer,
  PrimaryHeader,
  SecondaryHeader,
  GridContainer,
  GridItem,
  GridImage,
  GridText,
} from './styles';
import images from '../../utils/images';
import colors from '../../utils/colors';

const gridItems = [
  {
    src: images.CIRCLE1,
    text:
      'Invest as little as $1/day in a Life Insurance policy and get immediately covered so your cosigners will never have to worry.',
  },
  {
    src: images.CIRCLE2,
    text:
      'Convert your policy into a permanent policy and begin investing in your future.',
  },
  {
    src: images.CIRCLE3,
    text:
      'When your Life Insurance policy is mature, you can borrow against it to help pay off your debt.',
  },
];

const TakeControl = () => (
  <Container>
    <TextContainer>
      <HeaderContainer>
        <PrimaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.MOBILE_HEADER_BG}
        >
          Taking Control is as Easy as&nbsp;
        </PrimaryHeader>
        <SecondaryHeader
          fontSize={34}
          lineHeight={'48px'}
          textAlign={'center'}
          color={colors.BUTTON_FONT_COLOR}
        >
          1-2-3
        </SecondaryHeader>
      </HeaderContainer>
      <GridContainer>
        {gridItems.map((item, index) => {
          return (
            <GridItem key={index}>
              <GridImage src={item.src} alt={item.text} />
              <GridText
                fontSize={16}
                fontWeight={600}
                textAlign={'center'}
                lineHeight={'1.5'}
                color={colors.GRAY4}
              >
                {item.text}
              </GridText>
            </GridItem>
          );
        })}
      </GridContainer>
    </TextContainer>
  </Container>
);

export default TakeControl;
