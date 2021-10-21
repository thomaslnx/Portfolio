/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import MoveTo from 'moveto';

const pageScroll = (elements: HTMLElement[]) => {
  console.log(
    'O valor de trigger passado para a função pageScroll: ',
    elements
  );
  const easeFunctions = {
    easeInQuad(t: number, b: number, c: number, d: number) {
      t /= d;
      return c * t * t + b;
    },
    easeOutQuad(t: number, b: number, c: number, d: number) {
      t /= d;
      return -c * t * (t - 2) + b;
    },
    easeInOutQuad(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    },
    easeInOutCubic(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    },
  };

  // const triggers = document.querySelectorAll('.smoothscroll');

  const moveTo = new MoveTo(
    {
      tolerance: 0,
      duration: 1200,
      easing: 'easeInOutCubic',
      container: window,
    },
    easeFunctions
  );

  elements.forEach((element) => {
    moveTo.registerTrigger(element);
  });
};

export default pageScroll;
