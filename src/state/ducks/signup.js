import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'modal',
  initialState: [
    {
      id: 1,
      loginAs: 'user',
      fullname: 'Md. Khair',
      email: 'khair@gmail.com',
      password: 123456,
    },
  ],
  reducers: {
    addInfos: (state, { payload }) => {
      state.push(payload);
    },
    deleteItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addInfos, deleteItem } = signupSlice.actions;
export default {
  signupInfo: signupSlice.reducer,
};
