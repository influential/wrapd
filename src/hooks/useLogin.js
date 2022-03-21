import { useState, useEffect } from 'react';

const REACT_APP_CLIENT_ID="29d2fe5ce8344216a0aba2e6af42c3eb"
const REACT_APP_REDIRECT_URI="http://localhost:3000"
const REACT_APP_AUTH_ENDPOINT="https://accounts.spotify.com/authorize"
const REACT_APP_RESPONSE_TYPE="token"

export const useLogin = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [url, setUrl] = useState("");


    const logout = () => {
        console.log("Logout clicked");
        window.localStorage.removeItem("token");
        
        setToken(null);
        setIsLoggedIn(false);
    }
    
    useEffect(() => {
        const url = `${REACT_APP_AUTH_ENDPOINT}?client_id=${REACT_APP_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&response_type=${REACT_APP_RESPONSE_TYPE}`;
        setUrl(url);

        if (window.location.hash) {
            const hash = window.location.hash;
            let _token = window.localStorage.getItem("token");

            if (!_token && hash) {
                _token = hash
                            .substring(1)
                            .split("&")
                            .find(c => c.startsWith("access_token"))
                            .split("=")[1];
                window.location.hash = "";
                window.location = "";
                window.localStorage.setItem("token", _token);
            }
            setToken(_token);
            setIsLoggedIn(true);
        } 

    }, [token, url, isLoggedIn]);

    return { token, url, logout, isLoggedIn };
}