import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { NavContainer, Hero } from './Nav.styled';

function Nav() {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <NavContainer>
            <NavLink to="/">
                <Hero className="hero">
                    <h1 refl-text="wrapd.">wrapd.</h1>
                </Hero>
            </NavLink>
            <div className='links'>
                <NavLink className="nav-link" to="dashboard">Dashboard</NavLink>
                {/* <NavLink className="nav-link" to="comics">Dashboard</NavLink> */}
                {/* <NavLink className="nav-link" to="series">Series</NavLink> */}
                
            </div>
        </NavContainer>
    )
}

export default Nav;