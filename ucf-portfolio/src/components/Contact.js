import React from 'react';
import styled from 'styled-components';
import {device} from '../devices';

const Contact = () => {
    return (
        <StyledContact id="contact">
            <div className="title-flex">
                <h2 className="main-titles">Contact Me</h2>
            </div>
            <div className="contact-wrapper">
                <form action="https://formspree.io/f/mvovqazn" target="_blank" method="POST">
                    <label>
                    Your email:
                        <input type="text" name="_replyto" required></input>
                    </label>
                    <label>
                    Your message:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
                <br/>
                <br/>
                <h2>You can also reach me at:</h2>
                <h3>Phone: (863) 245-3982</h3>
                <h3>Email: ajcuddeback@gmail.com</h3>
            </div>
        </StyledContact>
    )
}

const StyledContact = styled.section `
    .contact-wrapper {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input[type="text"],
    textarea {
        width: 1000px;
        padding: 12px 20px;
        margin: 8px 0;
        display: block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    button[type="submit"] {
        width: 1000px;
        background-color: blue;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    @media ${device.laptop} {
        input[type="text"],
        textarea {
            width: 700px;
        }
        button[type="submit"] {
            width: 700px;
        }
    }
    @media ${device.tablet} {
        input[type="text"],
        textarea {
            width: 400px;
        }
        button[type="submit"] {
            width: 400px;
        }
    }
    @media ${device.mobileL} {
        input[type="text"],
        textarea {
            width: 300px;
        }
        button[type="submit"] {
            width: 300px;
        }
    }
    
`
export default Contact;