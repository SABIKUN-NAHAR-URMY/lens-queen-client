import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import MyReviewShow from './MyReviewShow';
import { toast } from 'react-toastify';

const MyReviews = () => {
    const { user, logOut, loading } = useContext(AuthContext);
    const [reviewMy, setReviewMy] = useState([]);

    useTitle('MyReviews');

    useEffect(() => {
        fetch(`https://lens-queen-server.vercel.app/reviews?email=${user?.email}`,{
            headers:{
                authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    return logOut();
                }
                return res.json();
            })
            .then(data => setReviewMy(data))
    }, [user?.email, logOut]);

    const handelDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this review?');
        if (proceed) {
            fetch(`https://lens-queen-server.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast("Deleted successfully!");
                        const remaining = reviewMy.filter(rm => rm._id !== id);
                        setReviewMy(remaining);
                    }
                })
        }
    }


    return (
        <div>
            {
                reviewMy.length === 0 ?
                    <h1 className='text-5xl font-bold text-center m-11'>No Review added!</h1>
                    :

                    reviewMy.map(rm => <MyReviewShow
                        key={rm._id}
                        rm={rm}
                        handelDelete={handelDelete}
                        ></MyReviewShow>)

            }
        </div>
    );
};

export default MyReviews;