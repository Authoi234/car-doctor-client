import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import ContactArea from '../ContactArea/ContactArea';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <ContactArea></ContactArea>
            <Products></Products>
        </div>
    );
};

export default Home;