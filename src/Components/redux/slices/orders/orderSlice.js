import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
// import useFetch from '../../../../hooks/useFetch';

const URL = 'http://127.0.0.1:3000//api/v1/customers/1/orders';
const URL1 = 'http://127.0.0.1:3000//api/v1/customers/1/reservations';

export const getOrders = createAsyncThunk('order/GetOrders', async (_, thunkApi) => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue('Something happened');
  }
});

export const getReservations = createAsyncThunk('reservation/GetReservations', async (_, thunkApi) => {
  try {
    const res = await axios.get(URL1);
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue('Something happened');
  }
});

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    ordersState: [{
      name: 'Customer',
      dish: 'Dish X',
      time: Date.now(),
    }],
    reserveState: [
      {
        id: uuid(),
        name: 'Customer',
        reservedTime: 'some time',
        type: 'Lunch',
      },
    ],
  },
  reducers: {
    makeOrder: (state, action) => {
      const newItem = {
        name: action.payload.name,
        dish: action.payload.dish,
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
  extraReducers: {
    [getOrders.fulfilled]: (state, action) => {
      const orders = [];
      action.payload.forEach((order) => {
        const newOrder = {
          name: order.name,
          id: order?.id,
          desc: order.desc,
          time: order.time,
          dish: order.dish,
        };

        orders.push(newOrder);
      });
      state.ordersState = orders;
    },
    [getReservations.fulfilled]: (state, action) => {
      const reserves = [];
      action.payload.forEach((reserve) => {
        const newReserve = {
          name: reserve.name,
          id: reserve?.id,
          desc: reserve.desc,
          reservedTime: reserve.reserveTime,
          type: reserve.type,
        };

        reserves.push(newReserve);
      });
      state.reserveState = reserves;
    },
  },
});

export const {
  makeOrder, serve, makeReservation, cancelReservation,
} = orderSlice.actions;

export default orderSlice.reducer;
