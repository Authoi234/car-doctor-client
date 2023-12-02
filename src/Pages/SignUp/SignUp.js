import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email , password); 

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error(error);
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
                    <form className="card-body">
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
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" onSubmit={handleSignUp} className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <p className="font-bold text-center">
                        Already have an account <Link className="text-orange-600" to={'/login'}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;