import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewShow from './MyReviewShow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviewMy, setReviewMy] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviewMy(data))
    }, [user?.email]);
    console.log(reviewMy)
    return (
        <div>
            {
                reviewMy.length === 0 ?
                    <h1 className='text-5xl font-bold text-center m-11'>No Review added!</h1>
                    :

                    reviewMy.map(rm => <MyReviewShow
                        key={rm._id}
                        rm={rm}></MyReviewShow>)

            }
        </div>
    );
};

export default MyReviews;