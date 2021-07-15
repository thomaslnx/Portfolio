import styled from 'styled-components';

export const Preloader = styled.div`
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background: var(--color-body);
  z-index: 500;
  height: 100vh;
  width: 100%;
  opacity: 1;

  #preloader {
    display: none;
  }
`;

export const Loader = styled.div`
  width: var(--vspace-2);
  height: var(--vspace-2);
  padding: 0;
  background-color: var(--color-white);
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;

  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
