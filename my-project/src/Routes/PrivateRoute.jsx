import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthPorvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user}=useContext(AuthContext)


    if(user && user?.email){
        return children;
    }
   else{
    return <Navigate to={'/auth/login'}></Navigate>
   }

};

export default PrivateRoute;