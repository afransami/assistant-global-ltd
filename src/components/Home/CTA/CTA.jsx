import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4  p-12 '>
        <div className='bg-[#757575] rounded-b-md'>
        <div className=" text-center py-20 flex flex-col items-center justify-center">
          <h1 className="AssistantGlobal font-normal sm:text-lg lg:text-4xl uppercase text-[#E2E2E2] ">
          DRIVE
            <strong className="block font-extralight text-[16px] text-[#E2E2E2] opacity-50" style={{ letterSpacing: `1.6px`}}>
            SECURED DRIVE
            </strong>
          </h1>
          <Link className='text-[#3BAAFF] text-[20px]'>Explore</Link>
        </div>
  
        <div className="bg-[url(https://i.ibb.co/6wNH5pj/drive-image.png)] bg-cover bg-center bg-no-repeat h-[474px] w-[735px]">
          <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen flex items-center justify-center lg:items-center lg:px-8 ">
          </div>
        </div>
        </div>

        <div className='bg-[#757575] rounded-b-md '>
        <div className=" text-center py-20 flex flex-col items-center justify-center">
          <h1 className="AssistantGlobal font-normal sm:text-lg lg:text-4xl uppercase text-[#E2E2E2] ">
          DRIVE
            <strong className="block font-extralight text-[16px] text-[#E2E2E2] opacity-50" style={{ letterSpacing: `1.6px`}}>
            SECURED DRIVE
            </strong>
          </h1>
          <Link className='text-[#3BAAFF] text-[20px]'>Explore</Link>
        </div>
  
        <div className="bg-[url(https://i.ibb.co/6wNH5pj/drive-image.png)] bg-cover bg-center bg-no-repeat h-[474px] w-[735px]">
          <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen flex items-center justify-center lg:items-center lg:px-8 ">
          </div>
        </div>
        </div>
      </div>
    );
};

export default CTA;