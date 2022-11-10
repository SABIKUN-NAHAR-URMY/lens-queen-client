import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import loginImg from '../../images/login.jpg';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const provider = new GoogleAuthProvider();
    const { login, providerLogin, loading } = useContext(AuthContext);
    useTitle('Login');

    let navigate = useNavigate();
    let location = useLocation();

    if(loading)
    {
        return <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }

    let from = location.state?.from?.pathname || "/";

    const handelLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            form.reset();
            const currentUser = {
                email: user.email
            }
            console.log(currentUser);
            //get jwt token
            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
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
        .catch(error => console.error(error))
    }

    const handelGoogleLogin = () =>{
        providerLogin(provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch(error => console.error(error));
    }

    return (
        <div className="hero">
            <div className="hero-content my-10 grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center w-full lg:text-left">
                    <img className='rounded-lg' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-slate-600" type="submit" value="Login" />
                        </div>
                        <div className="form-control mt-6">
                            <button onClick={handelGoogleLogin} className="btn bg-slate-600">Continue with Google</button>
                        </div>
                    </form>
                    <p className='text-center py-7'>New to <strong>Lens-Queen</strong>? <Link className='text-slate-600' to='/signup'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;