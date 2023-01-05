import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect';
import './Slide.css';

const Slider = ({ slider }) => {
    const { id, prev, next, image } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div>
                <video autoPlay loop muted>
                    <source src={image} type='video/mp4' />
                </video>
            </div>
            {/* <div className='img-gradient'>
                <img className="w-full" src={image} alt="" />
            </div> */}

            <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>

            <div className="absolute mx-16 mt-7 lg:top-1/3 lg:pl-52 lg:text-5xl text-center">
                <h1 className='text-white' style={{ fontFamily: 'Passions Conflict' }}>A Wedding Photography</h1>
                <h1 className='text-white font-bold'>The Most Important Thing <br /> At a Wedding is to Photography...
                </h1>
                <TypeWriterEffect
                    textStyle={{
                        fontFamily: 'Red Hat Display',
                        color: '#ffff',
                        fontWeight: 500,
                        fontSize: '1em',
                        textAlign: 'center'
                    }}
                    startDelay={2000}
                    cursorColor="#ffff"
                    multiText={[
                        'Photography coverage on the day.',
                        'A pre-wedding photo session.',
                        'A certain number of digital photographs.',
                        'An online Gallery.',
                        'A wedding album.',
                    ]}
                    multiTextDelay={1000}
                    typeSpeed={50}
                    multiTextLoop
                />
            </div>

        </div>

    );
};

export default Slider;