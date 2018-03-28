import React from 'react';
import {
  Container,
  HorizontalBand,
  ChatBox,
  ChatBoxIcon,
  ChatText,
} from './styles';

const ChatBoxCTA = () => {
  return (
    <Container>
      <HorizontalBand />
      <ChatBox>
        <ChatBoxIcon />
        <ChatText fontSize={14} fontWeight={'bold'} color={'#fff'}>
          Chat with an expert
        </ChatText>
      </ChatBox>
    </Container>
  );
};

export default ChatBoxCTA;
