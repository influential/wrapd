import styled from 'styled-components';

export const LandingContainer = styled.div`
    width: 100%;
    height: 100%;

    background: #121416;
    color: #F8F8F8;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    .login-btn {
        background: #0fc650;
        padding: 20px;
        margin-top: 200px;
        border-radius: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: 0.25s;
        cursor: pointer;

        .spotify-icon {
            /* z-index: 50; */
            font-size: 3rem;
            color: #1C1F22;
        }

        &:hover {
            padding: 25px;
            background: transparent;
            background: rgba(15,198,80,0.75);
            border: 3px solid #0fc650;
            
        }
    }

    h1 {
        color: #0fc650;
        font-weight: 800;
        font-size: 5rem;
    }

    h1:before {
        content: attr(refl-text);
        border-bottom: 1px solid #0fc650;
        position: absolute;
        
        transform: rotateX(180deg);

        transform-origin: bottom;
        color: white;
        background: linear-gradient(to top, #0fc650, transparent);
        
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        opacity: 0.4;
    }
`

