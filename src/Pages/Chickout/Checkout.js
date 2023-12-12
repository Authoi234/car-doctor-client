import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const {user} = useContext(AuthContext);

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName} ${form.lastName}`;
        const email = user?.email || 'unregistered'
    }
    
    return (
        <div>
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>You are about to order: {title}</h2>
                <p className="text-3xl">Price: {price}</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-5'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered w-full" />
                    <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email } className="input input-bordered w-full" readOnly />
                </div>
                <textarea className="textarea textarea-bordered h-24 w-full mb-5" placeholder="Your Message"></textarea>
                <input className='btn bg-red-600 w-full hover:bg-red-600 hover:brightness-125 text-white text-2xl' type="submit" value="Place your order" />
            </form>
        </div>
    );
};

export default Checkout;