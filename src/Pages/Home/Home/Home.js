import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactArea from '../ContactArea/ContactArea';
import Products from '../Products/Products';
import CoreFeatures from '../CoreFeatures/CoreFeatures';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactArea></ContactArea>
            <Products></Products>
            <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;