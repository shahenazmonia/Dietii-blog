import {getMeal,getMealSuccess,getMealFail} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  meal: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case getMeal:
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case getMealSuccess:
    return {
      ...state,
      isFetching: false,
      meal: payload
    };
  case getMealFail:
    return {
      ...state,
      isFetching: false,
      error: 'Sorry, You are not authorize to get a Male'
    };
  default:
    return state;
  }
};
