import axios from 'axios';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const topArtistsEndpoint = "https://api.spotify.com/v1/me/top/artists";

export const getTopItems = createAsyncThunk(
    "getTopItems",
    async ({ token, type, limit, offset, range }) => {
        // console.log(token);

        let base = `https://api.spotify.com/v1/me/top/${type}`;
        let query = `?limit=${limit}&offset=${offset}&time_range=${range}`;
        let endpoint = base + query;

        console.log(endpoint)

        return axios({
            method: "GET",
            url: endpoint,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        }).then(res => {
            console.log("res: ", res);
            return res.data;
            

        }).catch(e => {
            console.log("Error:", e);

            if (e.status === 401) { console.log("TOKEN EXPIRED:", e.status) }
        })
    }
)

export const topItemsSlice = createSlice({
    name: "topItems",
    initialState: {
        data: [],
        type: "artists",
        limit: "20",
        offset: "0",
        time_range: "short_term",
        status: null
    },
    reducers: {
        setType: (state, action) => {
            state.type = action.payload;
        },
        setRange: (state, action) => {
            state.time_range = action.payload;
        },
    },
    extraReducers: {
        [getTopItems.pending]: (state, action) => {
            state.status = "loading";
        },
        [getTopItems.fulfilled]: (state, action) => {
            state.status = "success";
            console.log("success");
            console.log("action.payload:", action.payload)
            state.data = action.payload;
        },
        [getTopItems.rejected]: (state, action) => {
            state.status = "failed";
        } 
    }
});

export const { setType, setRange } = topItemsSlice.actions;
export default topItemsSlice.reducer;