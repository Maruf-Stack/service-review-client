import React from 'react';
import Aboutme from '../../Shared/about me/Aboutme';
import Footer from '../../Shared/footer/Footer';
import Banner from '../banner/Banner';
import Services from '../services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Footer></Footer>
        </div>
    );
};

export default Home;