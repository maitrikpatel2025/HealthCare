import heart from '../api/index';

/* import {
    CREATE_HEART,
    FETCH_HEARTS,
    FETCH_HEART,
    DELETE_HEART,
    EDIT_HEART
  } from './types'; */
import {
  CREATE_HEART,
  FETCH_HEARTS,
} from './types';


export const createHeart = formValues => async (dispatch) => {
  const response = await heart.post('/healthcare/api/v1/heart/add', { ...formValues });
  dispatch({ type: CREATE_HEART, payload: response.data });
};

export const fetchHearts = () => async dispatch => {
  const response = await heart.get('/healthcare/api/v1/heart');
  dispatch({ type: FETCH_HEARTS, payload: response.data });
};
/* 
export const fetchHeart= _id => async dispatch => {
  const response = await heart.get(`/healthcare/api/v1/heart/${_id}`);

  dispatch({ type: FETCH_HEART, payload: response.data });
};

export const editHeart= (_id, formValues) => async dispatch => {
  const response = await heart.put(`/healthcare/api/v1/heart/${_id}`, formValues);

  dispatch({ type: EDIT_HEART, payload: response.data });
};

export const deleteHeart= _id => async dispatch => {
  await heart.delete(`/healthcare/api/v1/heart/${_id}`);

  dispatch({ type: DELETE_HEART, payload: _id });
}; */