import {getBlog,getBlogSuccess,getBlogFail} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  blog: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case getBlog:
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case getBlogSuccess: {
    return {
      ...state,
      isFetching: false,
      blog: payload
    };
  }
  case getBlogFail:
    return {
      ...state,
      isFetching: false,
      error: 'Sorry, You are not authorize to get a blog'
    };
  default:
    return state;
  }
};
