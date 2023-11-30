import React from 'react';
import img1  from '../../../assets/icons/group.svg';
import img2  from '../../../assets/icons/person.svg';
import img3  from '../../../assets/icons/Wrench.svg';
import img4  from '../../../assets/icons/check.svg';
import img5  from '../../../assets/icons/deliveryt.svg';

const CoreFeatures = () => {
    const features = [
        {
            img: img1,
            title: 'Expert Team',
            id: 1
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS34lt_p0TO-5Oy7Voq0PYCZ_ZXOwqHMd8f1-ZapuY&s',
            title: 'Timely Delivery',
            id: 2,
        },
        {
            img: img2,
            title: '24/7 Support',
            id: 3
        },
        {
            img: img3,
            title: 'Best Equipment',
            id: 4
        },
        {
            img: img4,
            title: '100% Guranty',
            id: 5
        },
        {
            img: img5,
            title: 'Timely Delivery',
            id: 6
        },
    ]
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl text-orange-600 font-bold">Core Features</p>
                <h2 className="text-5xl font-semibold">Why Choose Us</h2>
                <p className='py-3 font-medium'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 justify-center items-center'>
                {
                    features.map(feature => <>
                        <div key={feature.id} className="w-40 p-5 text-center block justify-center border border-slate-300  items-center m-5 shadow-xl">
                            <img className='w-4/5' src={feature.img} alt="" />
                            <p className='text-2xl  break-words text-black'>{feature.title}</p>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default CoreFeatures;