import { push } from 'react-router-redux';
import { clearState } from '../helpers/local-storage';
import {
  postUserInfo,
  getTermQuotes,
  getPermQuotes,
  postOrder,
  updateUserInfo,
  submitApplication,
} from '../helpers/api';
import { SetRedirectUrl } from './personal-info';

export const CHANGE_STEP = 'CHANGE_STEP';
export const SET_POLICY_TYPE = 'SET_POLICY_TYPE';
export const SET_POLICY_COVERAGE_TERM = 'SET_POLICY_COVERAGE_TERM';
export const SET_POLICY_COVERAGE_AMOUNT = 'SET_POLICY_COVERAGE_AMOUNT';
export const SET_PERSONAL_INFO = 'SET_PERSONAL_INFO';
export const SET_PAYMENT_OPTION = 'SET_PAYMENT_OPTION';
export const SET_FILTER_POLICY_TYPE = 'SET_FILTER_POLICY_TYPE';
export const SET_IF_CONVERTIBLE_POLICY = 'SET_IF_CONVERTIBLE_POLICY';
export const SET_AVAILABLE_QUOTES = 'SET_AVAILABLE_QUOTES';
export const SET_SELECTED_QUOTE = 'SET_SELECTED_QUOTE';
export const SET_REVIEW_DETAILS = 'SET_REVIEW_DETAILS';
export const LOGOUT = 'LOGOUT';

const initialState = {
  currentStep: null,
  policyType: null,
  policyAmount: null,
  policyTerm: null,
  userInfo: null,
  paymentOption: null,
  filterTypeOfPolicy: null,
  isConvertiblePolicy: null,
  availableQuotes: [],
  selectedQuote: null,
  reviewDetails: null,
};

// ---------------------- Action Creators Start ----------------------

export const changeStep = step => ({
  type: CHANGE_STEP,
  step,
});

export const setPolicyType = policyType => ({
  type: SET_POLICY_TYPE,
  policyType,
});

export const setCoverageTerm = term => ({
  type: SET_POLICY_COVERAGE_TERM,
  term,
});

export const setCoverageAmount = amount => ({
  type: SET_POLICY_COVERAGE_AMOUNT,
  amount,
});

export const setPersonalInfo = info => ({
  type: SET_PERSONAL_INFO,
  info,
});

export const setPaymentOption = payment => ({
  type: SET_PAYMENT_OPTION,
  payment,
});

export const setFilterPolicyType = policy => ({
  type: SET_FILTER_POLICY_TYPE,
  policy,
});

export const setIfConvertiblePolicy = value => ({
  type: SET_IF_CONVERTIBLE_POLICY,
  value,
});

export const setAvailableQuotes = quotes => ({
  type: SET_AVAILABLE_QUOTES,
  quotes,
});

export const setSelectedQuote = quote => ({
  type: SET_SELECTED_QUOTE,
  quote,
});

export const setReviewDetails = details => ({
  type: SET_REVIEW_DETAILS,
  details,
});

export const logOut = () => ({
  type: LOGOUT,
});

// ----------------------Action Creators End ----------------------

export const SetStep = (step, redirectUrl) => dispatch => {
  dispatch(changeStep(step));
  dispatch(SetRedirectUrl(redirectUrl));
};

export const SetPolicyType = type => dispatch => {
  dispatch(setPolicyType(type));
};

export const SetCoverageTerm = term => dispatch => {
  dispatch(setCoverageTerm(term));
};

export const SetCoverageAmount = amount => dispatch => {
  dispatch(setCoverageAmount(amount));
};

export const SetPersonalInfo = (
  info,
  baseUrl,
  product,
  userId,
  profileExist
) => async dispatch => {
  try {
    if (!profileExist) {
      await postUserInfo(info);
    } else {
      await updateUserInfo(userId, info);
    }
    if (product === 'perm') {
      await postOrder(userId, {
        coverage: '0',
        term_length: null,
        type: product.toString(),
      });
      await submitApplication({
        user_id: userId,
        coverage: '0',
        term_length: '0',
        type: product.toString(),
        carrierCode: 'abc',
        carrierName: 'abc',
        productName: 'abc',
        price: 0,
        planType: 'abc',
        status: 'open',
      });
    }
  } catch (error) {
    //log error
  }
  dispatch(setPersonalInfo(info));
  if (product !== 'perm') {
    dispatch(push(`${baseUrl}/quote`));
  } else {
    dispatch(push('/my-account/my-insurance'));
  }
};

export const SetPaymentOption = option => dispatch =>
  dispatch(setPaymentOption(option));

export const SetFilterPolicyType = policy => dispatch =>
  dispatch(setPolicyType(policy));

export const SetIfConvertiblePolicy = isCovertible => dispatch =>
  dispatch(setIfConvertiblePolicy(isCovertible));

const carrierReducer = (result, quote) => {
  const ropQuotes = result[0];
  const otherQuotes = result[1];
  const ropQuote = result[0][quote.carrierCode];
  const otherQuote = result[1][quote.carrierCode];

  if (quote.isROP && ropQuote && ropQuote.annual > quote.annual) {
    ropQuotes[quote.carrierCode] = quote;
  } else if (otherQuote && otherQuote.annual > quote.annual) {
    otherQuotes[quote.carrierCode] = quote;
  }

  if (quote.isROP && !ropQuote) {
    ropQuotes[quote.carrierCode] = quote;
  }
  if (!quote.isROP && !otherQuote) {
    otherQuotes[quote.carrierCode] = quote;
  }
  return result;
};

const filterMultipleQuotes = quotes => {
  if (quotes && quotes.length) {
    const filteredQuotes = quotes.reduce(carrierReducer, [{}, {}]);
    return filteredQuotes.reduce((result, quotes) => {
      return result.concat(Object.values(quotes));
    }, []);
  }
  return quotes;
};

export const GetAvailableQuotes = (
  userId,
  amount,
  term,
  type,
  product
) => async dispatch => {
  let response = null;
  try {
    if (product === 'term') {
      response = await getTermQuotes(userId, amount, term);
    } else if (product === 'perm') {
      response = await getPermQuotes(userId, amount);
    } else if (product === 'final_expense') {
      response = [];
    }
    dispatch(setAvailableQuotes(filterMultipleQuotes(response.data)));
    await postOrder(userId, {
      coverage: amount ? amount.toString() : '',
      term_length: term ? term.toString() : null,
      type: type.toString(),
    });
  } catch (error) {
    dispatch(setAvailableQuotes([]));
  }
};

export const SetSelectedQuote = quote => dispatch => {
  dispatch(setSelectedQuote(quote));
};

export const SetReviewDetails = (
  userId,
  application,
  userDetails
) => async dispatch => {
  dispatch(setReviewDetails(userDetails));
  try {
    await updateUserInfo(userId, userDetails);
    const response = await submitApplication(application);
    dispatch(setAvailableQuotes(response.data));
    dispatch(push('/my-account/my-insurance'));
  } catch (error) {
    //error
  }
};

export const ULogOut = () => dispatch => {
  localStorage.removeItem('state');
  dispatch(logOut());
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        currentStep: action.step,
      };
    case SET_POLICY_TYPE:
      return {
        ...state,
        policyType: action.policyType,
      };
    case SET_POLICY_COVERAGE_TERM:
      return {
        ...state,
        policyTerm: action.term,
      };
    case SET_POLICY_COVERAGE_AMOUNT:
      return {
        ...state,
        policyAmount: action.amount,
      };
    case SET_PERSONAL_INFO:
      return {
        ...state,
        userInfo: action.info,
      };
    case SET_PAYMENT_OPTION:
      return {
        ...state,
        paymentOption: action.payment,
      };
    case SET_FILTER_POLICY_TYPE:
      return {
        ...state,
        filterTypeOfPolicy: action.policy,
      };
    case SET_IF_CONVERTIBLE_POLICY:
      return {
        ...state,
        isConvertiblePolicy: action.value,
      };
    case SET_AVAILABLE_QUOTES:
      return {
        ...state,
        availableQuotes: action.quotes,
      };
    case SET_SELECTED_QUOTE:
      return {
        ...state,
        selectedQuote: action.quote,
      };
    case SET_REVIEW_DETAILS:
      clearState();
      return {
        ...initialState,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return { ...state };
  }
};
