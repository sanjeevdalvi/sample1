import React from 'react';
import {
  Container,
  ImageContainer,
  TextContainerMain,
  TextContainerPara,
  ContactUsButton,
  TextSection,
  HeadingStyle,
} from './styles';

import colors from '../../utils/colors';

const TextContainer = ({ heading, heading2, Para }) => (
  <TextContainerMain>
    <TextSection>
      <HeadingStyle
        fontSize="28"
        color={colors.WHITE}
        textAlign="left"
        fontWeight="600"
      >
        {heading}
        {heading2 ? <br /> : null}
        {heading2 ? heading2 : null}
      </HeadingStyle>
      <TextContainerPara>
        <Para />
      </TextContainerPara>
    </TextSection>
    <ContactUsButton
      fontSize="20"
      bgColor={colors.MOBILE_HEADER_BG}
      color={colors.WHITE}
      textAlign="center"
    >
      Contact Us
    </ContactUsButton>
  </TextContainerMain>
);

const ContactUs = ({
  background,
  heading,
  heading2,
  para,
  imageFirst = '1',
}) => (
  <div>
    <Container imageFirst={imageFirst}>
      <ImageContainer background={background} />
      <TextContainer heading={heading} Para={para} heading2={heading2} />
    </Container>
  </div>
);

export default ContactUs;
