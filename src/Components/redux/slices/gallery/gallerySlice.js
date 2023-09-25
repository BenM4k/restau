import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import photo from '../../../../assets/gallery1.jpg';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: [
    {
      id: uuid(),
      name: 'Dish 1',
      pic: photo,
    },
    {
      id: uuid(),
      name: 'Dish 2',
      pic: photo,
    },
    {
      id: uuid(),
      name: 'Dish 3',
      pic: photo,
    },
    {
      id: uuid(),
      name: 'Dish 4',
      pic: photo,
    },
  ],
  reducers: [],
});

export default gallerySlice.reducer;
