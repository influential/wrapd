import React, { useEffect } from 'react';
import Login from '../Login';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LandingContainer } from './Landing.styled'
import { FaSpotify } from 'react-icons/fa';
import { authorize } from '../../hooks/useLogin';
import useLogout from '../../hooks/useLogout';

function Landing() {
    const { isLoggedIn, loginRedirect } = useSelector(state => state.user);
    const logout = useLogout();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn && loginRedirect) {
            navigate('dashboard');
        }
    });

    return (
        <LandingContainer>

            <h1 refl-text="WRAPD">WRAPD</h1>

            <div className="login-btn" onClick={ isLoggedIn
                ? logout
                : authorize
            }>
                <Login />
                <FaSpotify className="spotify-icon"/>
            </div>
        </LandingContainer>
    )
}
export default Landing;