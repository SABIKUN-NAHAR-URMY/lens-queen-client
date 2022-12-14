import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import { toast } from 'react-toastify';

const DetailsCard = () => {
    const { user } = useContext(AuthContext);
    const data = useLoaderData();

    useTitle('Details');

    const [update, setUpdate] = useState(false);

    const [reviews, setReviews] = useState([]);
    const [redirect, setRedirect] = useState(false);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

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
            email: user?.email,
            reviewerImage: user?.photoURL,
            dateAndTime: new Date()
        }

        fetch('https://lens-queen-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewWrite)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                toast("Review added!");
                setUpdate(true);
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        fetch(`https://lens-queen-server.vercel.app/reviews/queryService?serviceName=${data?.name}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [data?.name, update]);

    return (
        <div className='grid md:grid-cols-2 gap-6'>
            {
                redirect && <Navigate to="/login" state={{ from: location }} replace />
            }
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
                                <h1 className='text-3xl font-bold text-center m-5'>Please Login to Add a Review!<button className='btn btn-link text-3xl font-bold text-slate-700' onClick={()=>{setRedirect(true)}}>Login</button></h1>
                        }

                    </div>
                </div>
            </div>

            <div className='border-2 rounded-xl'>
                {
                    reviews.map(review => {
                        return (
                            <div key={review._id}>
                                <div className="m-5 card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">ServiceName: {review.serviceName}</h2>
                                        <h2>Review: {review.review}</h2>
                                        <h2>Rating: {review.rating}</h2>
                                        <h2>Reviewer: {review.reviewer}</h2>
                                        <h2>Date and Time: {review.dateAndTime}</h2>
                                        <img className='w-24 rounded' src={review.reviewerImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DetailsCard;