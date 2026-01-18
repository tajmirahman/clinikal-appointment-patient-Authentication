import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthPorvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-ring loading-xl"></span>
    }

    if (!user) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }


    
    return children;



};

export default PrivateRoute;