import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import signupImg from '../../images/login.jpg';
import useTitle from '../../Hooks/useTitle';

const Signup = () => {
    const { createUser, modernizeProfile, providerLogin, loading } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    useTitle('Signup');

    let navigate = useNavigate();
    let location = useLocation();

    if (loading) {
        return <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }

    let from = location.state?.from?.pathname || "/";


    const handelSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                updateUser(name, photoURL);
                const currentUser = {
                    email: user.email
                }
                //get jwt token
                fetch('https://lens-queen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                        window.location.reload();
                    })
            })
            .catch(error => console.error(error))
    }

    const updateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        modernizeProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }

    const handelGoogleLogin = () => {
        providerLogin(provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }
                //get jwt token
                fetch('https://lens-queen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="hero">
            <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center w-full lg:text-left">
                    <img className='rounded-lg' src={signupImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelSignup} className="card-body">
                        <h1 className="text-5xl font-bold">Signup</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photoURL" type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-600" type="submit" value="Signup" />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleLogin} className="btn bg-slate-600">Continue with Google</button>
                        </div>
                    </form>
                    <p className='text-center py-7'>Already have an account? <Link className='text-slate-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;