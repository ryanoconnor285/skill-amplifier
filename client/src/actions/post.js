import axios from "axios";

import { setAlert } from "./alert";

import { GET_ALL_POSTS, POST_ERROR } from "./types";

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    if (res.status === 200) {
      dispatch({
        type: GET_ALL_POSTS,
        payload: res.data,
      });
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
