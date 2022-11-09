import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewShow from './MyReviewShow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviewMy, setReviewMy] = useState([]);

    useTitle('MyReviews');

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviewMy(data))
    }, [user?.email]);

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = reviewMy.filter(rm => rm._id !== id);
                        setReviewMy(remaining);
                    }
                })
        }
    }

    // const handelUpdate = id => {
    //     fetch(`http://localhost:5000/reviews/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({rating})
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount > 0) {
    //                 alert('Deleted successfully');
    //                 const remaining = reviewMy.filter(rm => rm._id !== id);
    //                 setReviewMy(remaining);
    //             }
    //         })
    // }


return (
    <div>
        {
            reviewMy.length === 0 ?
                <h1 className='text-5xl font-bold text-center m-11'>No Review added!</h1>
                :

                reviewMy.map(rm => <MyReviewShow
                    key={rm._id}
                    rm={rm}
                    handelDelete={handelDelete}></MyReviewShow>)

        }
    </div>
);
};

export default MyReviews;