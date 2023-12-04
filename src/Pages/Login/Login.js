import { React, useContext, useState } from "react";
import img from '../../assets/images/login/login.svg';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaFacebookF, FaGoogle } from "react-icons/fa6";

const Login = () => {
    const { signInUser, signInWithGoogle, signInWithFacebook } = useContext(AuthContext);
    const [errorMassage, setErrorMassage] = useState('');

    const handleLogin = event => {
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setErrorMassage(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                setErrorMassage(error.message);
            })
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                const user = result.user;
                console.log(user);
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
                    <h1 className="text-5xl font-bold">Login</h1>
                    <form className="card-body" onSubmit={handleLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary" />
                        </div>
                    </form>
                    <div className='flex justify-center items-center'>
                        <FaGoogle className='text-3xl text-white bg-blue-600 p-1 rounded-full cursor-pointer mr-2' onClick={handleGoogleSignIn}></FaGoogle>
                        <FaFacebookF className='text-3xl text-white bg-blue-600 p-1 rounded-full cursor-pointer' onClick={handleFacebookSignIn}></FaFacebookF>
                    </div>
                    <p className='font-bold text-red-500'>
                        {errorMassage}
                    </p>
                    <p className="font-bold text-center">
                        New to Car Doctor <Link className="text-orange-600" to={'/signup'}>Signup</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login