import { useEffect } from 'react';
import anime from 'animejs';

import { Container } from './styles';

const Header: React.FC = (): JSX.Element => {
  useEffect(() => {
    const timeLine = anime
      .timeline({
        easing: 'easeInOutCubic',
        duration: 800,
        autoplay: false,
        // delay: 5000,
      })
      .add(
        {
          targets: '.s-header',
          translateY: [-100, 0],
          opacity: [0, 1],
        },
        '-=200'
      );

    // Correct lately the time from begin circles animation, for now
    // will be continued that way.
    setTimeout(timeLine.play, 4500);
  }, []);

  return (
    <Container className="s-header">
      <div className="header-mobile">
        <span className="mobile-home-link">
          <a href="#">Marcos.</a>
        </span>
        <a className="mobile-menu-toggle" href="#0">
          <span>Menu</span>
        </a>
      </div>

      <div className="row wide main-nav-wrap">
        <nav className="column lg-12 main-nav">
          <ul>
            <li>
              <a href="#" className="home-link">
                Marcos.
              </a>
            </li>
            <li className="current">
              <a href="#intro" className="smooth-scroll">
                intro
              </a>
            </li>
            <li>
              <a href="#about" className="smooth-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#works" className="smooth-scroll">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="smooth-scroll">
                Say Hello
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;