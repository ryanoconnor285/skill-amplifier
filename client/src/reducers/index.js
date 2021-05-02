import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import post from "./post";
import images from "./images";

export default combineReducers({ alert, auth, post, images });
