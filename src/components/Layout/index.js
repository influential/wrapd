import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav';
import { LayoutContainer } from './Layout.styled';

function Layout() {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <LayoutContainer>

            { isLoggedIn && <Nav />}
            <Outlet />
        </LayoutContainer>
    )
}

export default Layout;