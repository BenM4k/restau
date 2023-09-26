import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import photo from '../../../../assets/me.png';
import photo1 from '../../../../assets/Default_A_single_playing_card_Plain_honest_stark_Ultra_realist_3_e5f9c475-d3c0-4b0c-b01e-6ba416f32f02_0.png';

const testimonialSlice = createSlice({
  name: 'testimonial',
  initialState: [
    {
      id: uuid(),
      img: photo,
      feedback: 'blablabla Laudantium? Pulvinar impedit molestiae bibendum totam aliquip sit aliquid nunchacks',
      name: 'Ben',
      company: 'self',
    },
    {
      id: uuid(),
      img: photo1,
      feedback: 'Rem vel rem augue. Aliquid nisi senectus consequatur ducimus maiores sociis',
      name: 'Random',
      company: 'Company',
    },
  ],
  reducers: [],
});

export default testimonialSlice.reducer;
