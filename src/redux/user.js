import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: localStorage.getItem('token') ? true : false,
        token: null,
        loginRedirect: true
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            
            // console.log("LOGGED IN");
        },
        setLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.loginRedirect = true;
            // console.log("LOGGED OUT");

        },
        setLoginRedirect: (state, action) => {
            state.loginRedirect = action.payload;
            // console.log("Redirect to dashboard disabled");
        }
    }
});

export const { setLoggedIn, setLoggedOut, setLoginRedirect } = userSlice.actions;
export default userSlice.reducer;