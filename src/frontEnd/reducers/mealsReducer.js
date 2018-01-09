const initialState = {
  isFetching: false,
  meals: {},
  error: ''
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
  case 'getMeals':
    return {
      ...state,
      isFetching: true,
      error: initialState.error
    };
  case 'getMealsSuccess':
    return {
      ...state,
      isFetching: false,
      meals: payload
    };
  case 'getMealsFail':
    return {
      ...state,
      isFetching: false,
      error: 'Sorry, You are not authorize to get Males'
    };
  default:
    return state;
  }
};
