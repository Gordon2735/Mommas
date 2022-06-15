'use strict';

const home_sharedStyles = {};

// home_sharedStyles.err = `
//     html {
//         background: hsl(350, 100%, 88%);
//     }

//     body {
//         width: 100%;
//         min-height: 100vh;
//     }
// `;

// home_sharedStyles.global = `
//     @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');

//     :root {
//         --bg-primary-clr: hsl(350, 100%, 88%);
//         --ff-title: 'Tangerine', cursive;
//         --fc-primary-clr: hsl(350, 100%, 94%);
//         --fc-secondary-clr: hsl(350, 100%, 70%);
//         --fc-tertiary-clr: hsl(350, 100%, 50%);
//         --fc-quaternary-clr: hsl(350, 100%, 30%);
//         --fw-bold: 700;
//         --fw-normal: 400;
//         --fw-light: 300;
//     }

//     html {
//         background: var(--bg-primary-clr);
//     }

//     .body {
//         width: 100%;
//         min-height: 100vh;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//     }

// `;

home_sharedStyles.homePage = `

    .title-h1 {
        margin: 15vh auto 0 auto;
        text-align: center;
        font-family: var(--ff-title);
        font-weight: var(--fw-bold);
        font-size: 11vw;
        color: var(--fc-secondary-clr);
        letter-spacing: 1.0vw ;
        text-shadow: 2px 1px 2px rgb(165, 164, 164),
                    2px 4px 6px rgba(27, 27, 27, 0.5);
    }

    .title-h4 {
        margin: 7vh 0 0 0;
        text-align: center;
        font-family: var(--ff-title);
        font-weight: var(--fw-normal);
        font-size: 8vw;
        color: var(--fc-quaternary-clr);
        letter-spacing: 0.7vw ;
        text-shadow: 2px 1px 2px rgb(165, 164, 164),
                    2px 4px 6px rgba(27, 27, 27, 0.5);
    }

    .symbol {
        margin: 0 0 0 0 ;
        text-align: center;
        position: inline-block ;
        font-size: 4vw;
    }

    .curtsy-img {
        margin: 5vh 0vw 0 2vw;
        width: 10%;
        /* min-width:110px; */
        left: 11vw;
        top: -43vh;
        position: relative;
        border-radius: 18px;
        box-shadow: 12px 9px 19px hsla(0, 0%, 4%, 0.438);
        aspect-ratio: 274 / 400;
        rotate: -5deg;
        z-index: -5;

    }

    .marys-lamb {
        margin: 5vh 0vw 0 2vw;
        width: 10%;
        right: -59vw ;
        top: -43vh;
        position: relative;
        border-radius: 18px;
        box-shadow: 12px 9px 19px hsla(0, 0%, 4%, 0.438);
        aspect-ratio: 274 / 400;
        rotate: 5deg;
        z-index: -5;
    }    

  
`;

export { home_sharedStyles };
