import React, {useRef, useEffect} from 'react';
import styled from 'styled-components';
import {device} from '../devices';

const Intro = () => {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d");
        ctx.canvas.width = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        let particleArray;

        function Particle(x, y, directionX, directionY, radius, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.radius = radius;
            this.color = color;
        }
    
        // add draw method to particle prototype
        Particle.prototype.draw = function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill()
        }
    
        // add upadte method to particle prototype
        Particle.prototype.update = function () {
            if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                this.directionY = -this.directionY;
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
        //create particle array
        function init() {
            particleArray = [];
            for (let i = 0; i < 500; i++) {
                let radius = Math.random() * 2.3;
                let x = Math.random() * (window.innerWidth - radius * 2);
                let y = Math.random() * (window.innerHeight - radius * 2);
                let directionX = (Math.random() * .4) - .2;
                let directionY = (Math.random() * .4) - .2;
                let color = 'rgba(0,123,255, .7)';
    
                particleArray.push(new Particle(x, y, directionX, directionY, radius, color))
            }
        }
        //animation loop
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    
            for (let i = 0; i < particleArray.length; i++) {
                particleArray[i].update();
            }
        }
        init();
        animate();
    
        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init();
        })
    }, [])


    return (
        <StyledIntro>
            <canvas ref={canvasRef} id='canvas1'></canvas>
            <h1>Hello, my name is Austin Cuddeback, <span>and I am a Full-Stack Web Developer</span></h1>
            <div className="blocking"></div>
        </StyledIntro>
    )
}

const StyledIntro = styled.div `
    z-index: 999;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    animation: moveIntro 2s 3.9s forwards;
    background-color: var(--background);

    #canvas1 {
        height: 100%;
    }

    h1 {
        font-size: 2.5rem;
        position: absolute;
        top: 45vh;
        animation: headingUp 1.2s 0.3s forwards;
    }
    .blocking {
        position: fixed;
        top: 45vh;
        background-color: rgb(3, 0, 0);
        width: 1400px;
        height: 2.9rem;
    }

    @media ${device.laptopL} {
        h1 {
            font-size: 1.9rem
        }
        .blocking {
            height: 3.2rem;
        }
    }
    
    @media ${device.laptop} {
        h1 {
            font-size: 1.4rem
        }
        .blocking {
            height: 3.2rem;
        }
    }
    @media ${device.tablet} {
        h1 {
            font-size: 1rem
        }
        .blocking {
            height: 3.2rem;
        }
    }
    @media ${device.mobileL} {
        h1 {
            font-size: 1.05rem;
        }
        .blocking {
            height: 3.3rem;
            width: 455px;
        }
        h1 span {
            display: block;
        }
    }
`

export default Intro