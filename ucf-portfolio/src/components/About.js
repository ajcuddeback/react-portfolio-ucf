import React from 'react';
import styled from 'styled-components';
import headShot from '../images/Head-shot.jpg';
import resume from "../PDF's/Austin's-Resume.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
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
                        <h3>My skills:</h3>
                        <br/>
                        <ul>
                            <li className="front-end"> <p> <u> Front End Technologies </u></p> <br/> HTML5 | CSS | Javascript | jQuery | Bootstrap | GSAP | Animations | Handlebars | React.js | Styled Components | React Hooks
                            </li>
                            <li className="back-end" ><p> <u> Back End Technologies </u></p> <br/> Node.js | Express.js | Stripe.js | API's | MySQL | SQLite | Sequelize | bcrypt |
                                cookies | express-session | dotenv</li>
                        </ul>
                        <br/>
                        <div className="">
                            <h3>Click to download my resume!</h3>
                        </div>
                        <form method="get" action={resume} target="_blank"
                            className="download-button-container">
                            <button className="btn"><FontAwesomeIcon icon={faDownload} />   Download</button>
                        </form>
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

    .download-button-wrapper {
        width: 100%;
        align-self: center;
        margin-left: 4rem;
    }
    .front-end {
        margin-bottom: 1rem;
    }

    .front-end,
    .back-end {
        font-size: 1rem;
    }

    h3 {
        text-align: center;
        margin-top: 1rem;
    }

    form {
        display: flex;
        justify-content: center;
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
        .download-button-wrapper {
            margin-left: 0;
        }
    }
    @media ${device.mobileM} {
       h3 {
           font-size: 1rem;
       }
    }
`

export default About;