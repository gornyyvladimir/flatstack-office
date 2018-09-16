import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        error: null,
        loading: false,
      };
    case actionTypes.FETCH_USER_FAIL:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
