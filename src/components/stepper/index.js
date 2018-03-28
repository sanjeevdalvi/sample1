import React from 'react';
import Banner from '../../components/banner';
import BuildPolicyTab from '../../components/build-policy-tab';
import { Switch } from 'react-router-dom';
import { Container } from './styles';

const Stepper = ({
  steps,
  navigateTo,
  currentStep,
  product,
  baseUrl,
  children,
}) => {
  return (
    <Container>
      <Banner
        background={steps[currentStep - 1].bannerBackground}
        heading={steps[currentStep - 1].heading}
      />
      <BuildPolicyTab
        currentTab={currentStep}
        navigateTo={navigateTo}
        product={product}
        stepItems={steps}
        baseUrl={baseUrl}
      />
      <Switch navigateTo={navigateTo}>{children}</Switch>
    </Container>
  );
};
export default Stepper;
