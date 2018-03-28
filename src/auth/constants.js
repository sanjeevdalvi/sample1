const CALLBACKLOCALURL = 'http://localhost:3001/#/'; //add  query paramed url and then redirect
const CALLBACKSTAGINGURL = // eslint-disable-line
  'http://meply-fe-staging.s3-website.us-east-2.amazonaws.com/#/'; // eslint-disable-line
const CALLBACKPRODUCTIONURL = ''; // eslint-disable-line

export const AUTH_CONFIG = {
  domain: 'meply.auth0.com',
  clientId: 'qhlxMuWucnWe8m8HymFAT7M-gZaBfgvT',
  clientSecret:
    'uCLIBFs4Jpai_LSFZzZZH2KQ3auzSyfrVWwCjZLGSYNnMYwxNqY5i9c8e-_tnV5I',
  callbackUrl: CALLBACKLOCALURL,
};
