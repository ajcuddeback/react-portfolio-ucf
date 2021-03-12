(this["webpackJsonpucf-portfolio"]=this["webpackJsonpucf-portfolio"]||[]).push([[0],{22:function(n,e,t){},42:function(n,e,t){"use strict";t.r(e);var i,a,r,o,c,s,d,l,b,p=t(1),h=t.n(p),x=t(24),m=t.n(x),u=(t(22),t(30)),j=t(11),g=t(3),f=t(5),w=t(6),k="375px",O="425px",v="768px",y="1024px",N="1440px",z="2560px",M={mobileS:"(max-width: ".concat("320px",")"),mobileM:"(max-width: ".concat(k,")"),mobileL:"(max-width: ".concat(O,")"),tablet:"(max-width: ".concat(v,")"),laptop:"(max-width: ".concat(y,")"),laptopL:"(max-width: ".concat(N,")"),desktop:"(max-width: ".concat(z,")"),desktopL:"(max-width: ".concat(z,")")},S=t(0),E=w.b.div(i||(i=Object(f.a)(["\n    z-index: 999;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    position: fixed;\n    animation: moveIntro 2s 3.9s forwards;\n    background-color: var(--background);\n\n    #canvas1 {\n        height: 100%;\n    }\n\n    h1 {\n        font-size: 2.5rem;\n        position: absolute;\n        top: 45vh;\n        animation: headingUp 1.2s 0.3s forwards;\n    }\n    .blocking {\n        position: fixed;\n        top: 45vh;\n        background-color: rgb(3, 0, 0);\n        width: 1400px;\n        height: 2.9rem;\n    }\n\n    @media "," {\n        h1 {\n            font-size: 1.9rem\n        }\n        .blocking {\n            height: 3.2rem;\n        }\n    }\n    \n    @media "," {\n        h1 {\n            font-size: 1.4rem\n        }\n        .blocking {\n            height: 3.2rem;\n        }\n    }\n    @media "," {\n        h1 {\n            font-size: 1rem\n        }\n        .blocking {\n            height: 3.2rem;\n        }\n    }\n    @media "," {\n        h1 {\n            font-size: 1.05rem;\n        }\n        .blocking {\n            height: 3.3rem;\n            width: 455px;\n        }\n        h1 span {\n            display: block;\n        }\n    }\n"])),M.laptopL,M.laptop,M.tablet,M.mobileL),C=function(){var n=Object(p.useRef)(null);return Object(p.useEffect)((function(){var e,t=n.current,i=t.getContext("2d");function a(n,e,t,i,a,r){this.x=n,this.y=e,this.directionX=t,this.directionY=i,this.radius=a,this.color=r}function r(){e=[];for(var n=0;n<500;n++){var t=2.3*Math.random(),i=Math.random()*(window.innerWidth-2*t),r=Math.random()*(window.innerHeight-2*t),o=.4*Math.random()-.2,c=.4*Math.random()-.2;e.push(new a(i,r,o,c,t,"rgba(0,123,255, .7)"))}}i.canvas.width=window.innerWidth,i.canvas.height=window.innerHeight,a.prototype.draw=function(){i.beginPath(),i.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),i.fillStyle=this.color,i.fill()},a.prototype.update=function(){(this.x+this.radius>t.width||this.x-this.radius<0)&&(this.directionX=-this.directionX),(this.y+this.radius>t.height||this.y-this.radius<0)&&(this.directionY=-this.directionY),this.x+=this.directionX,this.y+=this.directionY,this.draw()},r(),function n(){requestAnimationFrame(n),i.clearRect(0,0,window.innerWidth,window.innerHeight);for(var t=0;t<e.length;t++)e[t].update()}(),window.addEventListener("resize",(function(){t.width=window.innerWidth,t.height=window.innerHeight,r()}))}),[]),Object(S.jsxs)(E,{children:[Object(S.jsx)("canvas",{ref:n,id:"canvas1"}),Object(S.jsxs)("h1",{children:["Hello, my name is Austin Cuddeback, ",Object(S.jsx)("span",{children:"and I am a Full-Stack Web Developer"})]}),Object(S.jsx)("div",{className:"blocking"})]})},L=t(15),A=w.b.li(a||(a=Object(f.a)(["\n\n    .selected {\n        box-shadow: 2px 2px 15px 1px blue;\n        transition: 1s;\n    }\n\n    a {\n        font-family: Neon;\n        &:hover {\n            box-shadow: 2px 2px 15px 1px blue;\n            transition: 1s;\n        }\n    }\n\n    nav ul li a {\n        padding: 10px 30px;\n        font-size: 1.55rem;\n    }\n\n\n    @media "," {\n        nav ul li a {\n            font-size: 1rem;\n            padding: 10px 15px;\n        }\n    }\n    @media "," {\n        nav ul li a {\n            font-size: .5rem;\n            padding: 10px 15px;\n        }\n    }\n    @media "," {\n        nav ul li a {\n            font-size: .4rem;\n            padding: 10px 15px;\n        }\n    }\n"])),M.tablet,M.mobileL,M.mobileM),P=function(n){var e=n.navElement,t=n.navElements,i=n.setNavElements,a=n.id;return Object(S.jsx)(A,{children:Object(S.jsxs)(j.b,{to:"/".concat(e.href),className:"red-border ".concat(e.selected?"selected":""),onClick:function(){var n=t.map((function(n){return n.id===a?Object(L.a)(Object(L.a)({},n),{},{selected:!0}):Object(L.a)(Object(L.a)({},n),{},{selected:!1})}));i(n)},children:[e.name," "]})})},_=w.b.header(r||(r=Object(f.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 30px 30px;\n    z-index: -1;\n\n    h1 {\n        border: 2px solid blue;\n        padding-top: 5px;\n        padding-left: 3px;\n        border-radius: 5px;\n        font-size: 55px;\n        text-shadow: 1px 1px blue;\n        animation: headGlow 5s 3.6s;\n        box-shadow: 2px 2px 15px 1px blue;\n        font-family: Neon;\n    }\n\n    ul {\n        margin-top: 23px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n        align-items: center;\n        list-style: none\n    }\n\n    a {\n        font-family: Neon;\n        &:hover {\n            box-shadow: 2px 2px 15px 1px blue;\n            transition: 1s;\n        }\n    }\n\n    nav ul li a {\n        padding: 10px 30px;\n        font-size: 1.55rem;\n    }\n\n    @media "," {\n        flex-direction: column;\n        align-items: center;\n    }\n    @media "," {\n        h1 {\n            font-size: 40px;\n        }\n        nav ul li {\n            margin-top: 1.5rem;\n        }\n        nav ul li a {\n            font-size: 1.2rem;\n            padding: 10px 15px;\n        }\n        ul {\n            flex-direction: column;\n            \n        }\n        nav {\n            align-self: flex-start\n        }\n    }\n    @media "," {\n        h1 {\n            font-size: 35px;\n        }\n        nav ul li a {\n            font-size: 1rem;\n            padding: 10px 15px;\n        }\n    }\n    @media "," {\n        \n        nav ul li a {\n            font-size: .8rem;\n            padding: 10px 15px;\n        }\n    }\n"])),M.laptop,M.tablet,M.mobileL,M.mobileM),H=function(n){var e=n.navElements,t=n.setNavElements;return Object(S.jsxs)(_,{children:[Object(S.jsx)("h1",{children:Object(S.jsx)(j.b,{to:"/react-portfolio-ucf",children:"AustinWebDev"})}),Object(S.jsx)("nav",{children:Object(S.jsx)("ul",{children:e.map((function(n){return Object(S.jsx)(P,{navElement:n,navElements:e,setNavElements:t,id:n.id},n.id)}))})})]})},I=t.p+"static/media/Austin's-Resume.ab3d7f57.pdf",D=t(28),F=t(29),R=w.b.section(o||(o=Object(f.a)(["\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 70vh;\n\n    .download-button-wrapper {\n        width: 100%;\n        align-self: center;\n        margin-left: 4rem;\n    }\n    .front-end {\n        margin-bottom: 1rem;\n    }\n\n    .front-end,\n    .back-end {\n        font-size: 1rem;\n    }\n\n    h3 {\n        text-align: center;\n        margin-top: 1rem;\n    }\n\n    form {\n        display: flex;\n        justify-content: center;\n        margin-top: 1rem;\n    }\n\n    img {\n        border-radius: 5px;\n        transition: all 0.5s ease-in-out;\n        height: 500px;\n        &:hover {\n            box-shadow: 2px 2px 15px 2px blue;\n            transition: 1s;\n        }\n    }\n\n    @media "," {\n        .about-content-wrapper {\n            width: 70%;\n        }\n        img{\n            height: 400px;\n        }\n    }\n    @media "," {\n        .about-content-wrapper {\n            width: 80%;\n        }\n        img{\n            height: 300px;\n        }\n    }\n    @media "," {\n        .about-content-wrapper {\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        img {\n            height: 350px;\n        }\n        .download-button-wrapper {\n            margin-left: 0;\n        }\n    }\n    @media "," {\n       h3 {\n           font-size: 1rem;\n       }\n    }\n"])),M.laptopL,M.laptop,M.tablet,M.mobileM),T=function(){return Object(S.jsxs)(R,{id:"resume",children:[Object(S.jsx)("h3",{children:"My skills:"}),Object(S.jsx)("br",{}),Object(S.jsxs)("ul",{children:[Object(S.jsxs)("h3",{className:"front-end",children:[" ",Object(S.jsxs)("p",{children:[" ",Object(S.jsx)("u",{children:" Front End Technologies "})]})," ",Object(S.jsx)("br",{})," HTML5 | CSS | Javascript | jQuery | Bootstrap | GSAP | Animations | Handlebars | React.js | Styled Components | React Hooks"]}),Object(S.jsxs)("h3",{className:"back-end",children:[Object(S.jsxs)("p",{children:[" ",Object(S.jsx)("u",{children:" Back End Technologies "})]})," ",Object(S.jsx)("br",{})," Node.js | Express.js | Stripe.js | API's | MySQL | SQLite3 | Sequelize | bcrypt | cookies | express-session | dotenv"]})]}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"",children:Object(S.jsx)("h3",{children:"Click to download my resume!"})}),Object(S.jsx)("form",{method:"get",action:I,target:"_blank",className:"download-button-container",children:Object(S.jsxs)("button",{className:"btn",children:[Object(S.jsx)(D.a,{icon:F.a}),"   Download"]})})]})},W=t.p+"static/media/Head-shot.3d655374.jpg",Y=w.b.section(c||(c=Object(f.a)(["\n\n    .about-content-wrapper {\n        display: flex;\n        width:50%;\n        margin: 0 auto;\n    }\n\n    h3 {\n        text-align: center;\n        margin-top: 1rem;\n    }\n\n    img {\n        border-radius: 5px;\n        transition: all 0.5s ease-in-out;\n        height: 500px;\n        &:hover {\n            box-shadow: 2px 2px 15px 2px blue;\n            transition: 1s;\n        }\n    }\n\n    @media "," {\n        .about-content-wrapper {\n            width: 70%;\n        }\n        img{\n            height: 400px;\n        }\n    }\n    @media "," {\n        .about-content-wrapper {\n            width: 80%;\n        }\n        img{\n            height: 300px;\n        }\n    }\n    @media "," {\n        .about-content-wrapper {\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        img {\n            height: 350px;\n        }\n    }\n    @media "," {\n       h3 {\n           font-size: 1rem;\n       }\n    }\n"])),M.laptopL,M.laptop,M.tablet,M.mobileM),B=function(){return Object(S.jsxs)(Y,{id:"about",children:[Object(S.jsx)("div",{className:"title-flex",children:Object(S.jsx)("h2",{className:"main-titles",children:"About Me"})}),Object(S.jsx)("article",{children:Object(S.jsxs)("div",{className:"about-content-wrapper row",children:[Object(S.jsx)("div",{className:"img",children:Object(S.jsx)("img",{src:W,alt:"Austin Cuddeback sitting on a bench",className:"float-right img-responsive"})}),Object(S.jsxs)("div",{className:"download-button-wrapper text-center",children:[Object(S.jsx)("h3",{children:"Hello, my name is Austin Cuddeback and I am a full-stack web developer with many years of problem solving experience. I have a background in management which has taught me how to be an excellent problem solver and natural leader. I am looking to bring my knowledge, communication, and technical skills to add value to an organization while focusing on continuous learning and engaging in my community to give back in the field of web development."}),Object(S.jsx)("br",{})]})]})})]})},q=t.p+"static/media/dev-connect.1b1356d1.png",Q=t.p+"static/media/home-img-prev.f260ed59.png",X=t.p+"static/media/budget-app.404d17fc.png",J=t.p+"static/media/explore-outdoors.77e1eda7.png",G=t.p+"static/media/days.d0ecb7e6.png",U=t.p+"static/media/beat-maker.e6ce0839.png",K=t.p+"static/media/note-taker.1432e0d0.png",V=w.b.section(s||(s=Object(f.a)(["\n    .grid-wrapper {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n    }\n    .grid-content {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-template-rows: 400px repeat(2, 200px);\n        width: 75%;\n        justify-items: center;\n        grid-gap: 30px;\n    }\n    .works {\n        display: flex;\n        align-items: flex-end;\n        text-decoration: none;\n        box-shadow: 2px 2px 15px 2px blue;\n    }\n    .works div p {\n        font-size: 20px;\n        text-decoration: none;\n        color: var(--neon-blue);\n        background-color: var(--background);\n        padding: 10px;\n        border-radius: 5px;\n    }\n    .main-work div p {\n        color: var(--neon-blue);\n        font-size: 30px;\n        width: 100%;\n    } \n    .main-work {\n        width: 100%;\n        grid-column: 1 / span 3;\n        background-image: url(",");\n        background-size: cover;\n    }  \n    .sub-work1,\n    .sub-work2,\n    .sub-work3,\n    .sub-work4,\n    .sub-work5,\n    .sub-work6 {\n        background-size: cover;\n        width: 70%;\n    }\n    .sub-work2,\n    .sub-work3,\n    .sub-work4,\n    .sub-work5 {\n        background-position: center;\n    }\n\n    .sub-work1 {\n        background-image: url(",");\n        background-position: top;\n    }\n    .sub-work2 {\n        background-image: url(",");\n    }\n    .sub-work3 {\n        background-image: url(",");\n    }\n    .sub-work4 {\n        background-image: url(",");\n    }\n    .sub-work5 {\n        background-image: url(",");\n    }\n    .sub-work6 {\n        background-image: url(",");\n        background-position: unset;\n    }\n\n    @media "," {\n        .grid-content {\n            grid-template: 300px repeat(6, 250px) / 1fr;\n            grid-gap: 20px;\n        }\n        .main-work div p {\n            font-size: 20px;\n            width: 100%;\n        }\n        .main-work {\n            background-position: inherit;\n        }\n\n        .sub-work1,\n        .sub-work2,\n        .sub-work3,\n        .sub-work4,\n        .sub-work5,\n        .sub-work6 {\n            width: 100%;\n            grid-column: 1 / span 3;\n            background-size: cover;\n        }\n        \n        .sub-work3,\n        .sub-work4,\n        .sub-work5,\n        .sub-work6 {\n            background-position: center;\n        }\n        .sub-work1 {\n            background-position: top;\n        }\n    }\n"])),q,Q,X,J,G,U,K,M.laptop),Z=function(){return Object(S.jsx)(V,{id:"work",children:Object(S.jsxs)("article",{children:[Object(S.jsx)("div",{className:"title-flex",children:Object(S.jsx)("h2",{className:"main-titles",children:"My Work"})}),Object(S.jsx)("div",{className:"grid-wrapper",children:Object(S.jsxs)("div",{className:"grid-content",children:[Object(S.jsx)("a",{href:"https://dev-connect-ac.herokuapp.com/",target:"_blank",className:"works main-work",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"Coding-Quiz",children:"Dev Connect"})})}),Object(S.jsx)("a",{href:"https://www.hernandoreptile.org/",target:"_blank",className:"works sub-work1",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{children:"Hernando Reptile"})})}),Object(S.jsx)("a",{href:"https://budget-application-1999.herokuapp.com/",target:"_blank",className:"works sub-work2",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"comingSoonP",children:"Budget App"})})}),Object(S.jsx)("a",{href:"https://ajcuddeback.github.io/Explore-Outdoors/",target:"_blank",className:"works sub-work3",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"weatherAppP",children:"Explore Outdoors"})})}),Object(S.jsx)("a",{href:"https://ajcuddeback.github.io/days/",target:"_blank",className:"works sub-work4",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"comingSoonP",children:"Days."})})}),Object(S.jsx)("a",{href:"https://ajcuddeback.github.io/beat-maker/",target:"_blank",className:"works sub-work5",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"comingSoonP",children:"Beat Maker"})})}),Object(S.jsx)("a",{href:"https://vast-atoll-67249.herokuapp.com/",target:"_blank",className:"works sub-work6",rel:"noreferrer",children:Object(S.jsx)("div",{children:Object(S.jsx)("p",{className:"comingSoonP",children:"Note Taker"})})})]})})]})})},$=w.b.section(d||(d=Object(f.a)(['\n    .contact-wrapper {\n        width: 100%;\n        text-align: center;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    input[type="text"],\n    textarea {\n        width: 1000px;\n        padding: 12px 20px;\n        margin: 8px 0;\n        display: block;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        box-sizing: border-box;\n    }\n    button[type="submit"] {\n        width: 1000px;\n        background-color: blue;\n        color: white;\n        padding: 14px 20px;\n        margin: 8px 0;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n    }\n\n    @media ',' {\n        input[type="text"],\n        textarea {\n            width: 700px;\n        }\n        button[type="submit"] {\n            width: 700px;\n        }\n    }\n    @media ',' {\n        input[type="text"],\n        textarea {\n            width: 400px;\n        }\n        button[type="submit"] {\n            width: 400px;\n        }\n    }\n    @media ',' {\n        input[type="text"],\n        textarea {\n            width: 300px;\n        }\n        button[type="submit"] {\n            width: 300px;\n        }\n    }\n    \n'])),M.laptop,M.tablet,M.mobileL),nn=function(){return Object(S.jsxs)($,{id:"contact",children:[Object(S.jsx)("div",{className:"title-flex",children:Object(S.jsx)("h2",{className:"main-titles",children:"Contact Me"})}),Object(S.jsxs)("div",{className:"contact-wrapper",children:[Object(S.jsxs)("form",{action:"https://formspree.io/f/mvovqazn",target:"_blank",method:"POST",children:[Object(S.jsxs)("label",{children:["Your email:",Object(S.jsx)("input",{type:"text",name:"_replyto",required:!0})]}),Object(S.jsxs)("label",{children:["Your message:",Object(S.jsx)("textarea",{name:"message",required:!0})]}),Object(S.jsx)("button",{type:"submit",children:"Send"})]}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("h2",{children:"You can also reach me at:"}),Object(S.jsx)("h3",{children:"Phone: (863) 245-3982"}),Object(S.jsx)("h3",{children:"Email: ajcuddeback@gmail.com"})]})]})},en=t.p+"static/media/github.7823ada9.svg",tn=t.p+"static/media/linkedin.375e7685.svg",an=t.p+"static/media/twitter.cfe8fb17.svg",rn=w.b.footer(l||(l=Object(f.a)(["\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding: 30px;\n    border-top: 5px solid blue;\n    margin-top: 20px;\n    \n    .top-footer-content {\n        margin-bottom: 10px;\n    }\n    .top-footer-content a {\n        margin-right: 7px;\n    }\n    p {\n        font-size: 25px;\n    }\n"]))),on=function(){return Object(S.jsxs)(rn,{children:[Object(S.jsxs)("div",{className:"top-footer-content",children:[Object(S.jsx)("a",{href:"https://github.com/ajcuddeback",target:"_blank",rel:"noreferrer",children:Object(S.jsx)("img",{src:en,alt:""})}),Object(S.jsx)("a",{href:"https://www.linkedin.com/in/austin-cuddeback-b3aba7197/",target:"_blank",rel:"noreferrer",children:Object(S.jsx)("img",{src:tn,alt:""})}),Object(S.jsx)("a",{href:"https://twitter.com/AustinCuddeback",target:"_blank",rel:"noreferrer",children:Object(S.jsx)("img",{src:an,alt:""})})]}),Object(S.jsx)("div",{className:"left-side-footer",children:Object(S.jsx)("p",{children:"Designed and Made by Austin Cuddeback"})})]})},cn=Object(w.a)(b||(b=Object(f.a)(["\n    \n\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        scroll-behavior: smooth;\n        overflow-x: hidden !important;\n    }\n\n    :root {\n        --background: rgb(3,0,0);\n        --silver: #c5c6c7;\n        --neon-blue: #43d3fe;\n    }\n\n    body {\n        background-color: var(--background);\n        color: var(--neon-blue);\n    }\n    \n    a {\n        text-decoration: none;\n        color: #43d3fe;\n    }\n    .red-border {\n        border-right: 1px solid blue;\n    }\n\n    .title-flex {\n        display: flex;\n        justify-content: center;\n    }\n\n    .main-titles {\n        font-size: 3rem;\n        width: 20%;\n        text-align: center;\n        margin-top: 150px;\n        margin-bottom: 20px;\n        border-bottom: 1px solid blue;\n    }\n    .btn {\n        background-color: blue;\n        padding: .7rem;\n        border-style: none;\n        border-radius: 5px;\n        cursor: pointer;\n        width: 150px;\n    }\n    @media "," {\n       .main-titles {\n           width: 40%;\n       }\n    }\n    @media "," {\n       .main-titles {\n           width: 50%;\n       }\n    }\n    @media "," {\n       .main-titles {\n           width: 60%;\n       }\n    }\n    @media "," {\n       .main-titles {\n           width: 70%;\n       }\n    }\n"])),M.laptop,M.tablet,M.mobileL,M.mobileM),sn=t(44);var dn=function(){return[{href:"about",name:"About Me",id:Object(sn.a)(),selected:!0},{href:"works",name:"Portfolio",id:Object(sn.a)(),selected:!1},{href:"contact",name:"Contact",id:Object(sn.a)(),selected:!1},{href:"resume",name:"Resume",id:Object(sn.a)(),selected:!1}]};var ln=function(){var n=Object(p.useState)(dn()),e=Object(u.a)(n,2),t=e[0],i=e[1];return Object(S.jsx)(j.a,{children:Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(C,{}),Object(S.jsx)(cn,{}),Object(S.jsx)(H,{navElements:t,setNavElements:i}),Object(S.jsxs)(g.c,{children:[Object(S.jsx)(g.a,{exact:!0,path:"/react-portfolio-ucf",component:B}),Object(S.jsx)(g.a,{exact:!0,path:"/react-portfolio-ucf/about",component:B}),Object(S.jsx)(g.a,{exact:!0,path:"/react-portfolio-ucf/works",component:Z}),Object(S.jsx)(g.a,{exact:!0,path:"/react-portfolio-ucf/contact",component:nn}),Object(S.jsx)(g.a,{exact:!0,path:"/react-portfolio-ucf/resume",component:T})]}),Object(S.jsx)(on,{})]})})},bn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};m.a.render(Object(S.jsx)(h.a.StrictMode,{children:Object(S.jsx)(ln,{})}),document.getElementById("root")),bn()}},[[42,1,2]]]);
//# sourceMappingURL=main.465d561a.chunk.js.map