import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://car-doctor-server-authoi.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl text-orange-600 font-bold">Service</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p className='py-3 font-medium'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                {
                    services.map(service => <ServiceCard service={service} key={service.service_id}></ServiceCard>)
                }
            </div>
            <div className="text-center">
                <button className='btn btn-error btn-outline my-4 text-white font-semibold'>More Services</button>
            </div>
        </div>
    );
};

export default Services;