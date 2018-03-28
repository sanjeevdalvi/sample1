import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import './slider.css';

class PolicySlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: props.value,
    };
  }

  handleChangeStart = () => {
    console.log('Change event started');
  };

  handleChange = value => {
    this.setState({
      value: value,
    });
  };

  handleChangeComplete = () => {
    const { value } = this.state;
    this.props.onChange(value);
  };

  render() {
    const { value } = this.state;
    return (
      <div className="slider">
        <Slider
          min={this.props.min ? this.props.min : 0}
          max={this.props.max}
          value={value}
          step={this.props.step}
          tooltip={false}
          onChangeStart={this.handleChangeStart}
          onChange={this.handleChange}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    );
  }
}

export default PolicySlider;
