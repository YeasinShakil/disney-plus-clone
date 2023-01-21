import React from 'react';
import './details.css';

const Details = () => {
    return (
        <div className=' relative h-[100vh-250px] overflow-x-hidden block top-[72px] pl-5'>
           <div className='fixed top-0 left-0 right-0 opacity-[0.8] z-[-1]'>
            <img className=' h-[100vh] w-[100vw]' src="/images/slider-badging.jpg" alt="" />
           </div>
           <div className=' items-end flex justify-start my-0 mx-auto h-[30vw] min-h-[170px] pb-[24px] w-full'>
            <h1 className='w-[30vw] min-w-[200px] max-w-[600px] text-5xl'>Scorpion</h1>
           </div>
           <div className='max-w-[874px]'>
            <div className=' items-center flex row flex-nowrap mt-[24px] mx-0 min-h-[56px]'>
                <button className='text-[15px] mt-0 ml-[22px] mb-0 mr-0 py-0 px-[24px] rounded-md border-none cursor-pointer flex items-center justify-center tracking-wide text-center uppercase bg-[rgb(249,249,249)] text-black hover:bg-[rgb(198,198,198)]'>
                    <img className='w-[32px]' src="/public/images/play-icon-black.png" alt="" />
                    <span>Play</span>
                </button>
                <button className='text-[15px] mt-0 ml-[22px] mb-0 mr-0 py-0 px-[24px] rounded-md border cursor-pointer flex items-center justify-center tracking-wide text-center uppercase bg-[rgb(0,0,0,0.3)] text-white hover:bg-[rgb(198,198,198)]'>
                    <img src="/public/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </button>
                <div className=" mx-[16px] h-[44px] w-[44px] flex justify-center items-center bg-black/60 rounded-full cursor-pointer border-2">
                    <span className='bg-white inline-block addList'></span>
                    <span className='bg-white inline-block addList'></span>
                </div>
                <div className="groupWatch h-[44px] w-[44px] flex justify-center items-center bg-white rounded-full cursor-pointer">
                    <div className="h-[44px] w-[44px] bg-black rounded-full border-2">
                        <img className='w-full' src="/public/images/group-icon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="subtitle min-h-[20px] text-[15px] mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, incidunt consectetur. Neque!</div>
           </div>
           <div className="description leading-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit vel itaque eaque velit, voluptates et mollitia ipsam? Quas dolorem nihil nesciunt rem praesentium a blanditiis deleniti nulla, velit, quae voluptatem accusamus molestias odio incidunt rerum at pariatur fuga, natus saepe sit. Ipsa praesentium impedit, tempora quibusdam reiciendis incidunt blanditiis alias?</div>
        </div>
    );
};

export default Details;