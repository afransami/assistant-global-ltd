import React from 'react';
import Announcements from '../../Announcement/Announcements';
import Hero from '../Hero/Hero';
import Card from '../Card/Card';
import CTA from '../CTA/CTA';
import FlipCard from '../Card/FlipCard';



const Home = () => {
    return (
        <div>
            <Announcements></Announcements>
            <div className='bg-[#f5f5f5d0]'>
            <Hero></Hero>
            </div>
            <FlipCard></FlipCard>
            {/* <Card></Card> */}
            <div className='bg-[#f1f1f1] mt-16'>
            <CTA></CTA>
            </div>
        </div>
    );
};

export default Home;