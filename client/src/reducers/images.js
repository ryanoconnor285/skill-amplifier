import { UPLOAD_IMAGES, GET_IMAGE, UPLOAD_ERROR } from "../actions/types";

const initialState = {
  images: [],
  loading: true,
  error: {},
};

const imageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case UPLOAD_IMAGES:
      return {
        ...state,
        images: payload,
        loading: false,
      };
    case GET_IMAGE:
      return {
        ...state,
        loading: false,
      };
    case UPLOAD_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default imageReducer;
