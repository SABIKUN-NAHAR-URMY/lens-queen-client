import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    let location = useLocation();

    if(loading)
    {
        return <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;