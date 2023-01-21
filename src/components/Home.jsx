import React from 'react';
import request from '../request';

import './Home.css'
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommend from './Recommend';
import Trending from './Trending';
import VIewers from './VIewers';


const Home = () => {
    return (
        <div className='container relative min-h-[calc(100vh-250px)] block m-auto px-0 py-[calc(3.5vw+5px)] w-full'>
            <ImageSlider fetchUrl={request.requestPopular}></ImageSlider>
            <VIewers></VIewers>
            <Recommend title='Recommend For You' rowId='1' fetchUrl={request.requestTopRated}></Recommend>
            <Recommend title='New Disney+' rowId='2' fetchUrl={request.requestUpcoming}></Recommend>
            <Recommend title='Originals' rowId='3' fetchUrl={request.requestPopular}></Recommend>
            <Recommend title='Trending' rowId='4' fetchUrl={request.requestTrending}></Recommend>
            <Recommend title='Horror' rowId='5' fetchUrl={request.requestHorror}></Recommend>
       
            {/* <NewDisney></NewDisney>
            <Originals></Originals>
            <Trending></Trending> */}
        </div>
    );
};

export default Home;