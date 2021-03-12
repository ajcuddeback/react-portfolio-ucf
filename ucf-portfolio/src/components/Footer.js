import React from 'react';
import styled from 'styled-components';

// Import svgs
import github from '../images/github.svg';
import linkedIn from '../images/linkedin.svg';
import twitter from '../images/twitter.svg';

const Footer = () => {
    return (
        <StyledFooter>
                <div className="top-footer-content">
                    <a href="https://github.com/ajcuddeback" target="_blank" rel="noreferrer">
                        <img src={github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/austin-cuddeback-b3aba7197/" target="_blank" rel="noreferrer">
                        <img src={linkedIn} alt=""/>
                    </a>
                    <a href="https://twitter.com/AustinCuddeback" target="_blank" rel="noreferrer">
                        <img src={twitter} alt=""/>
                    </a>
                </div>
                <div className="left-side-footer">
                    <p>Designed and Made by Austin Cuddeback</p>
                </div>
            </StyledFooter>
    )
}

const StyledFooter = styled.footer `
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px;
    border-top: 5px solid blue;
    margin-top: 20px;
    
    .top-footer-content {
        margin-bottom: 10px;
    }
    .top-footer-content a {
        margin-right: 7px;
    }
    p {
        font-size: 25px;
    }
`

export default Footer