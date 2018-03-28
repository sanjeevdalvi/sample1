import React from 'react';
import windowDimensions from 'react-window-dimensions';

import CarriersCarousel from '../../components/carriers-carousel';
import CarriersGrid from '../../components/carriers-grid';

import Images from '../../utils/images';

import { Container } from './styles';

const otherCarriers = [
  {
    name: 'Nationwide',
    srcImg: Images.srcNationwideLogo,
    width: '76px',
    height: '85px',
  },
  {
    name: 'John Hancock',
    srcImg: Images.srcJohnHancockLogo,
    width: '132px',
    height: '48px',
    top: '25px',
  },
  {
    name: 'Mass Mutual',
    srcImg: Images.srcMassMutualLogo,
    width: '132px',
    height: '33px',
    top: '25px',
  },
  {
    name: 'New York Life',
    srcImg: Images.srcNYLifeLogo,
    width: '63px',
    height: '66px',
  },
  {
    name: 'AIG',
    srcImg: Images.srcAIGLogo,
    width: '87px',
    height: '53px',
    top: '5px',
  },
  {
    name: 'Banner Life',
    srcImg: Images.srcBannerLifeLogo,
    width: '89px',
    height: '52px',
    top: '5px',
  },
  {
    name: 'Brighthouse',
    srcImg: Images.srcBrighthouseLogo,
    width: '132px',
    height: '34px',
    top: '20px',
  },
  {
    name: 'State Farm',
    srcImg: Images.srcStateFarmLogo,
    width: '138px',
    height: '21px',
    top: '25px',
  },
  {
    name: 'Northwestern Mutual',
    srcImg: Images.srcNWWesternLogo,
    width: '149px',
    height: '32px',
    top: '25px',
  },
  {
    name: 'Pacific Life',
    srcImg: Images.srcPacificLifeLogo,
    width: '92px',
    height: '49px',
    top: '5px',
  },
  {
    name: 'Guardian',
    srcImg: Images.srcGuardianLogo,
    width: '83px',
    height: '48px',
    top: '5px',
  },
  {
    name: 'Prudential',
    srcImg: Images.srcPrudentialLogo,
    width: '130px',
    height: '30px',
    top: '25px',
  },
];

const heading = 'OTHER CARRIERS';
const OtherInsCarriers = ({ width, height }) => (
  <Container>
    {width < 820 ? (
      <CarriersCarousel carriers={otherCarriers} heading={heading} />
    ) : (
      <CarriersGrid carriers={otherCarriers} heading={heading} />
    )}
  </Container>
);

export default windowDimensions()(OtherInsCarriers);
