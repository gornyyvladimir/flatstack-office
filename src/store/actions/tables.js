import * as actionTypes from './actionTypes';
import { authRef, databaseRef, googleProvider } from '../../firebase';

export const fetchTablesStart = () => {
  return {
    type: actionTypes.FETCH_TABLES_START,
  };
};

export const fetchTablesSuccess = tables => {
  return {
    type: actionTypes.FETCH_TABLES_SUCCESS,
    payload: {
      tables,
    },
  };
};

export const fetchTablesFail = error => {
  return {
    type: actionTypes.FETCH_TABLES_FAIL,
    payload: {
      error,
    },
  };
};

//fix tables 1 in production
export const fetchTables = () => {
  return dispatch => {
    dispatch(fetchTablesStart());
    databaseRef
      .ref('/tables1')
      .once('value')
      .then(snapshot => {
        dispatch(fetchTablesSuccess(snapshot.val()));
      })
      .catch(error => {
        dispatch(fetchTablesFail(error));
      });
  };
};
