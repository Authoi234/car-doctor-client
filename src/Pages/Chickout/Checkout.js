import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(useLoaderData());

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.firstName.value + ' ' + form.lastName.value;
        console.log(name);
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        };
        console.log(order);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('car-doctor-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order Placed Successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-5xl font-bold'>You are about to order: {title}</h2>
                <p className="text-4xl text-orange-600">Price: {price}</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered h-24 w-full mb-5" placeholder="Your Message" required></textarea>
                <input className='btn bg-red-600 w-full hover:bg-red-600 hover:brightness-125 text-white text-2xl' type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default Checkout;