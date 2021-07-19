import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

export const MainContent = styled.main`
  .s-intro {
    --gutter: 6rem;
    --text-huge-multiplier: 1;
    position: relative;
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
    -webkit-letter-spacing: 0.3em;
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
    display: block;
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
`;
