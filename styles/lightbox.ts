export const Lightbox = `
  .basicLightbox {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--color-body);
    opacity: 0.01;
    transition: opacity 0.4s ease;
    z-index: 1000;
    will-change: opacity;
  }

  .basicLightbox::after {
    content: '';
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    width: 2em;
    height: 2em;
    background: url(/icons/icon-close.svg);

    background-position: center;
    background-size: 1.8rem 1.8rem;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .basicLightbox--visible {
    opacity: 1;
  }

  .basicLightbox__placeholder {
    max-width: 100%;
    transform: scale(0.9);
    transition: all 0.4s ease;
    z-index: 1;
    will-change: transform;
    opacity: 0;
  }

  .basicLightbox__placeholder > iframe:first-child:last-child,
  .basicLightbox__placeholder > img:first-child:last-child,
  .basicLightbox__placeholder > video:first-child:last-child {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    max-width: 95%;
    max-height: 95%;
  }

  .basicLightbox__placeholder > iframe:first-child:last-child,
  .basicLightbox__placeholder > video:first-child:last-child {
    pointer-events: auto;
  }

  .basicLightbox__placeholder > img:first-child:last-child,
  .basicLightbox__placeholder > video:first-child:last-child {
    width: auto;
    height: auto;
  }

  .basicLightbox--iframe .basicLightbox__placeholder,
  .basicLightbox--img .basicLightbox__placeholder,
  .basicLightbox--video .basicLightbox__placeholder {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .basicLightbox--visible .basicLightbox__placeholder {
    transform: scale(1);
    opacity: 1;
  }

  .modal-popup {
    max-width: 680px;
    background-color: white;
    font-size: calc(var(--text-size) * 0.9447);
    line-height: var(--vspace-0_875);
    color: rgba(0, 0, 0, 0.75);
    overflow-y: auto;
    position: relative;
  }

  .modal-popup img {
    margin-bottom: var(--vspace-0_75);
    width: 100%;
  }

  .modal-popup h5 {
    font-family: var(--font-1);
    font-size: var(--text-size);
    line-height: var(--vspace-1);
    font-weight: 500;
    margin-top: 0;
    margin-bottom: var(--vspace-0_25);
    color: var(--color-black);
  }

  .modal-popup__desc {
    padding: 0 var(--vspace-1_25) var(--vspace-0_25);
  }

  .modal-popup__cat {
    list-style: none;
    margin-left: 0;
    font-size: var(--text-sm);
    line-height: var(--vspace-0_5);
    color: rgba(0, 0, 0, 0.6);
    padding-left: calc(0.875 * var(--space));
    position: relative;
  }

  .modal-popup__cat::before {
    content: '';
    display: block;
    height: calc(0.625 * var(--space));
    width: calc(0.625 * var(--space));
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('/icons/icon-tag.svg');
    position: absolute;
    left: 0;
    top: -0.15em;
  }

  .modal-popup__cat li {
    display: inline;
    padding-left: 0;
  }

  .modal-popup__cat li::after {
    content: ', ';
  }

  .modal-popup__cat li:last-child::after {
    display: none;
  }

  .modal-popup__details {
    background-color: rgba(0, 0, 0, 0.3);
    font-size: var(--text-xs);
    line-height: var(--vspace-1_25);
    color: var(--color-white);
    padding: 0 1.2rem;
    position: absolute;
    top: var(--vspace-1);
    left: var(--vspace-1);
  }

  .modal-popup__details:focus,
  .modal-popup__details:hover {
    background-color: var(--color-body);
    color: var(--color-white);
  }
`;
