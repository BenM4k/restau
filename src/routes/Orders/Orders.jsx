import React from 'react';
import { useSelector } from 'react-redux';

import './Orders.scss';

const Orders = () => {
  const { ordersState: orders } = useSelector((store) => store.order);
  return (
    <div className="orders-container">
      <h2 className="head-text">Orders</h2>
      <ul className="orders-list">
        {orders?.map((order) => (
          <li key={order.name}>
            <h3 className="p-text1">
              Customer :
              <br />
              {order.name}
            </h3>
            <p className="p-text1">
              Meal:
              <br />
              {order.dish}
            </p>
            <p className="p-text1">
              Time:
              <br />
              {order.time}
            </p>
          </li>
        ))}
      </ul>
      <button type="button" className="btn-primary">Serve</button>
    </div>
  );
};

export default Orders;
