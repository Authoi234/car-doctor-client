import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h1 className='text-5xl text-center'><span className="loading loading-spinner loading-lg"></span><span className="loading loading-ring loading-lg"></span><span className="loading loading-infinity loading-lg"></span><h2>Connection is Secure...</h2></h1>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;