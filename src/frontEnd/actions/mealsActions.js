import fetch from 'isomorphic-fetch';
import handleErrors from '../helper/handleErrors';

const fetchMealsStart = () => {
  return {
    type: 'getMeals'
  };
};

const fetchMealsSuccess = (males) => {
  return {
    type: 'getMealsSuccess',
    payload: males
  };
};

const fetchMealsFails = () => {
  return {
    type: 'getMealsFail'
  };
};

export const fetchMeals = () => {
  return (dispatch) => {
    dispatch(fetchMealsStart());
    return fetch('https://dietii.herokuapp.com/parse//classes/Meals', {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': 'dietii',
        'X-Parse-Master-Key': 'dietii'
      }
    })
      .then(handleErrors)
      .then(result => dispatch(fetchMealsSuccess(result)))
      .catch(() => dispatch(fetchMealsFails()));
  };
};
