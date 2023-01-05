import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyReviewShow = ({ rm, handelDelete }) => {

    const navigate = useNavigate();
    const handelEdit = id => {
        navigate(`/editReview/${id}`);
    }

    return (
        <div>
            <div className="card w-full mx-auto bg-base-100 shadow-xl m-5">
                <div className="card-body">
                    <div>

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>
                                        <th>Reviewer Image</th>
                                        <th>Service Name</th>
                                        <th>Review</th>
                                        <th>Rating</th>
                                        <th>Date and Time</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>
                                            
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={rm.reviewerImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                           
                                        </td>
                                        <td>
                                        {rm.serviceName}
                                        </td>
                                        <td>{rm.review}</td>
                                        <td>{rm.rating}</td>
                                        <td>{rm.dateAndTime}</td>
                                    </tr>

                                </tbody>



                            </table>
                        </div>
                    </div>

                    <div className="card-actions justify-center">
                        <button onClick={() => handelEdit(rm._id)} className="btn btn-active btn-ghost">Edit</button>
                        <button onClick={() => handelDelete(rm._id)} className="btn btn-active btn-ghost">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewShow;