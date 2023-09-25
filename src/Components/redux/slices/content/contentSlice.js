import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
    name: 'content',
    initialState: {
        bannerHeader: 'Welcome',
        bannerDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex?',
        aboutHeader: 'About Our Restaurant',
        aboutDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem ut, rem neque quas hic temporibus perspiciatis. Enim eveniet, labore mollitia rem ipsum aut qui autem quas unde, voluptates modi.',

    },
    reducers: []
})

export default contentSlice.reducer;