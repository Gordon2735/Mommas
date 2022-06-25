'use strict';

const sidebarSharedStyles = {};

sidebarSharedStyles.err = /*css*/ `
    html {
        background: hsl(350, 100%, 88%);
    }

    body {
        width: 100%;
        min-height: 100vh;
    }

`;

sidebarSharedStyles.shell = /*css*/ `

		

`;

sidebarSharedStyles.sidebar = /*css*/ `
  
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');
    /*font-family: 'Oxygen', sans-serif;*/

  body {
        margin: 0;
      }
      
      *, *::before, *::after {
        box-sizing: border-box;
      }
  
  :root {
    --accent-color: rgb(204, 0, 0);
    --lightest-gray: rgb(244, 244, 244);
    --light-gray: rgb(144, 144, 144);
    --medium-gray: rgb(96, 96, 96);
    --dark-gray: rgb(13, 13, 13);
	  --highlight-blue: rgb(130, 208, 253);
    --bg-primary-clr: hsl(350, 100%, 88%);
    --bg-sidebar-clr: hsla(350, 100%, 30%, 0.089);
    --dark-shadow-gray: rgba(46, 1, 1, 0.641);
	  --hr-shadow-clr: rgba(13, 13, 13, 0.173);
	  --summer-shadow: rgba(13, 13, 13, 0.726);	  
    --ff-title: 'Tangerine', cursive;
	  --ff-oxygen: 'Oxygen', sans-serif;
    --fc-primary-clr: hsl(350, 100%, 94%);
    --fc-secondary-clr: hsl(350, 100%, 70%);
    --fc-tertiary-clr: hsl(350, 100%, 50%);
    --fc-quaternary-clr: hsl(350, 100%, 30%);
    --header-height: 40px;
    --animation-duration: 200ms;
    --animation-timing-curve: ease-in-out;
  }
  
  .header {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: grey;
    box-shadow: 0 1px 10px 0 rgba(0, 0, 0, .4);
    padding: 0 .5rem;
    height: var(--header-height);
  }
  
  .menu-icon-btn {
    background: none;
    border: none;
    padding: 0;
  }
  
  .menu-icon {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  
  .menu-icon:hover {
    fill: var(--fc-primary-clr);
  }
  
  .sidebar {
    padding-top: 1rem;
    left: 0;
    top: var(--header-height);
    position: sticky;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    overflow: hidden;
    width: 75px;
    height: calc(75vh - var(--header-height));
    background-color: var(--bg-sidebar-clr);
    box-shadow: 2px 3px 4px rgba(0, 0, 0, .4);
    align-items: center;
    justify-content: stretch;
    border-right: 1px solid var(--fc-quaternary-clr);
    transition: width var(--animation-duration) var(--animation-timing-curve);
    z-index: 3;
  }
  
  .sidebar .hidden-sidebar {
    opacity: 0;
    width: 0;
    transition: opacity var(--animation-duration) var(--animation-timing-curve);
  }
  
  .sidebar.open .hidden-sidebar {
    width: 100%;
    height: auto;
    opacity: 1;

  }
  
  .sidebar .top-sidebar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .girl-chair {
    filter: drop-shadow(3px 7px 3px var(--dark-shadow-gray))
  }
  
  .sidebar .channel-logo {
    display: block;
    width: 30px;
    height: auto;
    aspect-ratio: 201 / 284;
    transition: var(--animation-duration) var(--animation-timing-curve);
  }
  
  .sidebar.open .channel-logo {
    width: 50px;
    height: auto;
    aspect-ratio: 201 / 284;
  }
  
  .sidebar .channel-logo > img {
    width: 100%;
    height: 100%;
  }
  
  .middle-sidebar {
    overflow-y: auto;
    overflow-x: hidden;
    flex-grow: 1;
    margin: 1rem 0;
  }
  
  .middle-sidebar,
  .bottom-sidebar {
    width: 100%;
  }
  
  .container {
    display: flex;
  }
  
  .content {
    margin: 1rem;
  }
  
  .sidebar-list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
  }
  
  .sidebar.open .sidebar-link {
    justify-content: flex-start;

  }
  
  .sidebar-icon {
    width: 25px;
    height: 25px;
    flex-shrink: 0;
    fill: var(--fc-quaternary-clr);
  } 
  
  .sidebar-list .hidden-sidebar {
    margin-left: 1.5rem;
    white-space: nowrap;
  }
  
  .sidebar-link {
    display: flex;
    width: 100%;
    padding: .5rem 0;
    font-family: var(--ff-oxygen);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fc-quaternary-clr);
    text-decoration: none;
    align-items: center;
    padding-left: 25px;
  } 
    
  .sidebar-link:hover  {
      color: white;     
  }
  .sidebar-link:hover  {
    color: white;
  }

  .sidebar-link:hover .sidebar-icon  {
    fill: white;   
  }
  
  .sidebar-list-item {
    position: relative;
    width: 100%;
  }

  .sidebar-list-item.active {
    fill: var(--accent-color);
  }

  .sidebar-list-item:hover {
    background-color: var(--fc-quaternary-clr);
    fill: white;
    animation: flipX 7s ease-in-out infinite;
  }   

  @keyframes flipX {
    0% {
      opacity: 1;
      transform: rotateX(0def);
    }       
    50% {
      opacity: 0.3;
      transform: rotateX(-160deg);
    }    
    100% {
      /* animate nothing to pause animation at the end */
      opacity: 1;
      transform: rotateX(160deg);
    }
  }
  
  .sidebar-list-item.active::before {
    content: "";
    background-color: var(--accent-color);
    height: 100%;
    left: 0;
    width: 3px;
    position: absolute;
  }
  
  .sidebar.open {
    width: 200px;
    border-right: 1px solid var(--fc-quaternary-clr);

  }
  
  .your-channel {
    font-family: var( --ff-title);
    color: var(--fc-quaternary-clr);
    font-size: 2.25rem;
    font-weight: bold;
    text-shadow: 2px 1px 3px var(--summer-shadow);
    margin-bottom: .15rem;
    margin-top: .5rem;
  }
  
  .channel-name {
    color: var(--dark-gray);
    font-size: .75rem;
    font-style: italic;
  }

  .hr-line {
    border-top: 0.5px solid var(--fc-quaternary-clr);
    box-shadow: 2px 0.5px 3px var(--hr-shadow-clr);

  }
  
  .sidebar .top-sidebar {
    height: 30px;
    transition: height var(--animation-duration) var(--animation-timing-curve);
  }
  
  .sidebar.open .top-sidebar {
    margin-bottom: 4vh;
    height: 125px;
  }
  
  .sidebar .top-sidebar .hidden-sidebar {
    text-align: center;
    width: 100%;
    
  }
`;

sidebarSharedStyles.home = /*css*/ `

  .home-page_shell {
    margin: -10vh 2vw 2vh 0vw;
    padding: 1vh 0 0 15vw;
    display: flex;
    position: relative;

  }

`;

export { sidebarSharedStyles };
