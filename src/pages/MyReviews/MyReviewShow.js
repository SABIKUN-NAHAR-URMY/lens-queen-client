import React from 'react';

const MyReviewShow = ({ rm, handelDelete }) => {

    return (
        <div>
            <div className="card bg-base-100 shadow-xl m-5">
                <div className="card-body">
                    <div className='md:flex items-center justify-around'>
                        <h2 className="card-title font-bold">Service Name:  {rm.serviceName}</h2>
                        <h2 className='text-xl font-semibold'>Review:  {rm.review}</h2>
                        <h2 className='text-xl font-semibold'>Rating: {rm.rating}</h2>
                        <img className='w-20 rounded-full' src={rm.reviewerImage} alt="" />
                    </div>

                    <div className="card-actions justify-center">
                        <button className="btn btn-active btn-ghost">Edit</button>
                        <button onClick={()=>handelDelete(rm._id)} className="btn btn-active btn-ghost">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewShow;