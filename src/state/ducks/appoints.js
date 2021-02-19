import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'appoint',
  initialState: [],
  reducers: {
    addInfo: (state, { payload }) => {
      state.push(payload);
    },
    deleteItem: (state, { payload }) => {
      return state.filter((item) => item.id !== payload);
    },
  },
});

export const { addInfo, deleteItem } = loginSlice.actions;
export default {
  appoints: loginSlice.reducer,
};
