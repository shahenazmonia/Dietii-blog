import fetch from 'isomorphic-fetch';
import handleErrors from '../helper/handleErrors';

const fetchMealStart = () => {
  return {
    type: 'getMeal'
  };
};

const fetchMealSuccess = (males) => {
  return {
    type: 'getMealSuccess',
    payload: males
  };
};

const fetchMealFails = () => {
  return {
    type: 'getMealFail'
  };
};

export const fetchMeal = (objectId) => {
  return (dispatch) => {
    dispatch(fetchMealStart());
    return fetch('https://dietii.herokuapp.com/parse//classes/Meals/'+ objectId, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'dietii',
        'X-Parse-Master-Key': 'dietii'
      }
    })
      .then(handleErrors)
      .then(result => dispatch(fetchMealSuccess(result)))
      .catch(() => dispatch(fetchMealFails()));
  };
};
