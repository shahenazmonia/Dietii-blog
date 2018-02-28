import fetch from 'isomorphic-fetch';
import handleErrors from '../helper/handleErrors';
import {getBlogs,getBlogsSuccess,getBlogsFail} from '../constants/actionTypes';
const fetchBlogsStart = () => {
  return {
    type: getBlogs
  };
};

const fetchBlogsSuccess = (blogs) => {
  return {
    type: getBlogsSuccess,
    payload: blogs
  };
};

const fetchBlogsFails = () => {
  return {
    type: getBlogsFail
  };
};

export const fetchBlogs = () => {
  return (dispatch) => {
    dispatch(fetchBlogsStart());
    return fetch('https://dietii.herokuapp.com/parse//classes/atricles', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'dietii',
        'X-Parse-Master-Key': 'dietii'
      }
    })
      .then(handleErrors)
      .then(result => dispatch(fetchBlogsSuccess(result)))
      .catch(() => dispatch(fetchBlogsFails()));
  };
};
