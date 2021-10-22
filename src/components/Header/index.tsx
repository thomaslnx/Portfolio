import { Container } from './styles';

const Header: React.FC = (): JSX.Element => (
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
            <a href="#intro" className="smoothscroll">
              intro
            </a>
          </li>
          <li>
            <a href="#about" className="smoothscroll">
              About
            </a>
          </li>
          <li>
            <a href="#works" className="smoothscroll">
              Works
            </a>
          </li>
          <li>
            <a href="#contact" className="smoothscroll">
              Say Hello
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </Container>
);
export default Header;
