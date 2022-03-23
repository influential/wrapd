import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from '../redux/user';


// Navigates to the Spotify authorization page where the user must accept the requested scopes
// that are required to pull data fromo the Spotify Web API. 
function authorize() {
    const url = `${process.env.REACT_APP_AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=${process.env.REACT_APP_RESPONSE_TYPE}`;
    window.location = url;
}

export default function useLogin() {
    // const [token, setToken] = useState(null);
    // const { isLoggedIn } = useSelector(state => state.user);
    const dispatch  = useDispatch();

    // The following runs everytime the login component is rendered.
    useEffect(() => {
        console.log("LOGIN HOOK RAN")

        // The following only runs if there is a hash value in the current URL. The hash value will only be set 
        // if the authorization scopes are accepted on the Spotify redirect. Once the user clicks accept, 
        // they are brought back to our login page, hash is set, so we parse hash to find the token.
        if (window.location.hash) {
            console.log("HASH FOUND")
            const hash = window.location.hash;
            let _token = localStorage.getItem("token");
    
            if (!_token && hash) {
                _token = hash
                            .substring(1)
                            .split("&")
                            .find(c => c.startsWith("access_token"))
                            .split("=")[1];
                
                localStorage.setItem("token", _token);
            }

            // Otherwise the token stored in localStorage is used
            // setToken(_token);
            dispatch(setLoggedIn(_token));
            
            // Clear the URL to hide any data given in the callback from Spotify
            window.location.hash = "";
            window.location = "/";
        } 
    })
}

export { authorize };