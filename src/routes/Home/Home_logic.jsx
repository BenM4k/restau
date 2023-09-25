import React from 'react';
import { useSelector } from 'react-redux';
import Home from './Home';

const Home_logic = () => {
    const { meals: dishes, categories } = useSelector((store) => store.dishes);
    const service = useSelector((store) => store.service);
    const testimonials = useSelector((store) => store.testimonial);
    const banner = useSelector((store) => store.banner)
    return (
        <Home dishes={dishes} banner={banner} service={service} testimonials={testimonials} categories={categories} />
    )
}

export default Home_logic;