import React from 'react';

const SliderPhoto = ({ everyMovie }) => {
    return (
        <div className=' h-[400px] w-full'>
            <a>
                <img className='w-full h-full rounded box_shadow object-cover' src={`https://image.tmdb.org/t/p/original/${everyMovie?.backdrop_path}`} alt={everyMovie?.title} />
            </a>
        </div>
    );
};

export default SliderPhoto;