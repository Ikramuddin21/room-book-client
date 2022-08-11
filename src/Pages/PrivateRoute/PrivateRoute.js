import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = () => {

    const {user, loading} = useAuth();
    const location = useLocation();

    if(loading) return <h1 style={{textAlign: "center", marginTop: "20px"}}>Loading...</h1>
    
    return (
        user?.email ? <Outlet /> :
        <Navigate to="/login" state={{from: location}} />
    );
};

export default PrivateRoute;