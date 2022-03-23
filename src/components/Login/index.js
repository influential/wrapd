import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useLogin, { authorize } from '../../hooks/useLogin';
import useLogout from '../../hooks/useLogout';

import { LoginStyled } from './Login.styled';

function Login() {
    useLogin();
    const logout = useLogout();
    const { isLoggedIn } = useSelector(state => state.user);

    useEffect(() => {
        console.log("isLoggedIn:", isLoggedIn);
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <LoginStyled onClick={authorize}>Login with Spotify</LoginStyled>
    } else { return <button onClick={logout}>Logout</button> }

}

export default Login;