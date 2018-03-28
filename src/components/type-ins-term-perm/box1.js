import React from 'react';

import {
  TextStyle1,
  TextStyle2,
  TextStyle3,
  TextStyle4,
  TextStyle5,
  TextStyle6,
  CheckMark,
  InfoBoxContainer,
  InfoBoxHeader,
  InfoBoxHeaderTextStyle,
  BoxItem,
  BuildItButton,
} from './styles.js';

const Box1 = ({ onClick, onMouseOut, navigateTo, SetPolicyType }) => (
  <InfoBoxContainer id="box1_container">
    <InfoBoxHeader>
      <InfoBoxHeaderTextStyle>TERM POLICY</InfoBoxHeaderTextStyle>
    </InfoBoxHeader>
    <BoxItem paddingTop="60px">
      <TextStyle1>Compare quotes in just&nbsp;</TextStyle1>{' '}
      <TextStyle2>5 minutes</TextStyle2>
    </BoxItem>
    <BoxItem>
      <TextStyle1>Get your policy&nbsp;</TextStyle1>
      <TextStyle2>today</TextStyle2>
    </BoxItem>
    <BoxItem paddingTop="40px">
      <TextStyle3> THE FACTS</TextStyle3>
    </BoxItem>

    <BoxItem paddingTop="0px">
      <CheckMark />
      <TextStyle4>Great way to Get Started</TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>Most Affordable Rates </TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>
        Easy Application with no Screenings or Blood Tests
      </TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>Coverage only lasts as long as the term selected</TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>
        May be Converted into a Permanent Policy in the Future
      </TextStyle4>
    </BoxItem>
    <BoxItem paddingTop="45px" onClick={onClick}>
      <TextStyle5>LEARN MORE</TextStyle5>
    </BoxItem>
    <BoxItem paddingTop="35px">
      <BuildItButton
        onClick={() => {
          SetPolicyType('term');
          navigateTo('/term-life-insurance/build-policy/coverage');
        }}
      >
        <TextStyle6>BUILD IT</TextStyle6>
      </BuildItButton>
    </BoxItem>
  </InfoBoxContainer>
);

export default Box1;
