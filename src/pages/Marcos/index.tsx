import { useEffect, useState } from 'react';
import Image from 'next/image';
import anime from 'animejs';

import Loader from '@components/Loader';
import Circles from '@components/Circles';
import Header from '@components/Header';

// import pageScroll from '@utils/pageScroll';
import scrollSpy from '@utils/scrollSpy';

import { PageContent, MainContent } from './styles';

const Marcos: React.FC = (): JSX.Element => {
  const [trigger, setTrigger] = useState([]);

  useEffect(() => {
    const htmlTargets = document.querySelectorAll(
      '.target-section'
    ) as NodeListOf<HTMLElement>;

    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false,
        // delay: 5000,
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

    // const elements = globalThis.window.document
    //   .querySelectorAll('.smoothscroll')
    //   .entries()
    //   .next().value;

    // setTrigger(elements);
    // pageScroll(trigger);

    // Correct lately the time from begin circles animation, for now
    // will be continued that way.
    setTimeout(timeLine.play, 4800);
    scrollSpy(htmlTargets);
  }, [trigger]);

  return (
    <>
      <Loader />

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
