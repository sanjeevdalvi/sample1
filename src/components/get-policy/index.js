import React from 'react';
import colors from '../../utils/colors';
import images from '../../utils/images';

import {
  Container,
  BoxStyle,
  BoxContainerStyle,
  Image,
  HeadingStyle,
  TextStyle1,
  TextStyle2,
  GetStartedButton,
  StyledTextSub,
} from './styles.js';

const policyDetails = [
  {
    image: images.copyImage,
    header: 'GET YOUR POLICY TODAY',
    subText: 'Fastest approval times in the industry',
  },
  {
    image: images.priceTagImage,
    header: 'COMPARE QUOTES FOR BEST PRICE',
    subText: 'Easy, no jargon application in just 5 minute',
  },
  {
    image: images.monitorImage,
    header: 'YOU HAVE CONTROL',
    subText: 'No need to talk to a salesperson',
  },
];

const Box = ({ image, header, subText }) => (
  <BoxStyle>
    <Image src={image} />
    <TextStyle2
      fontSize="24"
      color={colors.MOBILE_HEADER_BG}
      textAlign="center"
    >
      {header}
    </TextStyle2>
    <StyledTextSub
      fontSize="16"
      color={colors.SECTION_TEXT_2}
      textAlign="center"
    >
      {subText}
    </StyledTextSub>
  </BoxStyle>
);

const BoxContainer = ({ details }) => (
  <BoxContainerStyle>
    {details.map((detail, index) => <Box {...detail} key={index} />)}
  </BoxContainerStyle>
);
const Heading = ({ header, onNavigate }) => (
  <HeadingStyle>
    <TextStyle1
      fontSize="24"
      color={colors.WHITE}
      textAlign="center"
      lineHeight={1.5}
    >
      {header}
    </TextStyle1>
    <GetStartedButton
      radius={23}
      bgColor={colors.BUTTON_FONT_COLOR}
      fontSize={20}
      fontWeight={600}
      color={colors.WHITE}
      onClick={onNavigate}
    >
      GET STARTED
    </GetStartedButton>
  </HeadingStyle>
);

const GetPolicy = ({
  header = '5 minutes to apply. No annoying screenings. Get a policy Today!',
  onNavigate,
  details = policyDetails,
}) => (
  <Container>
    <Heading header={header} onNavigate={onNavigate} />
    <BoxContainer details={details} />
  </Container>
);

export default GetPolicy;
