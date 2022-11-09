import React from 'react';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SeeAllData = ({allData}) => {
    const { _id, name, price, image, rating, details } = allData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className='rounded-lg' src={image} style={{ cursor:'pointer', objectFit: 'cover' }} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        details.length>100 ? details.slice(0,100)+'...' : details
                    }
                </p>
                <div className="card-actions flex justify-center items-center">
                    <p className='text-lg font-semibold text-slate-600'>Price: {price} tk</p>
                    <p className='text-lg font-semibold text-slate-600'>Rating: {rating}</p>
                    <Link to={`/details/${_id}`}><button className="btn btn-active btn-ghost">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SeeAllData;