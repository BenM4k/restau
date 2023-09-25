import React from 'react';
import { useSelector } from 'react-redux';

const Reservations = () => {
  const { reserveState: reservations } = useSelector((store) => store.order);
  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations?.map((reserve) => (
          <li key={reserve?.id}>
            <h3>
              Customer:
              {reserve?.name}
            </h3>
            <p>
              Type:
              {reserve?.type}
            </p>
            <p>
              Time:
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
