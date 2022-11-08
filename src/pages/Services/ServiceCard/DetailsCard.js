import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsCard = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
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

            <div>

            </div>
        </div>
    );
};

export default DetailsCard;