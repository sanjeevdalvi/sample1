import React from 'react';
import { Container, Message, Spinner } from './styles';

const Redirect = ({
  steps,
  navigateTo,
  currentStep,
  product,
  baseUrl,
  children,
}) => {
  return (
    <Container>
      <Message>Please wait while we authorize your account ....</Message>
      <Spinner />
    </Container>
  );
};
export default Redirect;
