import styled from 'styled-components';

export const TopItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* margin: 20px; */
    /* border: 2px solid black; */
    margin: 5px;

    .nameNum {
        display: flex;
        justify-content: space-around;
    }

    h1 {
        border-bottom: 2px solid green;
    }

    .img-wrapper {
        width: 320px;
        height: 320px;
        object-fit: cover;
        /* border: 2px solid red; */
    }

    img {
        width: 100%;
        height: 100%;

        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`