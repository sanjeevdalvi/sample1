import React from 'react';
import {
  Container,
  GridContainer,
  GridItem,
  Box2Title,
  Box2Text,
  OrangeButton,
  Box,
  BottomBox,
  BottomTextContainer,
  BottomBoxText,
  GetStartedButton,
} from './styles';
import Text from '../../utils/text';
import Images from '../../utils/images';
import colors from '../../utils/colors';

const BoxTextComponent = ({
  title,
  text,
  buttonMarginTop = '43px',
  hideCTA = 'false',
  order,
}) => (
  <GridItem order={order}>
    <Box2Text>
      <Box2Title
        fontSize={20}
        fontWeight={600}
        color={colors.GRAY}
        textAlign={'center'}
      >
        {title}
      </Box2Title>
      <Text fontSize={14} textAlign={'center'} color={colors.HERO_FONT}>
        {text}
      </Text>
    </Box2Text>
    <OrangeButton
      radius={18.5}
      bgColor={colors.BUTTON_FONT_COLOR}
      fontSize={14}
      color={colors.WHITE}
      padding={'10px 27px'}
      top={buttonMarginTop}
    >
      LEARN MORE
    </OrangeButton>
  </GridItem>
);

const HomeApplyOnline = ({
  BoxText,
  AppendToText,
  HideCTA = false,
  boxTextFontSize,
  boxTextAlign,
  boxTextMarginRight,
  onNavigate,
}) => (
  <Container>
    <GridContainer>
      <Box img={Images.BOX1} order={1} />
      <BoxTextComponent
        title="Life Insurance"
        text="You'll be surprised to learn how rewarding financial control can be. You can get a policy today."
        order={2}
      />
      <Box img={Images.BOX3} order={4} />
      <BoxTextComponent
        title="Medical Supplemental"
        buttonMarginTop="33px"
        text="When Medicare isn't there to help, make sure you're covered."
        order={3}
      />
      <Box img={Images.BOX5} order={5} />
      <BoxTextComponent
        title="Fixed Expense Insurance"
        buttonMarginTop="33px"
        text="There is no need to keep worrying about tomorrow when you could be prepared."
        order={6}
      />
    </GridContainer>
    <BottomBox HideCTA={HideCTA}>
      <BottomTextContainer boxTextMarginRight={boxTextMarginRight}>
        <BottomBoxText
          AppendToText={AppendToText}
          fontSize={boxTextFontSize ? boxTextFontSize : AppendToText ? 20 : 28}
          textAlign={
            AppendToText ? 'center' : boxTextAlign ? boxTextAlign : 'left'
          }
          fontWeight={600}
          color={colors.WHITE}
        >
          {BoxText}
        </BottomBoxText>
        {AppendToText && (
          <BottomBoxText
            fontSize={
              boxTextFontSize ? boxTextFontSize : AppendToText ? 20 : 28
            }
            fontWeight={600}
            color={colors.BUTTON_FONT_COLOR}
          >
            {AppendToText}
          </BottomBoxText>
        )}
      </BottomTextContainer>
      <GetStartedButton
        radius={23}
        bgColor={colors.BUTTON_FONT_COLOR}
        padding={'12px 30px'}
        fontSize={20}
        fontWeight={600}
        color={colors.WHITE}
        onClick={onNavigate}
      >
        GET STARTED
      </GetStartedButton>
    </BottomBox>
  </Container>
);

export default HomeApplyOnline;
