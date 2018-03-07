import fetch from 'isomorphic-fetch';
import handleErrors from '../helper/handleErrors';
import {getBlog,getBlogSuccess,getBlogFail} from '../constants/actionTypes';
const fetchBlogStart = () => {
  return {
    type: getBlog
  };
};

const fetchBlogSuccess = (blog) => {
  return {
    type: getBlogSuccess,
    payload: blog
  };
};

const fetchBlogFails = () => {
  return {
    type: getBlogFail
  };
};

export const fetchBlog = (objectId) => {
  return (dispatch) => {
    dispatch(fetchBlogStart());
    return fetch(`https://dietii.herokuapp.com/parse//classes/atricles/${objectId}` , {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'dietii',
        'X-Parse-Master-Key': 'dietii'
      }
    })
      .then(handleErrors)
      .then(result => dispatch(fetchBlogSuccess(result)))
      .catch(() => dispatch(fetchBlogFails()));
  };
};
