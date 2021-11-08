import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
  --base-size      : 62.5%;
  --multiplier     : 1;
  --base-font-size : calc(1.9rem * var(--multiplier));
  --space          : calc(3.2rem * var(--multiplier));

  /* --circle-width: 70vw;
  --header-height: 6.4rem; */

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

  --text-scale-ratio : 1.2;
  --text-size        : var(--base-font-size);
  --text-xs          : calc((var(--text-size) / var(--text-scale-ratio)) / var(--text-scale-ratio));
  --text-sm          : calc(var(--text-xs) * var(--text-scale-ratio));
  --text-md          : calc(var(--text-sm) * var(--text-scale-ratio) * var(--text-scale-ratio));
  --text-lg          : calc(var(--text-md) * var(--text-scale-ratio));
  --text-xl          : calc(var(--text-lg) * var(--text-scale-ratio));
  --text-xxl         : calc(var(--text-xl) * var(--text-scale-ratio));
  --text-xxxl        : calc(var(--text-xxl) * var(--text-scale-ratio));
  --text-display-1   : calc(var(--text-xxxl) * var(--text-scale-ratio));
  --text-display-2   : calc(var(--text-display-1) * var(--text-scale-ratio));
  --text-display-3   : calc(var(--text-display-2) * var(--text-scale-ratio));

  --vspace-btn : var(--vspace-2);

  --width-full     : 100%;
  --width-max      : 1200px;
  --width-wide     : 1400px;
  --width-wider    : 1600px;
  --width-widest   : 1800px;
  --width-narrow   : 1000px;
  --width-narrower : 800px;
  --width-grid-max : var(--width-max);

  --gutter : 2rem;

  --primary-background-color: #141516;

  --color-1 : hsla(36, 72%, 70%, 1);
  --color-2 : hsla(168, 62%, 36%, 1);

  --color-1-lighter : hsla(36, 72%, 90%, 1);
  --color-1-light   : hsla(36, 72%, 80%, 1);
  --color-1-dark    : hsla(36, 72%, 60%, 1);
  --color-1-darker  : hsla(36, 72%, 50%, 1);
  --color-2-lighter : hsla(168, 62%, 56%, 1);
  --color-2-light   : hsla(168, 62%, 46%, 1);
  --color-2-dark    : hsla(168, 62%, 26%, 1);
  --color-2-darker  : hsla(168, 62%, 16%, 1);

  --color-error           : hsla(359, 100%, 91%, 1);
  --color-success         : hsla(76, 69%, 68%, 1);
  --color-info            : hsla(205, 82%, 91%, 1);
  --color-notice          : hsla(51, 100%, 80%, 1);
  --color-error-content   : hsla(359, 50%, 50%, 1);
  --color-success-content : hsla(76, 29%, 28%, 1);
  --color-info-content    : hsla(205, 32%, 31%, 1);
  --color-notice-content  : hsla(51, 30%, 30%, 1);

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

  --color-text        : var(--color-gray-4);
  --color-text-dark   : var(--color-white);
  --color-text-light  : var(--color-gray-7);
  --color-placeholder : var(--color-gray-7);

  --color-btn                    : var(--color-gray-9);
  --color-btn-text               : var(--color-1);
  --color-btn-hover              : var(--color-white);
  --color-btn-hover-text         : var(--color-black);
  --color-btn-primary            : var(--color-1-dark);
  --color-btn-primary-text       : var(--color-black);
  --color-btn-primary-hover      : var(--color-1-darker);
  --color-btn-primary-hover-text : var(--color-black);
  --color-btn-stroke             : var(--color-white);
  --color-btn-stroke-text        : var(--color-white);
  --color-btn-stroke-hover       : var(--color-white);
  --color-btn-stroke-hover-text  : var(--color-black);

  --color-preloader-b : var(--color-gray-10);
  --color-loader      : var(--color-white);
  --color-loader-light: rgba(255,255,255, 0.1);

  --color-body: var(--color-gray-10);
  --color-border  : rgba(255, 255, 255, .05);
  --border-radius : 3px;

  --font-1 : "Public Sans", sans-serif;
  --font-2 : "DM Serif Display", serif;

  // monospace

  --font-mono : Consolas, "Andale Mono", Courier, "Courier New", monospace;
}


// Mobile
@media screen and (max-width: 600px) {
  :root {
    --multiplier: 0.875;
  }
}

// Medium screen size
@media screen and (max-width: 1200px) {
  :root {
    --gutter: 1.6rem;
  }
}

.row {
  width: 92%;
  max-width: var(--width-grid-max);
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}

.wide {
  max-width: var(--width-wide);
}

[data-animate-el] {
  opacity: 0;
}

.row .row {
  width: auto;
  max-width: none;
  margin-left: calc(var(--gutter) * -1);
  margin-right: calc(var(--gutter) * -1);
}

.column {
  display: block;
  flex: 1 1 0%;
  padding: 0 var(--gutter);
}

@media screen and (max-width: 600px) {
  .row {
    width: 100%;
    padding-left: 6vw;
    padding-right: 6vw;
  }

  .row .row {
    padding-left: 0;
    padding-right: 0;
  }
}

@media screen and (max-width: 400px) {
  .row .row {
    margin-left: 0;
    margin-right: 0;
  }
}

.lg-1 {
    flex: none;
    width: 8.33333%;
}

.lg-2 {
    flex: none;
    width: 16.66667%;
}

.lg-3 {
    flex: none;
    width: 25%;
}

.lg-4 {
    flex  : none;
    width : 33.33333%;
}

.lg-5 {
    flex  : none;
    width : 41.66667%;
}

.lg-6 {
    flex: none;
    width: 50%;
}

.lg-7 {
    flex: none;
    width: 58.33333%;
}

.lg-8 {
    flex: none;
    width: 66.66667%;
}

.lg-9 {
    flex: none;
    width: 75%;
}

.lg-10 {
    flex: none;
    width: 83.33333%;
}

.lg-11 {
    flex: none;
    width: 91.66667%;
}

.lg-12 {
    flex: none;
    width: 100%;
}

@media screen and (max-width: 1200px) {
  .md-1 {
        flex  : none;
        width : 8.33333%;
    }

  .md-2 {
      flex  : none;
      width : 16.66667%;
  }

  .md-3 {
      flex  : none;
      width : 25%;
  }

  .md-4 {
      flex  : none;
      width : 33.33333%;
  }

  .md-5 {
      flex  : none;
      width : 41.66667%;
  }

  .md-6 {
      flex  : none;
      width : 50%;
  }

  .md-7 {
      flex  : none;
      width : 58.33333%;
  }

  .md-8 {
      flex  : none;
      width : 66.66667%;
  }

  .md-9 {
      flex  : none;
      width : 75%;
  }

  .md-10 {
      flex  : none;
      width : 83.33333%;
  }

  .md-11 {
      flex  : none;
      width : 91.66667%;
  }

  .md-12 {
      flex  : none;
      width : 100%;
  }
}

  *, html, body, #__next {
    margin: 0;
    padding: 0;
    outline: none !important;
  }

  html, body {
    height: 100%;
  }

  html {
    font-size: var(--base-size);
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-smooth: antialiased;
    font-family: var(--font-1);
    font-size: var(--base-font-size);
    font-weight: 300;
    color: var(--color-text);
    background-color: var(--primary-background-color);
    -webkit-overflow-scrolling: touch;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    line-height: var(--vspace-1);
  }

  button {
    cursor: pointer;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: var(--color-1);
  }

  a:focus,
  a:hover,
  a:active {
    color: var(--color-2);
  }

  a:hover,
  a:active {
    outline: 0;
  }

  div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, p, blockquote, th, td {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  h1, h2, h3, h4, h5, h6,
  .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: var(--font-2);
    font-weight: 400;
    color: var(--color-text-dark);
    font-variant-ligatures: common-ligatures;
    text-rendering: optimizeLegibility;
  }

  h1, .h1 {
    margin-top: var(--vspace-2_5);
    margin-bottom: var(--vspace-0_75);
    font-size: var(--text-display-1);
    line-height: var(--vspace-2);
    letter-spacing: -0.01em;
  }



  @media screen and (max-width: 500px) {
    h1, .h1 {
      font-size: var(--text-xxl);
      line-height: calc(1.625 * var(--space));
    }
  }

  @media screen and (max-width: 800px) {
   .mobile-menu-toggle span::before {
      top: -8px;
      transform: rotate(0deg);
      transition: transform 0.6s ease-in-out 0s, top 0.4s ease-in-out 0.6s;
    }

    .mobile-menu-toggle span::after {
      bottom: -8px;
      transform: rotate(0deg);
      transition: transform 0.6s ease-in-out 0s, bottom 0.4s ease-in-out 0.6s;
    }

    .menu-is-open .s-header {
      height: auto;
    }

    .menu-is-open .header-mobile {
      box-shadow: none;
    }

    .menu-is-open .main-nav-wrap {
      transform: scaleY(1);
      transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .menu-is-open .main-nav {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
      transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition-delay: 0.4s;
    }

  }

`;

export default GlobalStyle;
