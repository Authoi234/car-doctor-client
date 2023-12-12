import React from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
            <figure><img className='hover:scale-105 duration-500' src={img} alt="Service" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className='text-orange-600 text-2xl font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className='card-actions active:scale-75 duration-300'> <FaArrowRight className='text-2xl text-orange-600'></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;