import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
    margin: 0;
    padding: 0;
}

html {
    font-size: 62.5%;

    --color-white: rgba(255,255,255);
    --color-blue-dark: #1D2A73;
    --color-blue-medium: #4856DF;
    --color-blue-cyan: #3EC1F3;
    --color-cotton-candy: #FFB7D5;
    --color-red-orange: #CA7358;
    --color-yellow-warm: #FFBE21;
    --color-beige: #F5EBDD;
    --color-brown-light:#EDD4D0;
    --color-brown-med:#DBAFA8;
    --color-brown-med2:#95645D;
    --color-brown-dark:#522F29;
    --color-green-mint:#D2DDD0;
    --color-grey-light:#F3F3F3;
    --color-turquoise:#3EF3E8;
    --color-pink:#EB42C6;
    --color-salmon:#FFB1A0;
    --color-yellow-light:#F5FFA0;

    /* --color-white: rgba(255,255,255);
    --color-blue-dark: rgb(29, 42, 115);
    --color-blue-medium: rgb(72, 86, 223);
    --color-blue-cyan: rgb(62, 193, 243);
    --color-cotton-candy: rgb(255, 183, 213);
    --color-red-orange: rgb(202, 115, 88);
    --color-yellow-warm: rgb(255, 190, 33);
    --color-beige: rgb(245, 235, 221);
    --color-brown-light:rgb(237, 212, 208);
    --color-brown-med:rgb(219, 175, 168);
    --color-brown-med2:rgb(149, 100, 93);
    --color-brown-dark:rgb(82, 47, 41);
    --color-green-mint:rgb(210, 221, 208);
    --color-grey-light:#rgb(243, 243, 243);
    --color-turquoise:rgb(62, 243, 232);
    --color-pink:rgb(235, 66, 198);
    --color-salmon:rgb(255, 177, 160);
    --color-yellow-light:rgb(245, 255, 160); */

    /* --gradient-blue:linear-gradient(261.83deg, var(--color-turquoise) 6.65%, var(--color-white, 0) 89.06%, var(--color-blue-dark));
    --gradient-yellow-turq:linear-gradient(261.83deg, var(--color-turquoise) 3.86%, var(--color-white, 0) 89.06%, var(--color-yellow-light));
    --gradient-pink:linear-gradient(261.83deg, var(--color-pink) 7.62%, var(--color-white, 0) 89.06%, var(--color-salmon));
    --gradient-yellow-pink:linear-gradient(261.83deg, var(--color-pink) 7.62%, var(--color-white, 0) 89.06%, var(--color-yellow-warm));
    --gradient-purple-rose:linear-gradient(261.83deg, var(--color-cotton-candy) 6.65%, var(--color-white, 0) 89.06%, var(--color-blue-dark));
    --gradient-yellow-rose: linear-gradient(261.83deg, var(--color-cotton-candy) 22.27%, var(--color-white, 0) 89.6%, var(--color-yellow-warm)); */
    
        --gradient-blue:linear-gradient(261.83deg, #3EF3E8 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
        --gradient-yellow-turq:linear-gradient(261.83deg, #3EF3E8 3.86%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #F5FFA0, #F5FFA0);
        --gradient-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFB1A0, #FFB1A0);
        --gradient-yellow-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFBE21, #FFBE21);
        --gradient-purple-rose:linear-gradient(261.83deg, #FFB7D5 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
        --gradient-yellow-rose:linear-gradient(261.83deg, #FFB7D5 22.27%, rgba(255, 255, 255, 0) 89.6%),linear-gradient(0deg, #FFBE21, #FFBE21);
}

body {
    box-sizing: border-box;
    background-image: var(--color-white);
    color: var(--color-blue-dark); 
    font-family: Montserrat, sans-serif;
}

h1 {
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 700;
    line-height:4.4rem;
}

h2 {
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    line-height:2.9rem;
}

h3 {
    font-size: 1.8rem;
    font-style:normal;
    font-weight: 700;
    line-height:2.2rem;
}

p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
}

a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
}


`;

export default GlobalStyles;
