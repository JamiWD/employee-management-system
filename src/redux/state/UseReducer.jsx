import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data/Data";
userList
export const userSlice= createSlice({
      name:'users',
      initialState:userList,
      reducers:{}
})

export default userSlice.reducer;