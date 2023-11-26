import React from 'react';
import { FaStar } from "react-icons/fa6";
import img1 from '../../../assets/images/products/1.png'
import img2 from '../../../assets/images/products/2.png'
import img3 from '../../../assets/images/products/3.png'
import img4 from '../../../assets/images/products/4.png'
import img5 from '../../../assets/images/products/5.png'
import img6 from '../../../assets/images/products/6.png'

const Products = () => {
    return (
        <div className='text-center my-10'>
            <p className='text-2xl text-orange-600 font-bold'>Pupular Products</p>
            <h1 className='py-5 text-5xl font-bold'>Browse Our Products</h1>
            <p className='text-slate-400'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <section className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5'>

                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Car Air Filter</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img4} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img5} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-lg my-5 border border-slate-200">
                    <figure className="px-10 pt-10">
                        <img src={img6} alt="Shoes" className="rounded-xl w-2/3 bg-base-200" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className="flex text-xl">
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                            <FaStar className='text-orange-600'></FaStar>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="text-2xl text-orange-600">Price : $20.00</p>
                    </div>
                </div>

            </section>
            <div className="text-center">
                <button className='btn btn-error btn-outline my-4 text-white font-semibold'>More Products</button>
            </div>
        </div>
    );
};

export default Products;