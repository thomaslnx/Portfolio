import anime from 'animejs';

const viewAnimate = (animatedBlocks: NodeListOf<HTMLElement>): void => {
  const blocks = Array.from(animatedBlocks);

  const viewportAnimation = () => {
    let scrollY = window.pageYOffset;

    blocks.forEach((current) => {
      const viewportHeight = window.innerHeight;
      const triggerTop =
        current.offsetTop + viewportHeight * 0.2 - viewportHeight;
      const blockHeight = current.offsetHeight;
      const blockSpace = triggerTop + blockHeight;
      const inView = scrollY > triggerTop && scrollY <= blockSpace;
      const isAnimated = current.classList.contains('ss-animated');

      if (inView && !isAnimated) {
        anime({
          targets: current.querySelectorAll('[data-animate-el]'),
          opacity: [0, 1],
          translateY: [100, 0],
          delay: anime.stagger(400, { start: 200 }),
          duration: 800,
          easing: 'easeInOutCubic',
          begin: (anim) => {
            current.classList.add('ss-animated');
          },
        });
      }
    });
  };

  window.addEventListener('scroll', viewportAnimation);
};

export default viewAnimate;
