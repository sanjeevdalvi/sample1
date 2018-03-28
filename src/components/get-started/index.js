import React from 'react';
import colors from '../../utils/colors';

import {
  Container,
  HeadingStyle,
  TextStyle1,
  GetStartedButton,
} from './styles.js';

const Heading = ({ header1, header2 }) => (
  <HeadingStyle>
    <TextStyle1 fontSize="24" color={colors.WHITE} textAlign="center">
      {header1}
    </TextStyle1>
    <TextStyle1
      fontSize="24"
      color={colors.BUTTON_FONT_COLOR}
      textAlign="center"
    >
      {header2}
    </TextStyle1>
  </HeadingStyle>
);

const GetStarted = ({ header1, header2, breakPoint }) => (
  <Container breakPoint={breakPoint}>
    <Heading header1={header1} header2={header2} />
    <GetStartedButton
      radius={23}
      bgColor={colors.BUTTON_FONT_COLOR}
      fontSize={20}
      fontWeight={600}
      color={colors.WHITE}
      breakPoint={breakPoint}
    >
      GET STARTED
    </GetStartedButton>
  </Container>
);

export default GetStarted;
