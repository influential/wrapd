import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: localStorage.getItem('token') ? true : false,
        token: null
    },
    reducers: {
        setLoggedIn: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            console.log("LOGGED IN");
        },
        setLoggedOut: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            console.log("LOGGED OUT");
        },
    }
});

export const { setLoggedIn, setLoggedOut } = userSlice.actions;
export default userSlice.reducer;