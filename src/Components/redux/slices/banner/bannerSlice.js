import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import photo from '../../../../assets/banner2.png';

const bannerSlice = createSlice({
  name: 'banner',
  initialState: [
    {
      image: photo,
      blurhash: 'LJKKf=TJBq?H~CWBJ7xuAH$P00JR',
      id: uuid(),
    },
  ],
  reducers: [],
});

export default bannerSlice.reducer;
