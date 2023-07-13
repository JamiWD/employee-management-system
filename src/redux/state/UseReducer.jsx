import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { users } from "../../Data/Data";

export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
      const res = await fetch("https://user-management-server-flax.vercel.app/users/", {
            method: "POST",
            headers: {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
      });
      try {
            const result = await res.json();
            return result
      } catch (error) {
            return rejectWithValue(error);
      }

})

//update user
export const updateUser = createAsyncThunk(
      "updateUser",
      async (data, { rejectWithValue }) => {

            const res = await fetch(`https://user-management-server-flax.vercel.app/users/${data._id}`, {
                  method: "PATCH",
                  headers: {
                        "Content-Type": "application/json"
                  },
                  body: JSON.stringify(data)
            });
            try {
                  const result = await res.json();
                  console.log(result);
                  return result;
            } catch (error) {
                  console.log(error);
                  return rejectWithValue(error)
            }
      }
)


//show all user
export const showUser = createAsyncThunk("showUser", async (args, { rejectWithValue }) => {
      const res = await fetch('https://user-management-server-flax.vercel.app/users/');

      try {
            const result = res.json();

            return result;
      } catch (error) {
            return rejectWithValue(error);
      }
})




// delete user 
export const deleteUser = createAsyncThunk("deleteUser",
      async (_id, { rejectWithValue }) => {
            const res = await fetch(`https://user-management-server-flax.vercel.app/users/${_id}`, {
                  method: "DELETE"
            });
            try {
                  const result = await res.json();
                  return result;
            } catch (error) {
                  return rejectWithValue(error);
            }
      }
)

export const userSlice = createSlice({
      name: 'users',
      initialState: {
            users: [],
            loading: false,
            error: null,
      },
      reducers: {
            searchUser: (state, action) => {
                  state.searchData = action.payload;
                },
      },

      extraReducers: {
            // create user 
            [createUser.pending]: (state) => {
                  state.loading = true;
            },
            [createUser.fulfilled]: (state, action) => {
                  state.loading = false;
                  state.users.push(action.payload);

            },
            [createUser.rejected]: (state, action) => {
                  state.loading = false;
                  state.error = action.payload;
            },

            //  show user 
            [showUser.pending]: (state) => {
                  state.loading = true;
            },
            [showUser.fulfilled]: (state, action) => {
                  state.loading = false;
                  state.users = action.payload;
            },
            [showUser.rejected]: (state, action) => {
                  state.loading = false;
                  state.error = action.payload;

            },



            // deleteUser 
            [deleteUser.pending]: (state) => {
                  state.loading = true;
            },
            [deleteUser.fulfilled]: (state, action) => {
                  state.loading = false;
                  const id = action.meta.arg;
                  if (id) {
                        state.users = state.users.filter((ele) => ele._id !== id);
                  }



            },
            [deleteUser.rejected]: (state, action) => {
                  state.loading = false;
                  state.error = action.payload;
            },
            [updateUser.pending]: (state) => {
                  state.loading = true;
            },
            [updateUser.fulfilled]: (state, action) => {
                  state.loading = false;
                  state.users = state.users.map((ele) =>
                        ele._id === action.meta.arg ? action.payload : ele
                  );
            },
            [updateUser.pending]: (state, action) => {
                  state.loading = false;
                  console.log(action);
                  state.error = action.payload;
            }


      }
})

// export const {addUser,updateUser,deleteUser}= userSlice.actions;

export default userSlice.reducer;
export const { searchUser } = userSlice.actions;