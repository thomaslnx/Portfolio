import { useEffect, useState, useRef, MutableRefObject } from 'react';
import Image from 'next/image';
import anime from 'animejs';

import Loader from '@components/Loader';
import Circles from '@components/Circles';
import Header from '@components/Header';

import pageScroll from '@utils/pageScroll';
import scrollSpy from '@utils/scrollSpy';
import viewAnimate from '@utils/viewAnimate';

import { PageContent, MainContent } from './styles';

const Marcos: React.FC = (): JSX.Element => {
  const [trigger, setTrigger] = useState([]);

  const preloadRef = useRef<MutableRefObject<null>>(null);

  const [visibility, setVisibility] = useState<'visible' | 'hidden'>('visible');
  const [display, setDisplay] = useState<'none' | 'flex'>('flex');

  useEffect(() => {
    const htmlTargets = window.document.querySelectorAll(
      '.target-section'
    ) as NodeListOf<HTMLElement>;
    const sectionBlocks: NodeListOf<HTMLElement> =
      window.document.querySelectorAll('[data-animate-block]');

    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false,
      })
      .add({
        targets: '#loader',
        opacity: 0,
        duration: 4000,
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
      })
      .add(
        {
          targets: '.s-header',
          translateY: [-100, 0],
          opacity: [0, 1],
        },
        '-=200'
      )
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
      })
      .add({
        targets: ['.s-intro .text-pretitle', '.s-intro .text-huge-title'],
        translateX: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(400),
      })
      .add({
        targets: '.intro-social li',
        translateX: [-50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, { direction: 'reverse' }),
      })
      .add(
        {
          targets: '.intro-scrolldown',
          translateY: [100, 0],
          opacity: [0, 1],
        },
        '-=800'
      );

    (function ssPreloader() {
      if (!preloadRef.current) return;

      window.addEventListener('load', () => {
        window.document.querySelector('html')?.classList.remove('ss-preload');
        window.document.querySelector('html')?.classList.add('ss-loaded');

        window.document.querySelectorAll('.ss-animated').forEach((item) => {
          item.classList.remove('ss-animated');
        });
      });

      timeLine.play();
    })();

    // const elements = window.document
    //   .querySelectorAll('.smoothscroll')
    //   .entries()
    //   .next().value;

    // setTrigger(elements);
    // pageScroll(trigger);

    // Correct lately the time from begin circles animation, for now
    // will be continued that way.
    // setTimeout(timeLine.play, 4800);
    scrollSpy(htmlTargets);
    viewAnimate(sectionBlocks);
  }, [trigger]);

  return (
    <>
      <Loader ref={preloadRef} display={display} visibility={visibility} />

      <PageContent className="s-pagewrap">
        <Circles />
        <Header />
        <MainContent className="s-content">
          {/* -----------------------------------------
           * ## Section intro
           *   -----------------------------------------
           */}
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div className="text-pretitle with-line">Hello World</div>
                <h1 className="text-huge-title">
                  I am Marcos, <br />
                  a tech student, <br />
                  & junior <br />
                  Software Engineer <br />
                  based in Brazil.
                </h1>
              </div>

              <ul className="intro-social">
                <li>
                  <a href="https://instagram.com/thomaslnx">Instagram</a>
                </li>
                <li>
                  <a href="https://twitter.com/thomaslnx">Twitter</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/marcos-de-moura-silva/">
                    Linkedin
                  </a>
                </li>
                <li>
                  <a href="https://github.com/thomaslnx">Github</a>
                </li>
              </ul>
            </div>

            <a href="#about" className="intro-scrolldown smoothscroll">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </a>
          </section>

          {/* -----------------------------------------
           * ## Section about
           *   -----------------------------------------
           */}
          <section id="about" className="s-about target-section">
            <div className="row about-info wide" data-animate-block>
              <div className="column lg-6 md-12 about-info__pic-block">
                <Image
                  src="/images/about.jpg"
                  alt="about"
                  layout="responsive"
                  width={200}
                  height={200}
                  className="about-info__pic"
                  data-animate-el
                />
              </div>

              <div className="column lg-6 md-12">
                <div className="about-info__text">
                  <h2 className="text-pretitle with-line" data-animate-el>
                    About
                  </h2>
                  <p className="attention-getter" data-animate-el>
                    personal descrition
                  </p>
                  <a
                    href="#"
                    className="btn btn--medium u-fullwidth"
                    data-animate-el
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </section>
        </MainContent>
      </PageContent>
    </>
  );
};

export default Marcos;
