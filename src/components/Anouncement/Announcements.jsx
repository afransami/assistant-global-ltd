import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const Announcements = () => {
    return (
        <div className="lg:bg-[#D6D6D9] px-4 py-3 text-white lg:flex justify-center items-center h-16 text-center gap-2">
            <div className='flex flex-col justify-center lg:items-start '>
            <p className='text-[#949494] text-xs'>ASSISTANT</p>            
            <p className='font-bold text-lg lg:text-xl  scale-125 text-[#D31772]'>KIDS</p>
            </div>
    <div className='inline-flex'>    
    <p className="text-center font-medium inline-block text-[#0368CD]">
    Empowering Communities to give children a brighter future</p> <span className='text-[#0368CD] cursor-pointer lg:block hidden'><FiArrowUpRight></FiArrowUpRight></span>
    </div>
</div>
    );
};

export default Announcements;