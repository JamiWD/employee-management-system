import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userList } from "../../Data/Data";

export const createUser= createAsyncThunk("createUser",async(data,{rejectWithValue})=>{
  const res= await fetch("http://localhost:3000/users/",{
      method:"POST",
      headers:{
            "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
  });
  try{
      const result = await res.json();
      return result
  }catch(error){
      return rejectWithValue(error);
  }

})

export const showUser=createAsyncThunk("showUser", async(args,{rejectWithValue})=>{
      const res= await fetch('http://localhost:3000/users/');

      try{
            const result = res.json();
         
            return result;
      }catch(error){
            return rejectWithValue(error);
      }
})


// delete user 
export const deleteUser= createAsyncThunk("deleteUser",
async(_id,{rejectWithValue})=>{
      const res= await fetch(`http://localhost:3000/users/${_id}`,{
            method:"DELETE"
      });
      try{
            const result = await res.json();
            return result;
      }catch(error){
            return rejectWithValue(error);
      }
}
)

export const userSlice= createSlice({
      name:'users',
      initialState:{
            users:[],
            loading:false,
            error:null,
      },
      reducers:{
            // addUser:(state,action)=>{
            //       state.push(action.payload);
            // },

            // updateUser:(state,action)=>{
            //  const {id, name, email, phone}= action.payload;
            //  const updatingUser= state.find(user=>user.id == id);
            //  if(updatingUser){
            //       updatingUser.name= name,
            //       updatingUser.email= email,
            //       updatingUser.phone= phone
            //  }
            // },

            // deleteUser:(state,action)=>{
            //       const {id}= action.payload;
            //       const uu= state.find(user=>user.id ==id);
            //       if(uu){
            //             return state.filter(user=>user.id !== id);
            //       }
            // }
      },

      extraReducers:{
            // create user 
            [createUser.pending]:(state)=>{
                  state.loading=true;
            },
            [createUser.fulfilled]:(state,action)=>{
                  state.loading= false;
                  state.users.push(action.payload);
            },
            [createUser.rejected]:(state,action)=>{
                  state.loading= false;
                  state.error= action.payload;
            },

      //  show user 
            [showUser.pending]: (state)=>{
                  state.loading=true;
            },
            [showUser.fulfilled]:(state,action)=>{
                  state.loading=false;
                  state.users=action.payload;
            },
            [showUser.rejected]:(state,action)=>{
                  state.loading=false;
                  state.error=action.payload;

            },

            // deleteUser 
            [deleteUser.pending]: (state)=>{
                  state.loading=true;
            },
            [deleteUser.fulfilled]:(state,action)=>{
                  state.loading=false;
                  const {_id}=action.payload;
                  if(_id){
                        state.users= state.users.filter(user=>user._id !== _id);
                  }
            },
            [deleteUser.rejected]:(state,action)=>{
                  state.loading=false;
                  state.error=action.payload;

            }
      }
})

// export const {addUser,updateUser,deleteUser}= userSlice.actions;

export default userSlice.reducer;