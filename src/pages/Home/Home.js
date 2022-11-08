import React from 'react';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import Slider from './Slider/Slider';
import adgImg1 from '../../images/body1.jpg';
import adgImg2 from '../../images/body2.jpg';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    const sliderItem = [
        {
            image: img1,
            id: 1,
            prev: 3,
            next: 2
        },
        {
            image: img2,
            id: 2,
            prev: 1,
            next: 3
        },
        {
            image: img3,
            id: 3,
            prev: 2,
            next: 1
        }

    ]
    return (
        <div>
            <div className="carousel w-full rounded-lg">

                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }

            </div>

            <div className='lg:grid grid-cols-2 gap-5 mt-16'>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='text-xl font-semibold text-slate-600'>Why me?</p>
                            <h2 className="card-title text-6xl">Advantages</h2>
                            <div className='border-2 rounded-xl m-5 p-5'>
                                <div className='flex items-center'>
                                <FaArrowRight></FaArrowRight> <h3 className='pl-3 text-2xl'>Save time</h3>
                                </div>
                                <p>The services provided by our wedding planners can save you a lot of time.</p>
                            </div>

                            <div className='border-2 rounded-xl m-5 p-5'>
                                <div className='flex items-center'>
                                <FaArrowRight></FaArrowRight> <h3 className='pl-3 text-2xl'>Professional approach</h3>
                                </div>
                                <p>We will thoroughly plan every element of your wedding.</p>
                            </div>

                            <div className='border-2 rounded-xl m-5 p-5'>
                                <div className='flex items-center'>
                                <FaArrowRight></FaArrowRight> <h3 className='pl-3 text-2xl'>Acceptable prices</h3>
                                </div>
                                <p>Our clients value our affordable pricing policy and great service.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative mt-8 lg:mt-0'>
                    <img className='w-[80%] rounded-lg shadow-2xl' src={adgImg2} alt="" />
                    <img className='absolute right-24 top-1/3 w-1/2 rounded-lg shadow-2xl' src={adgImg1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;