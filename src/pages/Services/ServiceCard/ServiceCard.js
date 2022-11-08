import React from 'react';

const ServiceCard = ({ service }) => {
    console.log(service);
    const { name, price, image, rating, details } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='rounded-lg' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        details.length>100 ? details.slice(0,50)+'...' : details
                    }
                </p>
                <div className="card-actions flex justify-center items-center">
                    <p>Price: {price} tk</p>
                    <p>Rating: {rating}</p>
                    <button className="btn btn-active btn-ghost">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;