import styled from 'styled-components';

export const Container = styled.section`
  --gutter: 6rem;
  --text-huge-multiplier: 1;
  position: relative;

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

  @media screen and (max-width: 350px) {
    .intro-social {
      display: none;
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

  @media screen and (max-width: 500px) {
    --text-huge-multiplier: 0.55;

    .intro-social {
      left: 1.4rem;
    }
  }

  @media screen and (max-width: 600px) {
    --gutter: 2rem;
    --text-hug-multiplier: 0.58;

    .intro-scrolldown {
      right: 2.4rem;
    }
  }

  @media screen and (max-width: 800px) {
    --gutter: 4rem;
    --text-huge-multiplier: 0.7;

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

  @media screen and (max-width: 900px) {
    --text-huge-multiplier: 0.75;

    .intro-content .text-huge-title br {
      display: none;
    }
  }

  @media screen and (max-width: 1000px) {
    --text-huge-multiplier: 0.8;

    .intro-content {
      padding-top: calc(14vh + var(--header-height));
    }
  }

  @media screen and (max-width: 1200px) {
    --text-huge-multiplier: 0.85;

    .intro-social {
      left: calc(100% - 4rem);
    }

    .intro-scrolldown {
      right: 4rem;
    }
  }

  @media screen and (max-width: 1600px) {
    --text-huge-multiplier: 0.92;
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
`;
