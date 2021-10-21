import { MutableRefObject, RefObject } from 'react';
import styled from 'styled-components';

interface LoaderProps {
  preloadRef: RefObject<MutableRefObject<null>>;
  visibility: string;
  display: string;
}

interface Props extends Omit<LoaderProps, 'ref'> {
  display: string;
  visibility: string;
}

export const Preloader = styled.div<Props>`
  position: fixed;
  display: ${(props) => (props.display === '' ? 'flex' : props.display)};
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background: var(--color-body);
  height: 100vh;
  width: 100%;
  opacity: 1;
  visibility: ${(props) => props.visibility || 'hidden'};
`;

export const Loading = styled.div`
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
