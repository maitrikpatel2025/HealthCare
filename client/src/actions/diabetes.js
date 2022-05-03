import cancer from '../api/index';

/* import {
    CREATE_CANCER,
    FETCH_CANCERS,
    FETCH_CANCER,
    DELETE_CANCER,
    EDIT_CANCER
  } from './types'; */
import {
  CREATE_CANCER,
  FETCH_CANCERS,
} from './types';


export const createCancer = formValues => async (dispatch) => {
  const response = await cancer.post('/healthcare/api/v1/breastcancer/add', { ...formValues });
  dispatch({ type: CREATE_CANCER, payload: response.data });
};

export const fetchCancers = () => async dispatch => {
  const response = await cancer.get('/healthcare/api/v1/breastcancer');

  dispatch({ type: FETCH_CANCERS, payload: response.data });
};
/* 
export const fetchCancer = _id => async dispatch => {
  const response = await cancer.get(`/healthcare/api/v1/breastcancer/${_id}`);

  dispatch({ type: FETCH_CANCER, payload: response.data });
};

export const editCancer = (_id, formValues) => async dispatch => {
  const response = await cancer.put(`/healthcare/api/v1/breastcancer/${_id}`, formValues);

  dispatch({ type: EDIT_CANCER, payload: response.data });
};

export const deleteCancer = _id => async dispatch => {
  await cancer.delete(`/healthcare/api/v1/breastcancer/${_id}`);

  dispatch({ type: DELETE_CANCER, payload: _id });
}; */