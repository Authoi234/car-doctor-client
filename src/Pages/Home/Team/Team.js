import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import img4 from '../../../assets/images/team/4.jpg'
import img5 from '../../../assets/images/team/5.jpg'
import img6 from '../../../assets/images/team/6.jpg'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Team = () => {
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl text-orange-600 font-bold">Team</p>
                <h2 className="text-5xl font-semibold">Meet Our Team</h2>
                <p className='py-3 font-medium'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="carousel w-full">
                <div id="cardSlide1" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img1} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide6" className="btn btn-circle">❮</a>
                        <a href="#cardSlide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="cardSlide2" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img2} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide1" className="btn btn-circle">❮</a>
                        <a href="#cardSlide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="cardSlide3" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img3} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide2" className="btn btn-circle">❮</a>
                        <a href="#cardSlide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="cardSlide4" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img4} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide3" className="btn btn-circle">❮</a>
                        <a href="#cardSlide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="cardSlide5" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img5} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide4" className="btn btn-circle">❮</a>
                        <a href="#cardSlide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="cardSlide6" className="m-5 carousel-item relative min-w-fit">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={img6} alt="Shoes" /></figure>
                        <div className="card-body p-3 text-center">
                            <h2 className="text-3xl">Car Engine Plug</h2>
                            <p className='text-xl text-slate-500'>Engine Expert</p>
                            <div className="flex justify-center items-center">
                                <FaFacebookF className='bg-gradient-to-r from-blue-500 to-blue-300 p-1 text-3xl mx-2 text-white rounded-full'></FaFacebookF>
                                <FaTwitter className='bg-gradient-to-r from-cyan-500 to-blue-500 text-3xl p-1 mx-2 text-white rounded-full'></FaTwitter>
                                <FaLinkedinIn className='bg-gradient-to-r from-blue-500 to-cyan-500 text-3xl p-1 mx-2 text-white rounded-full'></FaLinkedinIn>
                                <FaInstagram className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-3xl mx-2 p-1 text-white rounded-full'></FaInstagram>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#cardSlide5" className="btn btn-circle">❮</a>
                        <a href="#cardSlide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;