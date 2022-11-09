import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {

    useTitle('AddServices');

    const handelService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const rating = form.rating.value;
        const details = form.detail.value;

        const serviceWrite = {
            price,
            image : photoURL,
            rating,
            name,
            details
        }

        fetch('http://localhost:5000/servicesAll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceWrite)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                alert('Service added')
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <form onSubmit={handelService} className='m-10 '>
                    <input type="text" name='name' placeholder='Service Name' className="input input-bordered w-full mb-8" />

                    <input type="text" name='price' placeholder='Price' className="input input-bordered w-full mb-8" />

                    <input type="text" name='photoURL' placeholder='PhotoURL' className="input input-bordered w-full mb-8" />

                    <input type="number" name='rating' placeholder='Rating' className="input input-bordered w-full mb-8" />

                    <textarea name='detail' className="textarea textarea-bordered w-full mb-8" placeholder="Write Detail"></textarea>

                    <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Service" />
                </form>
            </div>
        </div>
    );
};

export default AddServices;