import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa6';
import { setAuthToken } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub } = useContext(AuthContext);
    const naviagte = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                const user = res.user;
                console.log(user);
                setAuthToken(user);
                naviagte('/')
            })
            .catch(err => console.log(err))
    }

    const handleFacebookSignIn = () => {
        signInWithFacebook()
            .then(res => {
                const user = res.user;
                console.log(user);
                setAuthToken(user);
                // const credential = facebookProvider.credentialFromResult(res);
                // const accessToken = credential.accessToken;
            })
            .catch((error) => {
                console.log(error);
                // const credential = facebookProvider.credentialFromError(error);
            })
    }
    const handleGithubSignIn = () => {
        // signInWithGithub()
        //     .then(res => {
        //         const user = res.user;
        //         console.log(user);
        //         setAuthToken(user);
        //         navigator('/');
        //     })
        //     .catch(err => console.log(err))
        alert('this is updating');
    }

    return (
        <div>
            <p className="text-center">
                <button className='m-3 btn-ghost text-4xl rounded-full transition shadow-xl p-2 shadow-blue-500 text-blue-500 hover:border-slate-500 hover:text-white hover:bg-gradient-to-r from-blue-600 to-blue-400' onClick={handleGoogleSignIn}><FaGoogle></FaGoogle></button>
                <button className='m-3 btn-ghost text-4xl rounded-full transition shadow-xl p-2 shadow-blue-500 text-blue-500 hover:border-slate-500 hover:text-white hover:bg-gradient-to-r from-blue-600 to-blue-400' onClick={handleFacebookSignIn}><FaFacebook></FaFacebook></button>
                <button className='m-3 btn-ghost text-4xl rounded-full transition shadow-xl p-2 shadow-slate-800 text-black hover:border-black hover:text-white hover:bg-gradient-to-r from-black to-slate-900' onClick={handleGithubSignIn}><FaGithub></FaGithub></button>
            </p>
        </div>
    );
};

export default SocialLogin;