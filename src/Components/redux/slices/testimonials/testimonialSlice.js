import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import photo from '../../../../../assets/earphones_c_2.webp';

const testimonialSlice = createSlice({
    name: 'testimonial',
    initialState: [
        {
            id: uuid(),
            img: photo,
            feedback: 'blablabla Laudantium? Pulvinar impedit molestiae bibendum totam aliquip sit aliquid nunchacks',
            name: 'Ben',
            company: 'self'
        }
    ],
    reducers: []
})

export default testimonialSlice.reducer;