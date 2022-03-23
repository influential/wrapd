import { useDispatch } from "react-redux";
import { setLoggedOut } from "../redux/user";


// Runs when the logout button is clicked. Intended as an onClick handler at all times.
// Removes the stored token from localStorage, sets loggedOut state.
export default function useLogout() {
    const dispatch  = useDispatch();

    return () => {
        localStorage.removeItem("token");
        console.log("Removed token from local storage...")
        dispatch(setLoggedOut());
    }
    
}