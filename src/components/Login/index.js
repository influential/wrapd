import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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

    
    return (
        <LoginStyled>
            <em>{ isLoggedIn ? "Logout" : "Login"}</em>
        </LoginStyled>

    )
    

}

export default Login;