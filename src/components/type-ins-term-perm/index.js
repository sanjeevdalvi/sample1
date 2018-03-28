import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { SetPolicyType } from '../../reducers/build-policy';
import {
  Container,
  InfoGridContainer,
  HeadingContainer,
  HeadingTextStyle,
  Line,
  CrossLine,
  Cross,
  InfoPanelStyle,
  InfoPanelsContainer,
} from './styles.js';
import colors from '../../utils/colors';

import Box1 from './box1.js';
import Box2 from './box2.js';

const Heading = () => (
  <HeadingContainer>
    <Line />
    <HeadingTextStyle>Type of Insurance</HeadingTextStyle>
    <Line />
  </HeadingContainer>
);

const InfoGrid = ({
  showPanel1,
  hidePanel1,
  showPanel2,
  hidePanel2,
  navigateTo,
  SetPolicyType,
}) => (
  <InfoGridContainer>
    <Box1
      onClick={showPanel1}
      onMouseOut={hidePanel1}
      navigateTo={navigateTo}
      SetPolicyType={SetPolicyType}
    />
    <Box2
      onClick={showPanel2}
      onMouseOut={hidePanel2}
      navigateTo={navigateTo}
      SetPolicyType={SetPolicyType}
    />
  </InfoGridContainer>
);

const CrossMark = ({ onCloseButtonClicked }) => (
  <Cross onClick={onCloseButtonClicked}>
    <CrossLine
      color={colors.MOBILE_HEADER_BG}
      width="23px"
      height="2px"
      degrees="45deg"
    />
    <CrossLine
      color={colors.MOBILE_HEADER_BG}
      width="2px"
      height="25px"
      degrees="45deg"
      top="-1px"
      left="20px"
    />
  </Cross>
);

const InfoPanel1 = ({ show, x, y, onCloseButtonClicked }) => (
  <InfoPanelStyle x={x} y={y} show={show}>
    <CrossMark onCloseButtonClicked={onCloseButtonClicked} />
    With a term policy you select how much coverage you want and how long of a
    term. The term is the number of years that you want to have coverage. As
    long as you continue paying your premiums during those years, you will have
    that Life Insurance coverage. When the term is up however, your coverage
    stops. <br />
    <br />This is a great way to get started with Life Insurance. You’ll
    immediately have coverage in case something happens to you, so you can feel
    secure that you wont leave debt behind for someone else to pay. Once you’ve
    been approved by your carrier and you responsibly pay your premiums for a
    short time, you can approach your carrier about converting to a permanent
    policy.
  </InfoPanelStyle>
);

const InfoPanel2 = ({ show, x, y, onCloseButtonClicked }) => (
  <InfoPanelStyle x={x} y={y} show={show}>
    <CrossMark onCloseButtonClicked={onCloseButtonClicked} />
    A Permanent Life Insurance policy can be a little more complicated if you
    jump directly into it, but the perks are undeniable. Permanent policies
    don’t have an end date—which is why they’re called permanent—so as long as
    you keep paying your premium you’ll have the coverage you selected.<br />
    <br />
    Permanent policies accumulate a cash value. You could think of the policy
    like a savings account because as you put money in, that is money you’ll be
    able to access later once the policy has matured. <br />
    <br />You can borrow money from your mature Permanent Life Insurace Policy
    to pay off your student loans, pay the deposit on a house, pay off
    unexpected medical bills, or anything else that might come up. It’s a Life
    Insurance Policy that you can utilize during your life to achieve your
    goals, not just something that pays off if something happens to you.
  </InfoPanelStyle>
);

class TypeInsTermPerm extends Component {
  constructor(props) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);

    this.showInfoPanel1 = this.showInfoPanel1.bind(this);
    this.hideInfoPanel1 = this.hideInfoPanel1.bind(this);
    this.showInfoPanel2 = this.showInfoPanel2.bind(this);
    this.hideInfoPanel2 = this.hideInfoPanel2.bind(this);

    this.state = {
      panel1: { show: false, x: 0, y: 0, firstTime: false },
      panel2: { show: false, x: 0, y: 0, firstTime: false },
    };
  }

  showInfoPanel1(event) {
    this.setState({ panel1: { show: true, x: 60, y: event.clientY + 10 } });
  }

  hideInfoPanel1(event) {
    this.setState({ panel1: { show: false, x: 0, y: 0, firstTime: true } });
  }
  showInfoPanel2(event) {
    const x =
      window.innerWidth < 1120
        ? window.innerWidth * 0.5
        : window.innerWidth * 0.525;

    this.setState({ panel2: { show: true, x: x + 2, y: event.clientY + 10 } });
  }
  hideInfoPanel2(event) {
    if (this.state.panel2.show)
      this.setState({ panel2: { show: false, x: 0, y: 0, firstTime: true } });
  }

  navigateTo(route) {
    if (route.length) {
      this.props.navigateTo(route);
    }
  }

  render() {
    return (
      <Container>
        <Heading />
        <InfoGrid
          showPanel1={this.showInfoPanel1}
          hidePanel1={this.hideInfoPanel1}
          showPanel2={this.showInfoPanel2}
          hidePanel2={this.hideInfoPanel2}
          navigateTo={this.navigateTo}
          SetPolicyType={this.props.SetPolicyType}
        />
        <InfoPanelsContainer>
          <InfoPanel1
            show={this.state.panel1.show}
            x={this.state.panel1.x}
            y={this.state.panel1.y}
            onCloseButtonClicked={this.hideInfoPanel1}
          />
          <InfoPanel2
            show={this.state.panel2.show}
            x={this.state.panel2.x}
            y={this.state.panel2.y}
            onCloseButtonClicked={this.hideInfoPanel2}
          />
        </InfoPanelsContainer>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  SetPolicyType: type => dispatch(SetPolicyType(type)),
  navigateTo: route => dispatch(push(route)),
});

export default connect(null, mapDispatchToProps)(TypeInsTermPerm);
