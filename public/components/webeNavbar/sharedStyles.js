'use strict';

const sharedStyles = {};

sharedStyles.err = `
    html {
        background: hsl(350, 100%, 88%);
    }

    body {
        width: 100%;
        min-height: 100vh;
    }
`;

sharedStyles.global = `
    
    @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');

    :root {
        --bg-primary-clr: hsl(350, 100%, 88%);
        --ff-title: 'Tangerine', cursive;
        --fc-primary-clr: hsl(350, 100%, 94%);
        --fc-secondary-clr: hsl(350, 100%, 70%);
        --fc-tertiary-clr: hsl(350, 100%, 50%);
        --fc-quaternary-clr: hsl(350, 100%, 30%);
        --fw-bold: 700;
        --fw-normal: 400;
        --fw-light: 300;
    }

    html {
        background: var(--bg-primary-clr);
    }

    .body {
        width: 100%;
        min-height: 100vh;
    }
    
    .title-h1 {
        margin: 15vh auto 0 auto;
        font-family: var(--ff-title);
        font-weight: var(--fw-bold);
        font-size: 8.4rem !important;
        color: var(--fc-secondary-clr);
        letter-spacing: 1.0vw !important;
        text-shadow: 2px 1px 2px rgb(165, 164, 164),
                    2px 4px 6px rgba(27, 27, 27, 0.5);
    }
    
    .title-h4 {
        margin: 7vh 0 0 0;
        font-family: var(--ff-title);
        font-weight: var(--fw-normal);
        font-size: 3.051rem !important;
        color: var(--fc-quaternary-clr);
        letter-spacing: 0.7vw !important;
        text-shadow: 2px 1px 2px rgb(165, 164, 164),
                    2px 4px 6px rgba(27, 27, 27, 0.5);
    }
    
    .section-sign {
        margin: 0 0 0 0 !important;
        position: inline-block !important;
        font-size: 0.9rem !important;
    }
    
    .curtsy-img {
        margin: 5vh 0vw 0 2vw;
        width: 15%;
        /* min-width:110px; */
        left: -34vw !important;
        top: -43vh;
        position: relative;
        border-radius: 18px;
        box-shadow: 12px 9px 19px hsla(0, 0%, 4%, 0.438);
        aspect-ratio: 274 / 400;
        rotate: -5deg;
    
    }
    
    .marys-lamb {
        margin: 5vh 0vw 0 2vw;
        width: 15%;
        right: -32vw !important;
        top: -43vh;
        position: relative;
        border-radius: 18px;
        box-shadow: 12px 9px 19px hsla(0, 0%, 4%, 0.438);
        aspect-ratio: 274 / 400;
        rotate: 5deg;
    
    }
`;

sharedStyles.navbar = `
    .navbar {
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        top: 0;
        width: 100%;
        min-height: 12vh;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        background-color: #333;
        color: white;
        border-radius: 0px 0px 15px 15px;
        box-shadow: 6px 3px 8px hsla(0, 0%, 2%, 0.863);
    }

    .navbar-title {
        margin: .5rem;
        position: relative;
        justify-self: center;
        font-family: var(--ff-title);
        font-size: 3.5rem;
    }

    .navbar-links {
        margin: 7vh 0 0 1vw;
        left: 2vw;
        position: relative;
        height: 100%;
        align-items: left;
    }

    .navbar-links ul {
        display: flex;
        jusify-content: space-around;
        list-style-type: none;
        spacing: 1rem;
        margin: 0;
        padding: 0;
    }

    .navbar-links li {
        list-style: none;
        display: inline-block;
        spacing: 1rem;
    }

    .navbar-links li a {
        display: block;
        text-decoration: none;
        color: white;
        padding: 1rem;
    }

    .navbar-links li:hover {
        background-color: #555;
    }

    .toggle-button {
        position: absolute;
        top: .75rem;
        left: 1rem;
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
    }

    .toggle-button .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        border-radius: 10px;
    }
    .girl-chair {
        margin: 0vh 1vw 0 9vw ;
        padding: 0 -1vw 0 0;
        top: 0.1vh;
        right: -19vw;
        width: 6.9%;
        min-width: 70.3px;
        position: relative;
        border-radius: 18px;   
        aspect-ratio: 201 / 284;
        rotate: 12deg;
    }

    @media (max-width: 800px) {
        .navbar {
            flex-direction: column;
            align-items: flex-start;
        }

        .toggle-button {
            display: flex;
        }

        .navbar-links {
            display: none;
            width: 100%;
        }

        .navbar-links ul {
            width: 100%;
            flex-direction: column;
        }

        .navbar-links ul li {
            text-align: center;
        }

        .navbar-links ul li a {
            padding: .5rem 1rem;
        }

        .navbar-links.active {
            display: flex;
        }

        .girl-chair {
            margin: 0vh 1vw 0 2vw ;
            padding: 0 -20vw 0 0;
            top: 0.1vh;
            right: -75vw;
            float: right;
            width: 6.9%;
            min-width: 70.3px;
            position: relative;
            border-radius: 18px;   
            aspect-ratio: 201 / 284;
            rotate: 12deg;
        }
    }
`;

sharedStyles.footer = `

`;

export { sharedStyles };