import React, { useEffect, useState } from 'react';
import './ImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import request from '../request';
import SliderPhoto from './SliderPhoto';

const ImageSlider = ({fetchUrl}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        axios.get(request.requestPopular).then((response)=>{
            // console.log(response)
            setMovies(response.data.results)
        })
    }, [])

    // const movie = movies[Math.floor(Math.random()* movies.length)];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };



    return (
        <div>
            <Slider {...settings}>
                {
                    movies.map((everyMovie)=> <SliderPhoto everyMovie={everyMovie}></SliderPhoto>)
                }
                

            </Slider>
        </div>
    );
};

export default ImageSlider; <h1>this is me shakil</h1>