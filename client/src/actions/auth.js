import axios from 'axios';

import {
  setAlert
} from './alert';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types';

// Register a user

export const register = ({
  firstName,
  lastName,
  email,
  passord
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    passord
  });

  try {
    const res = await axios.post('/api/users', body, config);

    if (res.status === 200) {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, 'danger'))
      });
    }
    dispatch({
      type: REGISTER_FAIL
    })
  }
}