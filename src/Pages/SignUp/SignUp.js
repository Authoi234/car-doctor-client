import React, { useContext, useState } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { setAuthToken } from '../../api/auth';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMassage, setErrorMassage] = useState('');
    const navigate = useNavigate();
    

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setErrorMassage('');
                navigate('/');
                setAuthToken(user);
            })
            .catch(error => {
                setErrorMassage(error.message);
            })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20 text-center">
                    <h1 className="text-5xl font-bold">Sign Up</h1>
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href='/' className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                    </form>
                    <p className='font-bold text-red-500'>
                        {errorMassage}
                    </p>
                    <p className="font-bold text-center">
                        Already have an account <Link className="text-orange-600" to={'/login'}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;