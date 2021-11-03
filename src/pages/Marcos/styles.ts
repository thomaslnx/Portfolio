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
