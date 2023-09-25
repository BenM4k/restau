import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeReservation } from '../redux/slices/orders/orderSlice';
import { toggleReserve } from '../redux/slices/modals/modalSlice';

const ReserveModal = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const reserve = {
        name,
        reserveTime: 'some time',
        type,
    }
    const handleMakeReserve = (reserve) => {
        setName('');
        dispatch(makeReservation(reserve));
        dispatch(toggleReserve())
    }
    return (
        <div className='backdrop'>
            <div className="order-modal-container">
                <button className='close-btn close' onClick={() => dispatch(toggleReserve())}>X</button>
                <h2>Happy to see you</h2>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleMakeReserve(reserve)
                }}>
                    <label htmlFor="customer_name">Your name</label>
                    <input id='customer_name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <label>Type</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} />
                    <p>Other choices will be here</p>
                    <button className='btn-primary'>Reserve</button>
                </form>
            </div>

        </div>
    )
}

export default ReserveModal;