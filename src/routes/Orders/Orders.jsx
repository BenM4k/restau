import React from 'react';
import { useSelector } from 'react-redux';

const Orders = () => {
  const { ordersState: orders } = useSelector((store) => store.order);
  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders?.map((order) => (
          <li key={order.name}>
            <h3>
              Customer:
              {order.name}
            </h3>
            <p>
              Time:
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
