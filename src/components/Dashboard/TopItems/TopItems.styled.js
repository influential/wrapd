import styled from 'styled-components';

export const TopItemsList = styled.div`
    width: 95%;
    
    /* border: 1px solid red; */
    display: grid;
    
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-column-gap: 45px;
`