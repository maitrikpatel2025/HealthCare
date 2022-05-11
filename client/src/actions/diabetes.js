import diabete from "../api/index";

/* import {
    CREATE_DIABETE,
    FETCH_DIABETES,
    FETCH_DIABETE,
    DELETE_DIABETE,
    EDIT_DIABETE
  } from './types'; */
import { CREATE_DIABETE, FETCH_DIABETES } from "./types";

export const createDiabete = (formValues) => async (dispatch) => {
  const response = await diabete.post(
    "/healthcare/api/v1/diabetes/add",
    { ...formValues },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  dispatch({ type: CREATE_DIABETE, payload: response.data.result });
};

export const fetchDiabetes = () => async (dispatch) => {
  const response = await diabete.get("/healthcare/api/v1/diabetes");

  dispatch({ type: FETCH_DIABETES, payload: response.data });
};
/* 
export const fetchDiabete= _id => async dispatch => {
  const response = await diabete.get(`/healthcare/api/v1/diabetes/${_id}`);

  dispatch({ type: FETCH_DIABETE, payload: response.data });
};

export const editDiabete= (_id, formValues) => async dispatch => {
  const response = await diabete.put(`/healthcare/api/v1/diabetes/${_id}`, formValues);

  dispatch({ type: EDIT_DIABETE, payload: response.data });
};

export const deleteDiabete= _id => async dispatch => {
  await diabete.delete(`/healthcare/api/v1/diabetes/${_id}`);

  dispatch({ type: DELETE_DIABETE, payload: _id });
}; */
