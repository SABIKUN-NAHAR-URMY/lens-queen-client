import React, { useEffect, useState } from 'react';
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import Slider from './Slider/Slider';
import adgImg1 from '../../images/body1.jpg';
import adgImg2 from '../../images/body2.jpg';
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import uImg from '../../images/urmy-bg-pic.jpg';
import portfolio1 from '../../images/portfolio1.jpg';
import portfolio2 from '../../images/portfolio2.jpg';
import portfolio3 from '../../images/portfolio3.jpg';
import portfolio4 from '../../images/portfolio4.jpg';
import portfolio5 from '../../images/portfolio5.jpg';
import portfolio6 from '../../images/portfolio6.jpg';
import ServiceCard from '../Services/ServiceCard/ServiceCard';
import { Link} from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    const [services, setServices] = useState([]);

    useTitle('Home');

    useEffect(() => {
        fetch('https://lens-queen-server.vercel.app/servicesLimit')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

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
            {/* slider section  */}
            <div className="carousel w-full rounded-lg">

                {
                    sliderItem.map(slider => <Slider
                        key={slider.id}
                        slider={slider}></Slider>)
                }

            </div>

            {/* services section  */}
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-16'>
                    {
                        services.map(service => <ServiceCard
                            key={service._id}
                            service={service}></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center m-10'>
                    <Link to='/seeAll'><button className='btn btn-active btn-ghost'>See All</button></Link>
                </div>
            </div>

            {/* Advantages section  */}
            <div className='lg:grid grid-cols-2 gap-5 mt-16'>
                <div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <p className='text-xl font-semibold text-slate-600'>Why <strong>LENS-QUEEN</strong>?</p>
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

            {/* portfolio section  */}
            <div className='lg:grid grid-cols-2 gap-5 mt-52 md:mt-80'>
                <div className='text-center'>
                    <img className='w-28 mx-auto pb-9 rounded-lg' src={uImg} alt="" />
                    <h2 className='text-xl font-semibold'>Sabikun Nahar Urmy</h2>
                    <div className='flex items-center justify-center mb-9'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p className='text-lg'>Dhaka, Bangladesh</p>
                    </div>
                    <div className='w-96 mx-auto'>
                        Hi! My name is Urmy. I'm a creative photographer from Bangladesh. I enjoy creating beautiful memories for new couples.
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-4'>
                    <img className='rounded-lg shadow-xl' src={portfolio1} alt="" />
                    <img className='rounded-lg shadow-xl' src={portfolio2} alt="" />
                    <img className='rounded-lg shadow-xl' src={portfolio3} alt="" />
                    <img className='rounded-lg shadow-xl' src={portfolio4} alt="" />
                    <img className='rounded-lg shadow-xl' src={portfolio5} alt="" />
                    <img className='rounded-lg shadow-xl' src={portfolio6} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Home;