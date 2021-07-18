import { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import _JSXStyle from 'styled-jsx/style';

import { Preloader, Loading } from './styles';

export default function Loader(): JSX.Element {
  const preloadRef = useRef(null);

  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible');
  const [display, setDisplay] = useState<'none' | 'flex'>('flex');

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

    (function ssPreloader() {
      if (!preloadRef.current) return;

      window.addEventListener('load', () => {
        document.querySelector('html')?.classList.remove('ss-preload');
        document.querySelector('html')?.classList.add('ss-loaded');
      });

      timeLine.play();
    })();
  }, []);

  return (
    <>
      {/* Had to use styled-jsx to fix lac of visibility typescript types */}
      {/* source: https://github.com/vercel/styled-jsx */}
      {/* source: https://fettblog.eu/typescript-react/styles/ */}
      <_JSXStyle>
        {`
          div#preload {
            visibility: ${visibility};
          }
        `}
      </_JSXStyle>
      <Preloader
        id="preloader"
        ref={preloadRef}
        display={display}
        visibility={visibility}
      >
        <Loading id="loader" />
      </Preloader>
    </>
  );
}
