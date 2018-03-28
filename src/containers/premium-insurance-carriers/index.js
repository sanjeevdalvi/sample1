import React from 'react';
import windowDimensions from 'react-window-dimensions';

import CarriersCarousel from '../../components/carriers-carousel';
import CarriersGrid from '../../components/carriers-grid';

import Images from '../../utils/images';

import { Container } from './styles';

const premiumCariers = [
  {
    name: 'Omaha Mutual',
    srcImg: Images.srcOmahaMutualLogo,
    width: '100px',
    height: '75px',
  },
  { name: 'Lincoln', srcImg: Images.srcLincolnLogo },
  { name: 'Trans America', srcImg: Images.srctransamericaLogo },
  {
    name: 'Gerber ',
    srcImg: Images.srcGerberLogo,
    width: '100px',
    height: '100px',
  },
  {
    name: 'Prudential',
    srcImg: Images.srcPrudentialLogo2,
    width: '140px',
    height: '34px',
    top: '25px',
  },
  { name: 'Protective', srcImg: Images.srcProtectiveLogo },
  { name: 'Anthem', srcImg: Images.srcAnthemLogo },
  { name: 'Cigna', srcImg: Images.srcCignaLogo },
];

const heading = 'OUR PREMIER CARRIERS';
const PremiumInsCarriers = ({ width, height }) => (
  <Container>
    {width < 820 ? (
      <CarriersCarousel carriers={premiumCariers} heading={heading} />
    ) : (
      <CarriersGrid carriers={premiumCariers} heading={heading} />
    )}
  </Container>
);

export default windowDimensions()(PremiumInsCarriers);
