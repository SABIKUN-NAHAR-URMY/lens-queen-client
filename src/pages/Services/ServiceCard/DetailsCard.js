import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
    const data = useLoaderData();
    const handelReview = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const review = form.review.value;
        console.log(name, photoURL, rating, review);
    }
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className='rounded-lg' src={data.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <p>{data.details}</p>
                    <div className="card-actions flex justify-center items-center">
                        <p className='text-xl font-semibold text-slate-600'>Price: {data.price} tk</p>
                        <p className='text-xl font-semibold text-slate-600'>Rating: {data.rating}</p>
                    </div>
                </div>
            </div>

            <div className='border-2 rounded-xl'>
                <h1 className='text-5xl font-bold text-center p-10'>Please Write A Review!</h1>
                <form onSubmit={handelReview} className='m-10 '>
                    <input type="text" name='name' placeholder='Name' className="input input-bordered w-full mb-8"/>
                    <input type="text" name='photoURL' placeholder='photoURL' className="input input-bordered w-full mb-8"/>
                    <input type="number" name='rating' placeholder='Rating' className="input input-bordered w-full mb-8"/>
                    <textarea name='review' className="textarea textarea-bordered w-full mb-8" placeholder="Write Review"></textarea>

                    <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    );
};

export default DetailsCard;