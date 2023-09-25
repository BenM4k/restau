import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeOrder } from '../redux/slices/orders/orderSlice';
import { toggleOrder } from '../redux/slices/modals/modalSlice';
const OrderModal = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const order = {
        name,
    }
    const handleMakeOrder = (order) => {
        setName('');
        dispatch(makeOrder(order));
        dispatch(toggleOrder())
    }
    return (
        <div className='backdrop'>
            <div className="order-modal-container">
                <button className='close-btn close' onClick={() => dispatch(toggleOrder())}>X</button>
                <h2>Have a delightful meal</h2>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleMakeOrder(order)
                }}>
                    <label htmlFor="customer_name">Your name</label>
                    <input id='customer_name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    <p>meals will be here</p>
                    <button className='btn-primary'>Make an order</button>
                </form>
            </div>

        </div>
    )
}

export default OrderModal;