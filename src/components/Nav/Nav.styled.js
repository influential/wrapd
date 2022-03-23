import styled from 'styled-components';

export const NavContainer = styled.nav`
    min-height: 20px;
    position: sticky;
    top: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #121416;
    
    .active {
        border-bottom: 3px solid #0fc650;
    }

    a {
        color: white;
        font-size: 1rem;
        text-decoration: none;
    }
    .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-right: 2em;
    }
    .nav-link {
        margin-left: 20px;
        font-size: 1.5rem;
        text-align: center;
    }
`

export const Hero = styled.div`
    background-color: #0fc650;
    color: white;
    font-weight: bold;
    padding: 1px 20px;
    text-align: center;

    color: #022710;
    font-weight: 800;
    font-size: 1.5rem;
`