import { useEffect } from 'react';
import anime from 'animejs';

const Circles: React.FC = (): JSX.Element => {
  useEffect(() => {
    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false,
      })
      .add({
        targets: '.circles span',
        keyframes: [
          {
            opacity: [0, 0.3],
          },
          {
            opacity: [0.3, 0.1],
            delay: anime.stagger(100, { direction: 'reverse' }),
          },
        ],
        delay: anime.stagger(100, { direction: 'reverse' }),
      });

    // Correct lately the time from begin circles animation, for now
    // will be continued that way.
    setTimeout(timeLine.play, 5500);
  }, []);

  return (
    <div className="circles">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

export default Circles;
