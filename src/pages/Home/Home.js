import React, { useEffect, useState, useRef } from 'react';
import img1 from '../../images/homeVideo1.mp4';
import img2 from '../../images/homeVideo2.mp4';
import img3 from '../../images/homeVideo3.mp4';
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
import loveImg from '../../images/love.jpg';
import ServiceCard from '../Services/ServiceCard/ServiceCard';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

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

    ];


    const form = useRef();
    const notify = () => {
        toast.success('Send Your Info Successfully!');
        form.reset();
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_0plwzna', form.current, 'RLXjZLUe26CX9a6Ml')
            .then((result) => {
                //   console.log(result.text);
            }, (error) => {
                //   console.log(error.text);
            });
    };

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

            {/* contact section  */}

            <div className='lg:grid grid-cols-2 gap-6 mt-16'>
                <div className='border p-20 bg-slate-100 text-center rounded-lg m-12'>
                    <h1 className='text-xl font-thin mb-6'>WE ARE HERE TO HELP YOU TO REMEMBER THE BEST DAYS</h1>
                    <p className='font-semibold'>In a professional context it often happens that private or corporate clients a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live.</p>
                    <img src={loveImg} className="w-20 h-20 rounded-full mx-auto" alt="" />
                </div>
                <div>
                    <h1 className='font-thin text-3xl mt-12'>EXTRAORDINARY PHOTOGRAPHY. WE ARE HERE TO HELP YOU TO REMEMBER THE BEST DAYS</h1>

                    <form className='mt-4 text-center w-[90%] mx-auto p-7' ref={form} onSubmit={sendEmail}>
                        <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='name' placeholder='Full Name' required /><br />
                        <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='email' placeholder='Email' required /><br />
                        <input className='w-[90%] p-4 mb-4 border rounded-lg' type="text" name='phone' placeholder='Phone' required /><br />
                        <textarea className='w-[90%] p-4 mb-4 border rounded-lg' name="message" id="" placeholder='Message' required></textarea><br />
                        <button onClick={notify} className='btn btn-active btn-ghost ' type='submit'>Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;