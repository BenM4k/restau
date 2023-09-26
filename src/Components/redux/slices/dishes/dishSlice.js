import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import dish1 from '../../../../assets/dish1.jpg';
import dish2 from '../../../../assets/dish2.jpg';
import dish3 from '../../../../assets/dish3.jpg';
import dish4 from '../../../../assets/dish4.jpg';
import dish5 from '../../../../assets/dish5.jpg';
import dish6 from '../../../../assets/dish6.jpg';
import dish7 from '../../../../assets/dish7.jpg';
import dish8 from '../../../../assets/dish8.jpg';

const dishSlice = createSlice({
  name: 'dishes',
  initialState: {
    meals: [
      {
        id: uuid(),
        name: 'Dish 1',
        desc: 'Cursus unde! Quasi eligendi, aptent posuere. Sapien placerat, officiis platea felis tellus, accusamus ligula vulputate enim neque suspendisse. Eros at',
        price: 10,
        cat: ['All', 'Meat'],
        pic: dish1,
      },
      {
        id: uuid(),
        name: 'Dish 2',
        desc: 'Et laoreet, diam pretium morbi esse? Eros eros sociis placerat, recusandae sint aliquip commodi lobortis animi voluptatibus, reiciendis! Id tincidunt',
        price: 20,
        cat: ['All', 'Meat'],
        pic: dish2,
      },
      {
        id: uuid(),
        name: 'Dish 3',
        desc: 'Vero ratione harum facilis debitis, molestiae iste exercitation! Praesentium, irure cras officiis. Massa accumsan? Velit. Voluptas aliqua odit maxime mi',
        price: 30,
        cat: ['All', 'Dessert'],
        pic: dish3,
      },
      {
        id: uuid(),
        name: 'Dish 4',
        desc: 'Consequuntur dolorum maecenas irure montes, consequatur repellat repudiandae ducimus congue ab felis nunc. Nam, officiis, taciti reprehenderit ea hymenaeos nascetur',
        price: 40,
        cat: ['All', 'Drinks'],
        pic: dish4,
      },
      {
        id: uuid(),
        name: 'Dish 5',
        desc: 'Ea phasellus, consectetur fusce fames purus architecto lacinia! Corporis. Lectus excepteur, dictum pharetra volutpat habitasse habitant, vero augue, sed dolor',
        price: 50,
        cat: ['All', 'Greens'],
        pic: dish5,
      },
      {
        id: uuid(),
        name: 'Dish 6',
        desc: 'Quas aliquid, iusto, dictumst, lacinia deleniti posuere hendrerit mi porta laoreet magnam atque volutpat hendrerit, modi. Earum, pede penatibus aptent',
        price: 60,
        cat: ['All', 'Exotic'],
        pic: dish6,
      },
      {
        id: uuid(),
        name: 'Dish 7',
        desc: 'Nihil porta wisi, quisquam! Donec quibusdam vulputate consequatur suspendisse augue mattis inventore? Luctus nihil sem faucibus optio, tempora, tincidunt nam.',
        price: 70,
        cat: ['All', 'Drinks'],
        pic: dish7,
      },
      {
        id: uuid(),
        name: 'Dish 8',
        desc: 'Excepteur aspernatur voluptates condimentum nam optio morbi rutrum taciti iure, necessitatibus maecenas? Dicta gravida? Fusce, lectus ornare expedita facilisis reprehenderit',
        price: 80,
        cat: ['All', 'Exotic'],
        pic: dish8,
      },
    ],
    categories: ['All', 'Meat', 'Dessert', 'Drinks', 'Greens', 'Exotic'],
    reservationTypes: [
      {
        id: uuid(),
        name: 'Reservation type 1',
      },
      {
        id: uuid(),
        name: 'Reservation type 2',
      },
      {
        id: uuid(),
        name: 'Reservation type 3',
      },
      {
        id: uuid(),
        name: 'Reservation type 4',
      },
      {
        id: uuid(),
        name: 'Reservation type 5',
      },
      {
        id: uuid(),
        name: 'Reservation type 6',
      },
      {
        id: uuid(),
        name: 'Reservation type 7',
      },
    ],
  },
  reducers: [],
});

export default dishSlice.reducer;
