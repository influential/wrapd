import React from 'react';
import { useSelector } from 'react-redux';

function Nav() {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <div>Nav</div>
    )
}

export default Nav;