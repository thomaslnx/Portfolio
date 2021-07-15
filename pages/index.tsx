import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';

export default function Home(): JSX.Element {
  const preloadRef = useRef(null);

  const [visibility, setVisibility] = useState<string>('visible');
  const [display, setDisplay] = useState<string | ''>('');

  useEffect(() => {
    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false,
      })
      .add({
        targets: '#loader',
        opacity: 0,
        duration: 5000,
        begin: (anim) => {
          window.scrollTo(0, 0);
        },
      })
      .add({
        targets: '#preloader',
        opacity: 0,
        complete: (anim) => {
          if (preloadRef.current) {
            setVisibility('hidden');
            setDisplay('none');
          }
        },
      });

    timeLine.play();
  }, []);

  return (
    <>
      {/* Had to use styled-jsx to fix lac of visibility typescript types */}
      <style jsx>
        {`
          div#preload {
            visibility: ${visibility};
          }
        `}
      </style>
      <div id="preloader" ref={preloadRef} style={{ display: `${display}` }}>
        <div id="loader">
          <p style={{ color: '#ffffff' }}>Funcionando...</p>
        </div>
      </div>
    </>
  );
}
