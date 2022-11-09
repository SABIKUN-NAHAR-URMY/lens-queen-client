import React from 'react';
import './Slide.css';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='img-gradient'>
                <img className="w-full" src={image} alt="" />
            </div>

            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute top-16 lg:top-1/2 left-32 lg:left-52">
                <h1 className='lg:text-6xl text-white font-bold'>The Most Important Thing <br />
                At a Wedding is to <br />
                Photography...
                </h1>
            </div>
        </div>

    );
};

export default Slider;