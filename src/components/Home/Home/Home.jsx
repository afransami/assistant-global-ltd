import React from 'react';
import Announcements from '../../Announcement/Announcements';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import CTA from '../CTA/CTA';

const Home = () => {
    return (
        <div>
            <Announcements></Announcements>
            <div className='bg-[#f5f5f5]'>
            <Hero></Hero>
            </div>
            <Card></Card>
            <div className='bg-[#f5f5f5] mt-16'>
            <CTA></CTA>
            </div>
        </div>
    );
};

export default Home;