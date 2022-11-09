import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ReviewEdit = () => {
    const { user } = useContext(AuthContext);
    const [reviewMy, setReviewMy] = useState([]);
    const router = useParams();
    const { id } = router;

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then(res => res.json())
            .then(data => setReviewMy(data))
    }, [id]);

    const handelReview = event =>{
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const rating = form.rating.value;

        const reviewWrite = {
            review,
            rating
        }

        fetch(`http://localhost:5000/reviews/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewWrite)
        })
        .then(data => {
            console.log(data);
            alert('Review added')
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <form onSubmit={handelReview} className='m-10 '>
                <textarea name='review' defaultValue={reviewMy.review} className="textarea textarea-bordered w-full mb-8" placeholder="Write Review"></textarea>
                <input type="number" name='rating' defaultValue={reviewMy.rating} placeholder='Rating' className="input input-bordered w-full mb-8" />

                <input className='btn btn-active btn-ghost w-full' type="submit" value="Submit Review" />
            </form>
        </div>
    );
};

export default ReviewEdit;