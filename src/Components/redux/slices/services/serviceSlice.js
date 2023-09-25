import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { faTruckFast, faBowlFood, faHatHard, faBowlRice } from "@fortawesome/free-solid-svg-icons";

const serviceSlice = createSlice({
    name: 'service',
    initialState: [
        {
            id: uuid(),
            title: 'Fast Delivery',
            icon: faTruckFast,
            desc: 'Everything you order here will be delivered to your door'
        },
        {
            id: uuid(),
            title: 'Fresh Food',
            icon: faBowlRice,
            desc: 'We only use the best ingredients to cook the tastiest food for you'
        },
        {
            id: uuid(),
            title: 'Experienced Chefs',
            icon: faHatHard,
            desc: 'Our staff consists of Chefs and Cooks of experience'
        },
        {
            id: uuid(),
            title: 'Variety od Dishes',
            icon: faBowlFood,
            desc: 'On our menu, you will have a wide variety of dishes, desserts ans drinks'
        },
    ],
    reducers: []
})

export default serviceSlice.reducer;