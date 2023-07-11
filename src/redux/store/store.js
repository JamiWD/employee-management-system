import { configureStore } from "@reduxjs/toolkit";
import UseReducer from "../state/UseReducer";
UseReducer
export default configureStore({
      reducer:{
            users:UseReducer
      }
})