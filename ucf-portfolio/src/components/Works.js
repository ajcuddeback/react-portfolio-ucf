import React from 'react';
import styled from 'styled-components';
import {device} from '../devices';

// imported images
import devConnect from '../images/dev-connect.png';
import hernandoReptile from '../images/home-img-prev.png';
import budgetApp from '../images/budget-app.png';
import exploreOutdoors from '../images/explore-outdoors.png';
import days from '../images/days.png';
import beatMaker from '../images/beat-maker.png';
import noteTaker from '../images/note-taker.png';

const Works = () => {
    return (
        <StyledWorks id="work">
            <article>
                <div className="title-flex">
                    <h2 className="main-titles">My Work</h2>
                </div>
                <div className="grid-wrapper">
                    <div className="grid-content">
                        <a href="https://dev-connect-ac.herokuapp.com/" target="_blank" className="works main-work" rel="noreferrer">
                            <div>
                                <p className="Coding-Quiz">Dev Connect</p>
                            </div>
                        </a>
                        <a href="https://www.hernandoreptile.org/" target="_blank" className="works sub-work1" rel="noreferrer">
                            <div>
                                <p>Hernando Reptile</p>
                            </div>
                        </a>
                        <a href="https://budget-application-1999.herokuapp.com/" target="_blank"
                            className="works sub-work2" rel="noreferrer">
                            <div>
                                <p className="comingSoonP">Budget App</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/Explore-Outdoors/" target="_blank"
                            className="works sub-work3" rel="noreferrer">
                            <div>
                                <p className="weatherAppP">Explore Outdoors</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/days/" target="_blank" className="works sub-work4" rel="noreferrer">
                            <div>
                                <p className="comingSoonP">Days.</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/beat-maker/" target="_blank" className="works sub-work5" rel="noreferrer">
                            <div>
                                <p className="comingSoonP">Beat Maker</p>
                            </div>
                        </a>
                        <a href="https://vast-atoll-67249.herokuapp.com/" target="_blank" className="works sub-work6" rel="noreferrer">
                            <div>
                                <p className="comingSoonP">Note Taker</p>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    .grid-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .grid-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: 400px repeat(2, 200px);
        width: 75%;
        justify-items: center;
        grid-gap: 30px;
    }
    .works {
        display: flex;
        align-items: flex-end;
        text-decoration: none;
        box-shadow: 2px 2px 15px 2px blue;
    }
    .works div p {
        font-size: 20px;
        text-decoration: none;
        color: var(--neon-blue);
        background-color: var(--background);
        padding: 10px;
        border-radius: 5px;
    }
    .main-work div p {
        color: var(--neon-blue);
        font-size: 30px;
        width: 100%;
    } 
    .main-work {
        width: 100%;
        grid-column: 1 / span 3;
        background-image: url(${devConnect});
        background-size: cover;
    }  
    .sub-work1,
    .sub-work2,
    .sub-work3,
    .sub-work4,
    .sub-work5,
    .sub-work6 {
        background-size: cover;
        width: 70%;
    }
    .sub-work2,
    .sub-work3,
    .sub-work4,
    .sub-work5 {
        background-position: center;
    }

    .sub-work1 {
        background-image: url(${hernandoReptile});
        background-position: top;
    }
    .sub-work2 {
        background-image: url(${budgetApp});
    }
    .sub-work3 {
        background-image: url(${exploreOutdoors});
    }
    .sub-work4 {
        background-image: url(${days});
    }
    .sub-work5 {
        background-image: url(${beatMaker});
    }
    .sub-work6 {
        background-image: url(${noteTaker});
        background-position: unset;
    }

    @media ${device.laptop} {
        .grid-content {
            grid-template: 300px repeat(6, 250px) / 1fr;
            grid-gap: 20px;
        }
        .main-work div p {
            font-size: 20px;
            width: 100%;
        }
        .main-work {
            background-position: inherit;
        }

        .sub-work1,
        .sub-work2,
        .sub-work3,
        .sub-work4,
        .sub-work5,
        .sub-work6 {
            width: 100%;
            grid-column: 1 / span 3;
            background-size: cover;
        }
        
        .sub-work3,
        .sub-work4,
        .sub-work5,
        .sub-work6 {
            background-position: center;
        }
        .sub-work1 {
            background-position: top;
        }
    }
`

export default Works;