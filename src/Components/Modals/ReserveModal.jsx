import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { makeReservation } from '../redux/slices/orders/orderSlice';
import { toggleReserve } from '../redux/slices/modals/modalSlice';

const ReserveModal = () => {
  const variants = {
    start: { y: '-100vh' },
    end: {
      y: '0',
      transition: {
        type: 'spring',
        duration: 0.8,
        ease: 'easeIn',
      },
    },
  };
  const dispatch = useDispatch();
  const { reservationTypes } = useSelector((store) => store.dishes);
  const [name, setName] = useState(() => '');
  const [type, setType] = useState(() => '');
  const reserve = {
    name,
    reserveTime: 'some time',
    type,
  };
  const handleMakeReserve = (reserve) => {
    if (reserve.name === '' || reserve.type === '') return;
    setName('');
    setType('');
    dispatch(makeReservation(reserve));
    dispatch(toggleReserve());
  };
  return (
    <div className="backdrop">
      <motion.div
        className="order-modal-container"
        variants={variants}
        initial="start"
        animate="end"
      >
        <button type="button" className="close-btn close" onClick={() => dispatch(toggleReserve())}>X</button>
        <h2>Happy to see you</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleMakeReserve(reserve);
        }}
        >
          <label htmlFor="customer_name">
            Your name
            <br />
            <br />
            <input id="customer_name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <select name="select" id="select" onChange={(e) => setType(e.target.value)}>
            <option value="Default">Choose a reservation</option>
            {reservationTypes.map((type) => (
              <option value={type.name} key={type.id}>{type.name}</option>
            ))}
          </select>
          <button type="submit" className="btn-primary">Reserve</button>
        </form>
      </motion.div>

    </div>
  );
};

export default ReserveModal;
