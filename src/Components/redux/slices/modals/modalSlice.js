import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    orderModal: false,
    reserveModal: false,
  },
  reducers: {
    toggleOrder: (state) => {
      state.orderModal = !state.orderModal;
    },
    toggleReserve: (state) => {
      state.reserveModal = !state.reserveModal;
    },
  },
});

export const { toggleOrder, toggleReserve } = modalSlice.actions;

export default modalSlice.reducer;
