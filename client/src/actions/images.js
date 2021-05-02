import axios from "axios";

// import { setAlert } from "./alert";

import { UPLOAD_IMAGES } from "./types";

export const uploadImages = (files) => async (dispatch) => {
  const fd = new FormData();
  fd.append("images", files, files.name);
  try {
    const res = await axios.post("/api/images", fd);

    if (res.status === 200) {
      dispatch({
        type: UPLOAD_IMAGES,
        payload: res.data,
      });
    }
  } catch (err) {
    console.error(err);
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => {
    //     dispatch(setAlert(error.msg, "danger"));
    //   });
    // }
    // dispatch({
    //   type: UPLOAD_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};
