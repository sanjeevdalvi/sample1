import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import {
  GridContainer,
  GridItem,
  Box2Title,
  Box2Text,
  OrangeButton,
  Box,
} from './styles';
import Text from '../../utils/text';
import Images from '../../utils/images';
import colors from '../../utils/colors';

const BoxTextComponent = ({
  title,
  text,
  buttonMarginTop = '43px',
  order = 'initial',
  secondOrder = 'initial',
  hideCTA = 'false',
  navigateTo,
  navLink,
}) => (
  <GridItem order={order} secondOrder={secondOrder}>
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
      onClick={() => navigateTo(navLink)}
    >
      LEARN MORE
    </OrangeButton>
  </GridItem>
);

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(route) {
    if (route.length) {
      this.props.navigateTo(route);
    }
  }

  render() {
    return (
      <GridContainer>
        <Box img={Images.BOX1} order={1} secondOrder={1} />
        <BoxTextComponent
          title="Premium Term Life Insurance"
          text="You'll be surprised to learn how rewarding financial control can be. You can get a policy today."
          order={2}
          secondOrder={2}
          navigateTo={this.navigateTo}
          navLink="term-life-insurance"
        />
        <BoxTextComponent
          title="Medical Supplemental"
          buttonMarginTop="33px"
          text="When Medicare isn't there to help, make sure you're covered."
          order={4}
          secondOrder={4}
          navigateTo={this.navigateTo}
          navLink="medical-supplemental-insurance"
        />
        <Box img={Images.BOX3} order={3} secondOrder={3} />
        <Box order={6} img={Images.BOX5} secondOrder={5} />
        <BoxTextComponent
          title="Final Expense Insurance"
          buttonMarginTop="33px"
          text="There is no need to keep worrying about tomorrow when you could be prepared."
          order={5}
          secondOrder={6}
          navigateTo={this.navigateTo}
          navLink="final-expense-insurance"
        />
      </GridContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(ProductGrid);

//export default ProductGrid;
