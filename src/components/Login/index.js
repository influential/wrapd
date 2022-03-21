import React from 'react';
import { useLogin } from '../../hooks/useLogin';

import { LoginStyled } from './Login.styled';

function Login() {
    const { token, url, logout, isLoggedIn } = useLogin();

    if (!isLoggedIn) {
        return <LoginStyled href={url}>Login with Spotify</LoginStyled>
    } else { return <button onClick={logout}>Logout</button> }

}

export default Login;