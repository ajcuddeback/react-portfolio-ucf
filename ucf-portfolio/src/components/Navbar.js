import React from 'react';
import styled from 'styled-components';
import {device} from '../devices';


const Navbar = ({navElement, navElements, setNavElements, id}) => {

    const navSelectHandler = () => {
        const newnavElements = navElements.map((navElement) => {
            if(navElement.id === id) {
                return {
                    ...navElement,
                    selected: true
                }
            } else {
                return {
                    ...navElement,
                    selected: false
                }
            }
        });

        setNavElements(newnavElements);
    }

    
    return (
        <StyledLi><a href={navElement.href} className={`red-border ${navElement.selected ? 'selected' : ''}`} onClick={navSelectHandler}>{navElement.name} </a></StyledLi>
    )
}

const StyledLi = styled.li `

    .selected {
        box-shadow: 2px 2px 15px 1px blue;
        transition: 1s;
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


    @media ${device.tablet} {
        nav ul li a {
            font-size: 1.2rem;
            padding: 10px 15px;
        }
    }
    @media ${device.mobileL} {
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