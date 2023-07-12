import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data/Data";
export const userSlice= createSlice({
      name:'users',
      initialState:userList,
      reducers:{
            addUser:(state,action)=>{
                  state.push(action.payload);
            },

            updateUser:(state,action)=>{
             const {id, name, email, phone}= action.payload;
             const updatingUser= state.find(user=>user.id == id);
             if(updatingUser){
                  updatingUser.name= name,
                  updatingUser.email= email,
                  updatingUser.phone= phone
             }
            },

            deleteUser:(state,action)=>{
                  const {id}= action.payload;
                  const uu= state.find(user=>user.id ==id);
                  if(uu){
                        return state.filter(user=>user.id !== id);
                  }
            }
      }
})

export const {addUser,updateUser,deleteUser}= userSlice.actions;

export default userSlice.reducer;