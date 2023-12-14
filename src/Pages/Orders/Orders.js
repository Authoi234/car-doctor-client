import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const {user} = useContext(AuthContext);
    const [orders, setOrders] = useState({});

    // const url = `http://localhost:5000/orders?email=${user.email}`;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div>
            <h2 className="text-5xl font-bold">You Have {orders.length}</h2>
        </div>
    );
};

export default Orders;