import axios from 'axios';
import React, { useEffect, useState } from 'react';
import request from '../request';
import './recommend.css';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
// import RecommendedRow from './RecommendedRow';

const Recommend = ({ fetchUrl, title, rowId }) => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchUrl])

    const slideLeft = ()=> {
        let slide = document.getElementById('slider' + rowId);
        slide.scrollLeft = slide.scrollLeft - 500;
    }
    const slideRight = ()=> {
        let slide = document.getElementById('slider' + rowId);
        slide.scrollLeft = slide.scrollLeft + 500;
    }
   
    return (
        <div>
            <div className='px-2 py-3'>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className=' flex relative items-center group'>
                    <MdChevronLeft size={40} className=' absolute text-black bg-white rounded-full opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block left-0' onClick={slideLeft}></MdChevronLeft>
                    <div id={'slider' + rowId} className=' w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>

                    {
                        movies?.map((movie) => (
                            <div className=' w-[200px] h-[200px] rounded-md realtive cursor-pointer inline-block mx-2 recommend_shadows'>
                                <img className='recommend_img w-full h-full object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
                            </div>
                        ))
                    }
                    </div>
                    <MdChevronRight size={40} className=' absolute text-black bg-white rounded-full opacity-50 hover:opacity-100 z-10 cursor-pointer group-hover:block right-0' onClick={slideRight}></MdChevronRight>
                </div>
            </div>
        </div>
    );
};

export default Recommend;