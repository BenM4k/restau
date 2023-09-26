import React from 'react';
import { useSelector } from 'react-redux';

const Reservations = () => {
  const { reserveState: reservations } = useSelector((store) => store.order);
  return (
    <div className="orders-container">
      <h2 className="head-text">Reservations</h2>
      <ul className="orders-list">
        {reservations?.map((reserve) => (
          <li key={reserve?.id}>
            <h3>
              Customer:
              <br />
              {reserve?.name}
            </h3>
            <p>
              Type:
              <br />
              {reserve?.type}
            </p>
            <p>
              Time:
              <br />
              {reserve?.reservedTime}
            </p>
          </li>
        ))}
      </ul>

      <button type="button" className="btn-primary">Terminate</button>
    </div>
  );
};

export default Reservations;
