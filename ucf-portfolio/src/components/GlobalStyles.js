import {createGlobalStyle} from 'styled-components';
import {device} from '../devices';


const GlobalStyle = createGlobalStyle `
    

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
        overflow-x: hidden !important;
    }

    :root {
        --background: rgb(3,0,0);
        --silver: #c5c6c7;
        --neon-blue: #43d3fe;
    }

    body {
        background-color: var(--background);
        color: var(--neon-blue);
    }
    
    a {
        text-decoration: none;
        color: #43d3fe;
    }
    .red-border {
        border-right: 1px solid blue;
    }

    .title-flex {
        display: flex;
        justify-content: center;
    }

    .main-titles {
        font-size: 3rem;
        width: 20%;
        text-align: center;
        margin-top: 150px;
        margin-bottom: 20px;
        border-bottom: 1px solid blue;
    }
    .btn {
        background-color: blue;
        padding: .7rem;
        border-style: none;
        border-radius: 5px;
        cursor: pointer;
        width: 150px;
    }
    @media ${device.laptop} {
       .main-titles {
           width: 40%;
       }
    }
    @media ${device.tablet} {
       .main-titles {
           width: 50%;
       }
    }
    @media ${device.mobileL} {
       .main-titles {
           width: 60%;
       }
    }
    @media ${device.mobileM} {
       .main-titles {
           width: 70%;
       }
    }
`


export default GlobalStyle;