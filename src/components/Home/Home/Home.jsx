import React from 'react';
import Announcements from '../../Announcement/Announcements';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';

const Home = () => {
    return (
        <div>
            <Announcements></Announcements>
            <div className='bg-[#f5f5f5]'>
            <Hero></Hero>
            <Card></Card>
            </div>
        </div>
    );
};

export default Home;