import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthPorvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

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