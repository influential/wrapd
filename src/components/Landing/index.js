import React from 'react';
import Login from '../Login';
import { useSelector } from 'react-redux';
import { LandingContainer } from './Landing.styled'

function Landing() {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <LandingContainer>
            <h1>Wrapd.</h1>
            <Login />
        </LandingContainer>
    )
}
export default Landing;