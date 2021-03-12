import React from 'react';
import styled from 'styled-components';
import {device} from '../devices';

const Navbar = () => {
    return (
        <StyledHeader>
            <h1><a href="/react-portfolio">AustinWebDev</a></h1>
            <nav>
                <ul>
                    <li><a href="#about" className="red-border">About Me</a></li>
                    <li><a href="#work" className="red-border">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 30px;
    z-index: -1;

    h1 {
        border: 2px solid blue;
        padding-top: 5px;
        padding-left: 3px;
        border-radius: 5px;
        font-size: 55px;
        text-shadow: 1px 1px blue;
        animation: headGlow 5s 3.6s;
        box-shadow: 2px 2px 15px 1px blue;
        font-family: Neon;
    }

    ul {
        margin-top: 23px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        list-style: none
    }

    a {
        font-family: Neon;
        &:hover {
            box-shadow: 2px 2px 15px 1px blue;
            transition: 1s;
        }
    }

    nav ul li a {
        padding: 10px 30px;
        font-size: 1.55rem;
    }

    @media ${device.laptop} {
        flex-direction: column;
        align-items: center;
    }
    @media ${device.tablet} {
        h1 {
            font-size: 40px;
        }
        nav ul li a {
            font-size: 1.2rem;
            padding: 10px 15px;
        }
    }
    @media ${device.mobileL} {
        h1 {
            font-size: 35px;
        }
        nav ul li a {
            font-size: 1rem;
            padding: 10px 15px;
        }
    }
    @media ${device.mobileM} {
        
        nav ul li a {
            font-size: .8rem;
            padding: 10px 15px;
        }
    }
`

export default Navbar;