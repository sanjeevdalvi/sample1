// const PROD_BASE_URL = ''; // eslint-disable-line
const DEV_BASE_URL =
  'http://ec2-18-216-47-218.us-east-2.compute.amazonaws.com/meply/api/1.0'; // eslint-disable-line

// const BASE_URL = DEV_BASE_URL;

const buildHeaders = (authToken = null) => {
  const returnValue = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  if (authToken) {
    returnValue['Authorization'] = `Bearer ${authToken}`;
  }
  return returnValue;
};

export const buildQuery = queryObject => {
  const keys = Object.keys(queryObject);
  return keys
    .map(key => {
      let value = queryObject[key];
      if (value === undefined) {
        return '';
      }
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return '';
        }
        value = value.map(item => encodeURIComponent(item)).join(',');
      } else {
        value = encodeURIComponent(value);
      }
      return `${encodeURIComponent(key)}=${value}`;
    })
    .filter(has => !!has)
    .join('&');
};

const jsonFetch = async (url, options = {}, authToken = '') => {
  const response = await fetch(url, {
    ...options,
    headers: buildHeaders(authToken),
  });
  try {
    const jsonResponse = await response.json();
    if (response.status >= 400) {
      return {
        ...jsonResponse,
        success: false,
      };
    }
    return Array.isArray(jsonResponse)
      ? jsonResponse
      : {
          ...jsonResponse,
          success: true,
        };
  } catch (error) {
    if (response.status === 200) {
      return {
        success: true,
      };
    }
    return {
      success: false,
      message: 'Server Error!',
    };
  }
};

export const customAuth0Registeration = async (payload, authToken = '') => {
  const customAuth0RegisterationURL =
    'https://meply.auth0.com/dbconnections/signup';
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    customAuth0RegisterationURL,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const customAuth0Token = async (payload, authToken = '') => {
  const customAuth0RegisterationURL = 'https://meply.auth0.com/oauth/token';
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    customAuth0RegisterationURL,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const getUserData = async (payload, authToken = '') => {
  const getUserDataURL = `${DEV_BASE_URL}/user`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    getUserDataURL,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const linkSocial = async (user_id, payload, authToken = '') => {
  const getUserDataURL = `${DEV_BASE_URL}/user/${user_id}/addProfile`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    getUserDataURL,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const postUserInfo = async (payload, authToken = '') => {
  const postUserInfoUrl = `${DEV_BASE_URL}/user_info`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    postUserInfoUrl,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const updateUserInfo = async (user_id, payload, authToken = '') => {
  const updateUserInfoUrl = `${DEV_BASE_URL}/user_info/${user_id}`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    updateUserInfoUrl,
    { body, method: 'PUT', json: true },
    authToken
  );
  return response;
};

export const postOrder = async (userId, payload, authToken = '') => {
  const postOrderaURL = `${DEV_BASE_URL}/${userId}/order`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    postOrderaURL,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const getTermQuotes = async (
  userId,
  amount,
  term,
  state = 'AL',
  authToken = ''
) => {
  const getTermQuotesUrl = `${DEV_BASE_URL}/termQuotes?user_id=${
    userId
  }&faceAmount=${amount}&term=${term}&state=${state}`;
  return await jsonFetch(getTermQuotesUrl, { method: 'GET' }, authToken);
};

export const getPermQuotes = async (userId, amount, authToken = '') => {
  const getPermQuotesUrl = `${DEV_BASE_URL}/permQuotes?user_id=${
    userId
  }&faceAmount=${amount}`;
  return await jsonFetch(getPermQuotesUrl, { method: 'GET' }, authToken);
};

export const submitApplication = async (payload, authToken = '') => {
  const submitApplicationUrl = `${DEV_BASE_URL}/applications`;
  const body = JSON.stringify(payload);
  const response = await jsonFetch(
    submitApplicationUrl,
    { body, method: 'POST', json: true },
    authToken
  );
  return response;
};

export const sendPasswordLink = async (payload, authToken = '') => {
  // const getUserDataURL = `${DEV_BASE_URL}/getUserData`;
  // const body = JSON.stringify(payload);
  // const response = await jsonFetch(
  //   getUserDataURL,
  //   { body, method: 'POST', json: true },
  //   authToken
  // );
  const response = {
    success: true,
  };
  return response;
};

export const savePIDetails = async (payload, authToken = '') => {
  // const getUserDataURL = `${DEV_BASE_URL}/getUserData`;
  // const body = JSON.stringify(payload);
  // const response = await jsonFetch(
  //   getUserDataURL,
  //   { body, method: 'POST', json: true },
  //   authToken
  // );
  const response = {
    success: true,
  };
  return response;
};

export const fetchQuotes = async (userId, authToken = '') => {
  const fetchQuotesUrl = `${DEV_BASE_URL}/${userId}/orders`;
  return await jsonFetch(fetchQuotesUrl, { method: 'GET' }, authToken);
};

export const saveProfile = async (payload, authToken = '') => {
  // const getUserDataURL = `${DEV_BASE_URL}/getUserData`;
  // const body = JSON.stringify(payload);
  // const response = await jsonFetch(
  //   getUserDataURL,
  //   { body, method: 'POST', json: true },
  //   authToken
  // );
  const response = {
    success: true,
  };
  return response;
};

export const fetchInsurance = async (userId, authToken = '') => {
  const fetchInsuranceUrl = `${DEV_BASE_URL}/user/${userId}/applications`;
  return await jsonFetch(fetchInsuranceUrl, { method: 'GET' }, authToken);
};

export const fetchPersonInformation = async (userId, authToken = '') => {
  const fetchPersonInformationUrl = `${DEV_BASE_URL}/user_info/${userId}`;
  return await jsonFetch(
    fetchPersonInformationUrl,
    { method: 'GET' },
    authToken
  );
};
