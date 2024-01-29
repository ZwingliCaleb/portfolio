import React from 'react';
import './Home.scss';
import Header from '../../components/Header/Header';
import HeroSection from '../../components/HeroSection/HeroSection';


const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <HeroSection />
        </div>
    );
}
};

export default Home;