import React from 'react';
import Login from '../Login';
import { useSelector } from 'react-redux';
import { LandingContainer } from './Landing.styled'
import { FaSpotify } from 'react-icons/fa';
import useLogin, { authorize } from '../../hooks/useLogin';
import useLogout from '../../hooks/useLogout';

function Landing() {
    const { isLoggedIn } = useSelector(state => state.user);
    const logout = useLogout();

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