import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../state/UseReducer";

export default configureStore({
      reducer:{
            users:userSlice
      }
})