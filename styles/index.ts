import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /*
  ** ## spacing and typescale
  */
 :root {
    // spacing
    // base font size: 19px
    // vertical space unit : 32px

    --base-size      : 62.5%;
    --multiplier     : 1;
    --base-font-size : calc(1.9rem * var(--multiplier));
    --space          : calc(3.2rem * var(--multiplier));

    /* vertical spacing
      */
    --vspace-0_125 : calc(0.125 * var(--space));
    --vspace-0_25  : calc(0.25 * var(--space));
    --vspace-0_375 : calc(0.375 * var(--space));
    --vspace-0_5   : calc(0.5 * var(--space));
    --vspace-0_625 : calc(0.625 * var(--space));
    --vspace-0_75  : calc(0.75 * var(--space));
    --vspace-0_875 : calc(0.875 * var(--space));
    --vspace-1     : calc(var(--space));
    --vspace-1_25  : calc(1.25 * var(--space));
    --vspace-1_5   : calc(1.5 * var(--space));
    --vspace-1_75  : calc(1.75 * var(--space));
    --vspace-2     : calc(2 * var(--space));
    --vspace-2_5   : calc(2.5 * var(--space));
    --vspace-3     : calc(3 * var(--space));
    --vspace-3_5   : calc(3.5 * var(--space));
    --vspace-4     : calc(4 * var(--space));
    --vspace-4_5   : calc(4.5 * var(--space));
    --vspace-5     : calc(5 * var(--space));
 }



  /* ---------------------------------------------------------
  ** ## colors
  * ---------------------------------------------------------*/
  :root {
    --primary-background-color: #141516;

    --color-1 : hsla(36, 72%, 70%, 1);
    --color-2 : hsla(168, 62%, 36%, 1);

    /* shades
     * generated using
     * Tint & Shade Generator
     * (https://maketintsandshades.com/)
     */
    --color-black   : #000000;
    --color-gray-19 : #020202;
    --color-gray-18 : #040404;
    --color-gray-17 : #060607;
    --color-gray-16 : #080809;
    --color-gray-15 : #0a0b0b;
    --color-gray-14 : #0c0d0d;
    --color-gray-13 : #0e0f0f;
    --color-gray-12 : #101112;
    --color-gray-11 : #121314;
    --color-gray-10 : #141516;
    --color-gray-9  : #2c2c2d;
    --color-gray-8  : #434445;
    --color-gray-7  : #5b5b5c;
    --color-gray-6  : #727373;
    --color-gray-5  : #8a8a8b;
    --color-gray-4  : #a1a1a2;
    --color-gray-3  : #b9b9b9;
    --color-gray-2  : #d0d0d0;
    --color-gray-1  : #e8e8e8;
    --color-white   : #ffffff;

    // preloader-colors
    --color-preloader-b : var(--color-gray-10);
    --color-loader      : var(--color-white);
    --color-loader-light: rgba(255,255,255, 0.1);

    // others colors
    --color-body: var(--color-gray-10);
  }

  *, html, body, #__next {
    margin: 0;
    padding: 0;
    outline: none !important;
  }

  body {
    font-smooth: antialiased;
    background-color: var(--primary-background-color);
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
