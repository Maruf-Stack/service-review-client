import React from 'react';
import Aboutme from '../../Shared/about me/Aboutme';
import Footer from '../../Shared/footer/Footer';
import Banner from '../banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Aboutme></Aboutme>
            <Footer></Footer>
        </div>
    );
};

export default Home;