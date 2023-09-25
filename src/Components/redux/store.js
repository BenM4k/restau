import { configureStore } from '@reduxjs/toolkit';

import bannerSlice from './slices/banner/bannerSlice';
import dishSlice from './slices/dishes/dishSlice';
import testimonialSlice from './slices/testimonials/testimonialSlice';
import serviceSlice from './slices/services/serviceSlice';
import gallerySlice from './slices/gallery/gallerySlice';
import contentSlice from './slices/content/contentSlice';
import orderSlice from './slices/orders/orderSlice';
import modalSlice from './slices/modals/modalSlice';

const store = configureStore({
  reducer: {
    banner: bannerSlice,
    dishes: dishSlice,
    testimonial: testimonialSlice,
    service: serviceSlice,
    gallery: gallerySlice,
    content: contentSlice,
    order: orderSlice,
    modal: modalSlice,
  },
});

export default store;
