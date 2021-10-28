import styled from 'styled-components';

export const PageContent = styled.div`
  --circle-width: 70vw;
  --header-height: 6.4rem;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  overflow: hidden;
  position: relative;

  .circles,
  .circles span {
    position: absolute;
  }

  .circles {
    width: var(--circle-width);
    height: var(--circle-width);
    top: calc(100vh - var(--circle-width));
    left: calc(100% - 33vw);
  }

  .circles span {
    display: block;
    border: 1px solid var(--color-1);
    border-radius: 50%;
    opacity: 0.1;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }

  .circles span:nth-child(1) {
    height: 100%;
    width: 100%;
  }
  .circles span:nth-child(2) {
    height: 80%;
    width: 80%;
  }
  .circles span:nth-child(3) {
    height: 60%;
    width: 60%;
  }
  .circles span:nth-child(4) {
    height: 40%;
    width: 40%;
  }
  .circles span:nth-child(5) {
    height: 20%;
    width: 20%;
  }

  .ss-preload .s-pagewrap {
    visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .circles {
      top: calc(var(--header-height) + 5vh);
    }
  }
`;

export const MainContent = styled.main`
  .s-intro {
    --gutter: 6rem;
    --text-huge-multiplier: 1;
    position: relative;
  }

  .intro-content {
    min-height: calc(25.5 * var(--space));
    justify-content: center;
    align-items: center;
    padding-top: calc(16vh + var(--header-height));
    padding-bottom: var(--vspace-3);
  }

  .intro-content .text-huge-title {
    font-size: calc(var(--text-huge) * var(--text-huge-multiplier));
    padding-right: 5vw;
  }

  .intro-social {
    z-index: 1;
    list-style: none;
    display: flex;
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin: 0;
    padding: 0 0 0 9.6rem;
    transform: rotate(-90deg) translateX(-50%);
    transform-origin: left bottom;
    position: absolute;
    top: 50%;
    left: calc(100% - 6rem);
  }

  .intro-social li {
    padding: 0 1.2rem;
  }

  .intro-social a {
    color: var(--color-text-light);
  }

  .intro-social a:focus,
  .intro-social a:hover {
    color: var(--color-white);
  }

  .intro-scrolldown {
    /* display: block; */
    height: var(--vspace-1);
    width: var(--vspace-1);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 4.8rem;
    right: 5.8rem;
  }

  .intro-scrolldown svg {
    height: var(--vspace-0_75);
    width: var(--vspace-0_75);
  }

  .intro-scrolldown svg path {
    fill: var(--color-white);
    transition: all 0.3s ease-in-out;
  }

  .intro-scrolldown:focus svg path,
  .intro-scrolldown:hover svg path {
    fill: var(--color-1);
  }

  @media screen and (max-width: 1600px) {
    .s-intro {
      --text-huge-multiplier: 0.92;
    }
  }

  @media screen and (max-width: 1200px) {
    .s-intro {
      --text-huge-multiplier: 0.85;
    }

    .intro-social {
      left: calc(100% - 4rem);
    }

    .intro-scrolldown {
      right: 4rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .s-intro {
      --text-huge-multiplier: 0.8;
    }

    .intro-content {
      padding-top: calc(14vh + var(--header-height));
    }
  }

  @media screen and (max-width: 900px) {
    .s-intro {
      --text-huge-multiplier: 0.75;
    }

    .intro-content .text-huge-title br {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    .s-intro {
      --gutter: 4rem;
      --text-huge-multiplier: 0.7;
    }

    .intro-content {
      min-height: 0;
      align-items: flex-start;
      padding-top: calc(9.6rem + var(--header-height));
    }

    .intro-content .text-huge-multiplier {
      padding-right: 0;
      margin-bottom: var(--vspace-1_5);
    }

    .intro-social {
      width: 100%auto;
      flex-wrap: wrap;
      padding-left: 0;
      padding-right: 8rem;
      transform: none;
      position: relative;
      left: var(--gutter);
    }

    .intro-social li {
      padding: 0 0.6rem;
    }
  }

  @media screen and (max-width: 600px) {
    .s-intro {
      --gutter: 2rem;
      --text-hug-multiplier: 0.58;
    }

    .intro-scrolldown {
      right: 2.4rem;
    }
  }

  @media screen and (max-width: 500px) {
    .s-intro {
      --text-huge-multiplier: 0.55;
    }

    .intro-social {
      left: 1.4rem;
    }
  }

  @media screen and (max-width: 400px) {
    .intro-content .text-huge-title {
      font-size: var(--text-display-1);
      line-height: var(--vspace-2);
    }

    .intro-social {
      left: 0;
    }
  }

  @media screen and (max-width: 350px) {
    .intro-social {
      display: none;
    }
  }

  .row {
    width: 92%;
    max-width: var(--width-grid-max);
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
  }

  .column {
    display: block;
    flex: 1 1 0%;
    padding: 0 var(--gutter);
  }

  .wide {
    max-width: var(--width-wide);
  }

  .text-pretitle {
    font-family: var(--font-1);
    font-size: var(--text-sm);
    font-weight: 400;
    color: var(--color-white);
    text-transform: uppercase;
    letter-spacing: 0.3em;
    margin-top: 0;
    margin-left: 0.2rem;
    margin-bottom: var(--vspace-0_5);
    position: relative;
  }

  .text-pretitle.with-line {
    color: var(--color-1);
    padding-left: 6rem;
    transform: translateX(-6rem);
  }

  .text-pretitle.with-line::before {
    content: '';
    display: block;
    height: 1px;
    width: 4rem;
    background-color: rgba(255, 255, 255, 0.5);
    position: absolute;
    top: 50%;
    left: 0;
  }

  .text-huge-title {
    --text-huge: 10.8rem;
    font-size: var(--text-huge);
    line-height: 1.074;
    margin-top: 0;
  }

  // About section container
  .s-about {
    padding-top: var(--vspace-4);
    padding-bottom: var(--vspace-3);
  }

  // Pic and about container
  .about-info {
    --gutter: 0;
    width: 100%;
    align-items: center;
  }

  // Pic container
  .about-info__pic {
    object-fit: cover;
    margin: 0;
    vertical-align: bottom;
  }

  // Description text container
  .about-info__text {
    padding: var(--vspace-3_5) 10vw var(--vspace-2) 0;
    margin-left: -4rem;
  }

  .about-info__text .text-pretitle {
    margin-bottom: var(--vspace-1);
  }

  .about-info__text .btn {
    margin-top: var(--vspace-1);
    margin-bottom: 0;
  }

  .btn {
    margin-bottom: var(--vspace-0_5);

    --btn-height: var(--vspace-btn);
    display: inline-block;
    font-family: var(--font-1);
    font-weight: 600;
    font-size: var(--text-xs);
    text-transform: uppercase;
    letter-spacing: 0.35em;
    height: var(--btn-height);
    line-height: calc(var(--btn-height) - 2px);
    padding: 0 3.6rem;
    margin: 0 0.4rem var(--vspace-0_5) 0;
    color: var(--color-btn-text);
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.3s;
    background-color: var(--color-btn);
    border: 1px solid var(--color-btn);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .btn:focus,
  .btn:hover {
    background-color: var(--color-btn-hover);
    border-color: var(--color-btn-hover);
    color: var(--color-btn-hover-text);
    outline: 0;
  }

  .btn.u-fullwidth {
    width: 100%;
    margin-right: 0;
  }

  .btn--medium {
    --btn-height: calc(var(--vspace-btn) + 0.8rem);
  }

  .attention-getter {
    font-family: var(--font-1);
    font-weight: 300;
    font-size: var(--text-md);
    line-height: var(--vspace-1_25);
    color: var(--color-text-dark);
  }
`;
