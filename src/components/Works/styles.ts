import styled from 'styled-components';

export const Container = styled.section`
  padding-top: var(--vspace-5);
  padding-bottom: var(--vspace-3_5);

  .h1 {
    margin-top: 0;
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

  .folio-list {
    --item-min-height: var(--vspace-4_5);
    list-style: none;
    margin-top: var(--vspace-4);
    margin-bottom: var(--vspace-1);
    margin-left: 0;
  }

  .folio-list__item {
    margin-bottom: var(--vspace-1);
    position: relative;
  }

  .folio-list__item-link {
    display: block;
    width: 100%;
    padding-left: calc(5.5 * var(--space));
    color: var(--color-white);
    transition-duration: 0.5s;
    position: relative;
  }

  .folio-list__item-link:focus,
  .folio-list__item-link:hover {
    color: var(--color-1);
    outline: 0;
  }

  .folio-list__item-link:focus .folio-list__item-pic::before,
  .folio-list__item-link:hover .folio-list__item-pic::before {
    opacity: 1;
    visibility: visible;
  }

  .folio-list__item-link:focus .folio-list__item-pic::after,
  .folio-list__item-link:hover .folio-list__item-pic::after {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
  }

  .folio-list__item-link:focus .folio-list__item-text::before,
  .folio-list__item-link:hover .folio-list__item-text::before {
    width: 100%;
  }

  .folio-list__item-pic {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }

  .folio-list__item-pic img {
    vertical-align: bottom;
    object-fit: cover;
    width: var(--item-min-height);
    height: var(--item-min-height);
    margin: 0;
  }

  .folio-list__item-pic::before,
  .folio-list__item-pic::after {
    transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.255, 1);
  }

  .folio-list__item-pic::before {
    z-index: 1;
    content: '';
    display: block;
    background-color: rgba(255, 255, 255, 0.75);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
  }

  .folio-list__item-pic::after {
    z-index: 2;
    display: block;
    content: '+';
    font-family: var(--font-1);
    font-weight: 300;
    font-size: 2.2.rem;
    color: black;
    text-align: center;
    height: var(--vspace-1);
    width: var(--vspace-1);
    line-height: var(--vspace-1);
    transform: scale(0.2);
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: calc(50% - var(--vspace-0_5));
    left: calc(50% - var(--vspace-0_5));
  }

  .folio-list__item-text::before,
  .folio-list__item-title,
  .folio-list__item-cat {
    transition: all, 0.5s cubic-bezier(0.215, 0.61, 0.255, 1);
  }

  .folio-list__item-text {
    padding-top: var(--vspace-0_5);
    border-top: 1 solid var(--color-border);
    min-height: var(--item-min-height);
    position: relative;
  }

  .folio-list__item-text::before {
    content: '';
    display: block;
    width: 0;
    height: 1px;
    background-color: var(--color-text-light);
    position: absolute;
    top: 0;
    left: 0;
  }

  .folio-list__item-title {
    font-family: var(--font-1);
    font-weight: 500;
    font-size: var(--text-lg);
  }

  .folio-list__item-cat {
    font-size: var(--text-sm);
    color: var(--color-text-light);
    line-height: var(--vspace-0_75);
    margin-left: 0.2rem;
  }

  .folio-list__proj-link {
    display: block;
    height: var(--vspace-1);
    width: var(--vspace-1);
    position: absolute;
    top: 0.8rem;
    right: var(--vspace-0_75);
  }

  .folio-list__proj-link svg {
    height: var(--vspace-0_5);
    width: var(--vspace-0_5);
    transform: translate(-50%, -50%) rotate(-45deg);
    position: absolute;
    top: 50%;
    left: 50%;
  }

  .folio-list__proj-link svg path {
    fill: var(--color-white);
  }

  .folio-list__proj-link:hover {
    transform: scale(1.2);
  }
`;
