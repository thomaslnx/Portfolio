import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const PageContent = styled.div`
  --circle-width: 70vw;
  --header-height: 6.4rem;
  display: flex;
  flex-direction: column;
  height: 100%;
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
`;
