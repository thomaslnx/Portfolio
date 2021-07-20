import { useEffect } from 'react';
import anime from 'animejs';

import Loader from '@components/Loader';
import Circles from '@components/Circles';
import Header from '@components/Header';

// import about from '@public/images/about.jpg';

import { Container, PageContent, MainContent } from './styles';

export default function Marcos(): JSX.Element {
  useEffect(() => {
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
      });

    // Correct lately the time from begin circles animation, for now
    // will be continued that way.
    setTimeout(timeLine.play, 4800);
  }, []);
  return (
    <>
      <Loader />
      <Container>
        <PageContent>
          <Header />
          <Circles />
          <MainContent className="s-content">
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

            <section id="about" className="s-about target-section">
              <div className="row about-info wide" data-animate-block>
                <div className="column lg-6 md-12 about-info__pick-block">
                  <img src="" alt="about" />
                </div>
              </div>
            </section>
          </MainContent>
        </PageContent>
      </Container>
    </>
  );
}
