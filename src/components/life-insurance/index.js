import React from 'react';
import StyledText from '../../utils/text.js';
import colors from '../../utils/colors';

import tickImage from '../../assets/images/tick.png';

import {
  Container,
  BoxStyle,
  BoxContainerStyle,
  Image,
  HeadingStyle,
  TextStyle1,
  TextStyle2,
  TextStyle3,
  TextStyle4,
  BoxTitle,
} from './styles.js';

const Box = ({ opacity = '1', bgColor, order, verticalOrder, detail }) => (
  <BoxStyle
    opacity={opacity}
    bgColor={bgColor}
    order={order}
    verticalOrder={verticalOrder}
  >
    <Image height="58px" src={tickImage} />
    <BoxTitle>
      <TextStyle2
        fontSize="36"
        color={colors.FOOTER_BG}
        textAlign="center"
        fontWeight="600"
      >
        {detail.heading}
      </TextStyle2>
      <TextStyle3
        fontSize="24"
        color={colors.FOOTER_BG}
        textAlign="center"
        fontWeight="600"
      >
        {detail.subHeading}
      </TextStyle3>
    </BoxTitle>
    <StyledText
      fontSize="14"
      color={colors.BLACK}
      textAlign="left"
      lineHeight="1.71"
    >
      {detail.description}
    </StyledText>
  </BoxStyle>
);

const BoxContainer = ({ details }) => (
  <BoxContainerStyle>
    <Box
      opacity="0.69"
      bgColor={colors.SECTION_BK_COLOR_3}
      order={1}
      verticalOrder={1}
      detail={details[0]}
    />
    <Box
      opacity="0.88"
      bgColor={colors.WHITE}
      order={2}
      verticalOrder={2}
      detail={details[1]}
    />
    <Box
      opacity="0.88"
      bgColor={colors.WHITE}
      order={3}
      verticalOrder={4}
      detail={details[2]}
    />
    <Box
      opacity="0.69"
      bgColor={colors.SECTION_BK_COLOR_3}
      order={4}
      verticalOrder={3}
      detail={details[3]}
    />
  </BoxContainerStyle>
);
const Heading = ({ content }) => (
  <HeadingStyle>
    <TextStyle1
      fontSize="34"
      color={colors.WHITE}
      textAlign="center"
      fontWeight="600"
    >
      {content}
    </TextStyle1>
  </HeadingStyle>
);

const Footer = ({ content }) => (
  <HeadingStyle>
    <TextStyle4
      fontSize="24"
      color={colors.WHITE}
      textAlign="center"
      fontWeight="600"
    >
      Acquire a policy worth up to $300,000 with little to no screening. <br />Select
      from the top trusted companies in the industry.
    </TextStyle4>
  </HeadingStyle>
);

const LifeInsurance = ({ bgImage, header, footer, details }) => (
  <Container bgImage={bgImage}>
    {header ? <Heading content={header} /> : null}
    <BoxContainer details={details} />
    {footer ? <Footer content={footer} /> : null}
  </Container>
);

export default LifeInsurance;
