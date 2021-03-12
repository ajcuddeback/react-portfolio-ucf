import React from 'react';
import styled from 'styled-components';
import headShot from '../images/Head-shot.jpg';
import {device} from '../devices';

const About = () => {
    return (
        <StyledAbout id="about">
            <div className="title-flex">
                <h2 className="main-titles">About Me</h2>
            </div>
            <article>
                <div className="about-content-wrapper row">
                    <div className="img">
                        <img src={headShot} alt="Austin Cuddeback sitting on a bench"
                            className="float-right img-responsive"></img>
                            </div>
                    
                    <div className="download-button-wrapper text-center">
                        <h3>Hello, my name is Austin Cuddeback and I am a full-stack web developer with many years
                                of
                                problem solving experience. I have a
                                background in management which has taught me how to be an excellent problem solver and
                                natural leader. I am looking
                                to bring
                                my knowledge, communication, and technical skills to add value to an organization while
                                focusing
                                on continuous learning and engaging in my community to give back in the field of web
                                development.</h3>
                        <br />
                    </div>
                </div>
            </article>
        </StyledAbout>
    )
};

const StyledAbout = styled.section `

    .about-content-wrapper {
        display: flex;
        width:50%;
        margin: 0 auto;
    }

    h3 {
        text-align: center;
        margin-top: 1rem;
    }

    img {
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        height: 500px;
        &:hover {
            box-shadow: 2px 2px 15px 2px blue;
            transition: 1s;
        }
    }

    @media ${device.laptopL} {
        .about-content-wrapper {
            width: 70%;
        }
        img{
            height: 400px;
        }
    }
    @media ${device.laptop} {
        .about-content-wrapper {
            width: 80%;
        }
        img{
            height: 300px;
        }
    }
    @media ${device.tablet} {
        .about-content-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img {
            height: 350px;
        }
    }
    @media ${device.mobileM} {
       h3 {
           font-size: 1rem;
       }
    }
`

export default About;