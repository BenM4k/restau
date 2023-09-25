import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    ordersState: [{
      name: 'Customer',
      time: Date.now(),
    }],
    reserveState: [
      {
        id: uuid(),
        name: 'Customer',
        reservedTime: 'some time',
        type: '',
      },
    ],
  },
  reducers: {
    makeOrder: (state, action) => {
      const newItem = {
        name: action.payload.name,
        time: Date.now(),
      };
      state.ordersState = [...state.ordersState, newItem];
    },
    serve: (state) => {
      const servedItem = state.ordersState.shift();
      return servedItem;
    },
    makeReservation: (state, action) => {
      const newItem = {
        id: uuid(),
        name: action.payload.name,
        reservedTime: action.payload.reserveTime,
        type: action.payload.type,
      };
      state.reserveState = [...state.reserveState, newItem];
    },
    terminateReservation: (state, action) => {
      state.reserveState.filter((reserve) => reserve.id !== action.payload);
    },

  },
});

export const {
  makeOrder, serve, makeReservation, cancelReservation,
} = orderSlice.actions;

export default orderSlice.reducer;
