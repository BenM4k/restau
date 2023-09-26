import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import gallery1 from '../../../../assets/gallery3.jpg';
import gallery2 from '../../../../assets/gallery4.jpg';
import gallery3 from '../../../../assets/gallery5.jpg';
import gallery4 from '../../../../assets/gallery6.jpg';
import gallery5 from '../../../../assets/gallery7.jpg';
import gallery7 from '../../../../assets/gallery9.jpg';

const gallerySlice = createSlice({
  name: 'gallery',
  initialState: {
    mainImg: gallery1,
    gallery: [
      {
        id: uuid(),
        pic: gallery2,
      },
      {
        id: uuid(),
        pic: gallery3,
      },
      {
        id: uuid(),
        pic: gallery4,
      },
      {
        id: uuid(),
        pic: gallery5,
      },
      {
        id: uuid(),
        pic: gallery7,
      },
    ],
  },
  reducers: [],
});

export default gallerySlice.reducer;
