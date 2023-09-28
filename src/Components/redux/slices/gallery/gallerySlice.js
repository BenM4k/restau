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
    // L49P}^01-ox]I:Sh-UNG01~VRj9Z
    gallery: [
      {
        id: uuid(),
        pic: gallery2,
        blurhash: 'LDDu0oEfWGW-~UNajdS1^ismwfn~',
      },
      {
        id: uuid(),
        pic: gallery3,
        blurhash: 'L6FOM+vdBDX.%g0K%1?GMI~Cs.0K',
      },
      {
        id: uuid(),
        pic: gallery4,
        blurhash: 'L9E2nK]$00?b?v9Zxa%hkrwI~Co#',
      },
      {
        id: uuid(),
        pic: gallery5,
        blurhash: 'L8F}cm0101^k~B?a0Lxs-p0LRPxt',
      },
      {
        id: uuid(),
        pic: gallery7,
        blurhash: 'L9DbsUqFJE=~4;^+-;K*0$E2%L+[',
      },
    ],
  },
  reducers: [],
});

export default gallerySlice.reducer;
