import { createSlice } from '@reduxjs/toolkit';

const contentSlice = createSlice({
  name: 'content',
  initialState: {
    bannerHeader: 'Welcome',
    bannerDesc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ex?',
    aboutHeader: 'About Our Restaurant',
    aboutDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem ut, rem \n neque quas hic temporibus perspiciatis. Enim eveniet, labore mollitia rem ipsum aut qui autem quas unde, voluptates modi. Aute iure corporis \n \n aperiam excepturi et optio sollicitudin fringilla! Velit? Morbi purus, fugit tenetur. Recusandae, mollis et dignissimos nunc labore \n orporis aperiam eiusmod ac sociosqu, nobis sapiente qui donec magnis fringilla lacus pariatur maiores dignissim, platea nam justo! Laboriosam alias.',

  },
  reducers: [],
});

export default contentSlice.reducer;
