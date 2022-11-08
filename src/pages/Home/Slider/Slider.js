import React from 'react';
import './Slide.css';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img className="w-full" src={image} alt="" />
            </div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 pl-11">
                <h1 className='text-6xl text-white font-bold'>Plan and book <br />
                    your wedding</h1>
            </div>
        </div>

    );
};

export default Slider;