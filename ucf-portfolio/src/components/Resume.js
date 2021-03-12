import React from 'react';
import styled from 'styled-components';
import resume from "../PDF's/Austin's-Resume.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {device} from '../devices';

const Resume = () => {
    return (
        <StyledResume id="resume">
            <h3>My skills:</h3>
            <br/>
            <ul>
                <h3 className="front-end"> <p> <u> Front End Technologies </u></p> <br/> HTML5 | CSS | Javascript | jQuery | Bootstrap | GSAP | Animations | Handlebars | React.js | Styled Components | React Hooks</h3>
                <h3 className="back-end" ><p> <u> Back End Technologies </u></p> <br/> Node.js | Express.js | Stripe.js | API's | MySQL | SQLite3 | Sequelize | bcrypt |
                    cookies | express-session | dotenv</h3>
            </ul>
            <br/>
            <div className="">
                <h3>Click to download my resume!</h3>
            </div>
            <form method="get" action={resume} target="_blank"
                className="download-button-container">
               <button className="btn"><FontAwesomeIcon icon={faDownload} />   Download</button>
            </form>
        
        </StyledResume>
    )
};

const StyledResume = styled.section `

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;

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

export default Resume;