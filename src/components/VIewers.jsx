import React from 'react';
import './Viewers.css';

const VIewers = () => {
    return (
        <div className=' grid px-3 py-10 gap-5 items-center justify-center sm:grid-cols-3 md:grid-cols-5 md:justify-between'>
           <div className='viewers_box_shadow w-[200px] h-[150px] px-3 py-1 relative  rounded-md cursor-pointer group transition-all'>
                <img className='h-full w-full object-cover absolute top-0 z-[1] left-0 transition-opacity' src="/images/viewers-disney.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} className=' absolute top-0 w-full h-full object-cover left-0 z-0 opacity-0 group-hover:opacity-100 transition-all group-hover:transition-all rounded-md' src="/videos/1564674844-disney.mp4" typeof='video/mp4'></video>
            </div>
           <div className='viewers_box_shadow w-[200px] h-[150px] px-3 py-1 relative  rounded-md cursor-pointer group transition-all'>
                <img className='h-full w-full object-cover absolute top-0 z-[1] left-0 transition-opacity' src="/images/viewers-marvel.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} className=' absolute top-0 w-full h-full object-cover left-0 z-0 opacity-0 group-hover:opacity-100 transition-all group-hover:transition-all rounded-md' src="/videos/1564676115-marvel.mp4"></video>
            </div>
           <div className='viewers_box_shadow w-[200px] h-[150px] px-3 py-1 relative  rounded-md cursor-pointer group transition-all'>
                <img className='h-full w-full object-cover absolute top-0 z-[1] left-0 transition-opacity' src="/images/viewers-pixar.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} className=' absolute top-0 w-full h-full object-cover left-0 z-0 opacity-0 group-hover:opacity-100 transition-all group-hover:transition-all rounded-md' src="/videos/1564676714-pixar.mp4"></video>
            </div>
           <div className='viewers_box_shadow w-[200px] h-[150px] px-3 py-1 relative  rounded-md cursor-pointer group transition-all'>
                <img className='h-full w-full object-cover absolute top-0 z-[1] left-0 transition-opacity' src="/images/viewers-starwars.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} className=' absolute top-0 w-full h-full object-cover left-0 z-0 opacity-0 group-hover:opacity-100 transition-all group-hover:transition-all rounded-md' src="/videos/1608229455-star-wars.mp4"></video>
            </div>
           <div className='viewers_box_shadow w-[200px] h-[150px] px-3 py-1 relative  rounded-md cursor-pointer group transition-all'>
                <img className='h-full w-full object-cover absolute top-0 z-[1] left-0 transition-opacity' src="/images/viewers-national.png" alt="" />
                <video autoPlay={true} loop={true} playsInline={true} className=' absolute top-0 w-full h-full object-cover left-0 z-0 opacity-0 group-hover:opacity-100 transition-all group-hover:transition-all rounded-md' src="/videos/1564676296-national-geographic.mp4"></video>
            </div>
            
            
        </div>
    );
};

export default VIewers;