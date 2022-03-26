import styled from 'styled-components';

export const TopMenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 10px;
    margin-bottom: 10px;
    border-bottom: 2px solid lightgray;
    border-top: 2px solid lightgray;

    width: 95%;

    /* border: 2px solid orange; */


    .btn {
        margin: 5px;
        border: 2px solid lightgray;
        padding: 5px;
        cursor: pointer;

        border-radius: 10px;
        transition: 0.25s;

        &:active {
            color: #0fc650;
        }

        &:hover {
            color: white;
            background: #0fc650;
            border: 2px solid #0fc650
        }
    }

    .types {
        /* width: 200px; */
        /* border: 1px solid green; */
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .ranges {
        display: flex;
    }

`