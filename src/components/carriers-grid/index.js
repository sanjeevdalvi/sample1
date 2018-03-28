import React, { Component } from 'react';
import { Heading, CarrierContainer, CarrierLogo, Container } from './styles';

class CarriersGrid extends Component {
  render() {
    return (
      <div>
        <Heading>{this.props.heading} </Heading>
        <Container>
          {this.props.carriers.map((carrier, i) => (
            <InsuranceCarrier key={i} carrier={carrier} />
          ))}
        </Container>
      </div>
    );
  }
}

class InsuranceCarrier extends Component {
  render() {
    return (
      <CarrierContainer>
        <CarrierLogo
          src={this.props.carrier.srcImg}
          carrier={this.props.carrier}
        />
      </CarrierContainer>
    );
  }
}

export default CarriersGrid;
