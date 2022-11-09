import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DetailsCard = () => {
    const { user } = useContext(AuthContext);

    const data = useLoaderData();
    const handelReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const rating = form.rating.value;
        const review = form.review.value;

        const reviewWrite = {
            service: data._id,
            serviceName: data.name,
            review,
            rating,
            reviewer: user?.displayName,
            reviewerImage: user?.photoURL
        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewWrite)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }
    return (
        <div className='grid md:grid-cols-2 gap-6'>
            <div className="card bg-base-100 shadow-xl">
                <div>
                    <figure><img className='rounded-lg' src={data.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.details}</p>
                        <div className="card-actions flex justify-center items-center">
                            <p className='text-xl font-semibold text-slate-600'>Price: {data.price} tk</p>
                            <p className='text-xl font-semibold text-slate-600'>Rating: {data.rating}</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        {
                            user?.uid ?
                                <>
                                    <h1 className='text-3xl font-bold text-center pt-5'>Please Write A Review!</h1>
                                    <form onSubmit={handelReview} className='m-10 '>
                                        <textarea name='review' className="textarea textarea-bordered w-full mb-8" placeholder="Write Review"></textarea>
                                        <input type="number" name='rating' placeholder='Rating' className="input input-bordered w-full mb-8" />

                                        <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Review" />
                                    </form>
                                </>
                                :
                                <h1 className='text-3xl font-bold text-center m-5'>Please Login to Add a Review!<Link className='btn btn-link text-3xl font-bold text-slate-700' to='/login'>Login</Link></h1>
                        }

                    </div>
                </div>
            </div>

            <div className='border-2 rounded-xl'>

            </div>
        </div>
    );
};

export default DetailsCard;