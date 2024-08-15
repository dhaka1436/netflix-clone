import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "User",

  initialState: null,

  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null,
  },
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
