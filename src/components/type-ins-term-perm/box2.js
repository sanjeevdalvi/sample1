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

const Box2 = ({ onClick, onMouseOut, navigateTo, SetPolicyType }) => (
  <InfoBoxContainer marginLeft="40px">
    <InfoBoxHeader>
      <InfoBoxHeaderTextStyle>PERMANENT POLICY</InfoBoxHeaderTextStyle>
    </InfoBoxHeader>
    <BoxItem paddingTop="60px">
      <TextStyle1>Compare quotes in just&nbsp;</TextStyle1>{' '}
      <TextStyle2>5 minutes</TextStyle2>
    </BoxItem>
    <BoxItem>
      <TextStyle1>Get your policy&nbsp;</TextStyle1>
      <TextStyle2>in 48 hours</TextStyle2>
    </BoxItem>
    <BoxItem paddingTop="40px">
      <TextStyle3> THE FACTS</TextStyle3>
    </BoxItem>

    <BoxItem paddingTop="0px">
      <CheckMark />
      <TextStyle4>
        Easy Application but may require some screening depending on your
        coverage
      </TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>Coverage lasts as long as you pay the premium</TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>
        Start when you are young to lock in the most affordable rate for life
      </TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>Builds a Cash Value</TextStyle4>
    </BoxItem>
    <BoxItem>
      <CheckMark />
      <TextStyle4>A true financial investment</TextStyle4>
    </BoxItem>
    <BoxItem paddingTop="30px" onClick={onClick}>
      <TextStyle5>LEARN MORE</TextStyle5>
    </BoxItem>
    <BoxItem paddingTop="35px">
      <BuildItButton
        onClick={() => {
          SetPolicyType('perm');
          navigateTo('/perm-life-insurance/build-policy');
        }}
      >
        <TextStyle6>BUILD IT</TextStyle6>
      </BuildItButton>
    </BoxItem>
  </InfoBoxContainer>
);

export default Box2;
