import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopItems } from '../../../redux/topItems';


// List of terms that spotify uses for the range and type parameters 
const terms = {
    SHORT: "short_term",
    MEDIUM: "medium_term",
    LONG: "long_term",
    ARTISTS: "artists",
    TRACKS: "tracks",
}


function TopItems() {
    const dispatch = useDispatch();
    const { token } = useSelector(state => state.user);
    const { data, status } = useSelector(state => state.topItems)

    const [type, setType] = useState(terms.ARTISTS);
    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);
    const [range, setRange] = useState(terms.MEDIUM);

    

    useEffect(() => {
        if (type) {
            // console.log("TOKEN TOP", token);
            // console.log("type: ", type);

            const payload = { token, type, limit, offset, range };
            dispatch(getTopItems(payload));
        }
        
    }, [token, dispatch, type, limit, offset, range]);

    useEffect(() => {
        console.log("Data: ", data);
        console.log("Status:" , status);
    },[data]);

    return (
        <>
            <h1>Top { type[0].toUpperCase() + type.substring(1) }</h1>

            { status === "loading" && <h2>Loading...</h2>}

            { data && data.items && data.items.map((item, idx) => {
                return <h2 key={idx}>{ item.name }</h2>
            })}
        </>

        
    )
}

export default TopItems;