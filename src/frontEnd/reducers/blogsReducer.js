import {getBlogs,getBlogsSuccess,getBlogsFail} from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  blogs: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case getBlogs:
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case getBlogsSuccess:
    return {
      ...state,
      isFetching: false,
      blogs: payload
    };
  case getBlogsFail:
    return {
      ...state,
      isFetching: false,
      error: 'Sorry, You are not authorize to get a blog'
    };
  default:
    return state;
  }
};
