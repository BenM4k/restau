import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { makeOrder } from '../redux/slices/orders/orderSlice';
import { toggleOrder } from '../redux/slices/modals/modalSlice';

const OrderModal = () => {
  const variants = {
    start: { y: '-100vh' },
    end: {
      y: '0',
      transition: {
        type: 'spring',
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };
  const dispatch = useDispatch();
  const { meals } = useSelector((state) => state.dishes);
  const [name, setName] = useState(() => '');
  const [dish, setDish] = useState(() => '');
  const order = {
    name,
    dish,
  };
  const handleMakeOrder = (order) => {
    if (order.name === '' || order.dish === 'Default') return;
    setName('');
    dispatch(makeOrder(order));
    dispatch(toggleOrder());
  };
  return (
    <div className="backdrop">
      <motion.div
        className="order-modal-container"
        variants={variants}
        initial="start"
        animate="end"
      >
        <button type="button" className="close-btn close" onClick={() => dispatch(toggleOrder())}>X</button>
        <h2>Have a delightful meal</h2>

        <form onSubmit={(e) => {
          e.preventDefault();
          handleMakeOrder(order);
        }}
        >
          <label htmlFor="name">
            Your name
            <br />
            <br />
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <select name="select" id="select" onChange={(e) => setDish(e.target.value)}>
            <option value="Default">Choose a meal</option>
            {meals.map((meal) => (
              <option value={meal.name} key={meal.id}>{meal.name}</option>
            ))}
          </select>
          <button type="submit" className="btn-primary">Make an order</button>
        </form>
      </motion.div>

    </div>
  );
};

export default OrderModal;
