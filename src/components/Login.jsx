
import React from 'react';


const Login = () => {
    const poster = 'https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/f462890a-8c79-4e2a-8b7a-bbbae6ca338f/BD-en-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg';

    

    return (
        <div className=' flex flex-col h-full w-full text-center justify-center items-center relative'>

            <img className='  w-full h-[100vh] object-cover z-[-100] relative' src={poster} alt="" />
            <div className=' w-full h-full absolute top-0 bg-gradient-to-t from-black/75 z-[-10]' ></div>
            <div className=' absolute flex flex-col justify-center items-center w-full max-w-[650px] flex-wrap mb-[2vw]'>
                <div>
                    <img className='sm:w-[600px] w-[100%] ease-out duration-100' src="/images/cta-logo-one.svg" alt="" />
                </div>
                <div className=' w-[350px] sm:w-full bg-blue-600 rounded-md py-0 sm:py-2 cursor-pointer hover:bg-blue-500'>
                    <h1 className=' text-2xl sm:text-3xl font-bold tracking-wide'>Get All Three</h1>
                </div>
                <div className='my-4'>
                    <p className='sm:text-lg text-md letterspace-normal tracking-wide text-gray-300 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi temporibus voluptatibus inventore quibusdam blanditiis dolores deleniti obcaecati voluptate ad? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, vero.</p>
                </div>
                <div>
                    <img className=' mb-4 w-[400px] sm:w-full' src="/images/cta-logo-two.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;