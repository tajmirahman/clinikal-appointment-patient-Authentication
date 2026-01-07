import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();

    if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(user && user?.email){
        return children;
    }
   else{
    return <Navigate to={'/auth/login'}></Navigate>
   }

};

export default PrivateRoute;