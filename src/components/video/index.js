import React, { Component } from 'react';
import {
  Container,
  VideoContainer,
  Description,
  DescriptionText,
  DecorationImage,
  VideoElement,
} from './styles';
import IMAGES from '../../utils/images';

class Video extends Component {
  render() {
    return (
      <Container image={this.props.image}>
        <VideoContainer>
          <VideoElement poster={this.props.poster} controls>
            <source src={this.props.videoURL} />
          </VideoElement>
        </VideoContainer>
        <Description>
          <DescriptionText>{this.props.description}</DescriptionText>
          <DecorationImage src={IMAGES.videoDecorationImage} />
        </Description>
      </Container>
    );
  }
}

export default Video;
