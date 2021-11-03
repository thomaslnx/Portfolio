import Image from 'next/image';
import { Container } from './styles';

const About = () => (
  <Container id="about" className="s-about target-section">
    <div className="row about-info wide" data-animate-block>
      <div className="column lg-6 md-12 about-info__pic-block">
        <Image
          src="/images/about.jpg"
          alt="about"
          layout="responsive"
          width={700}
          height={868}
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
          <a href="#" className="btn btn--medium u-fullwidth" data-animate-el>
            Download CV
          </a>
        </div>
      </div>
    </div>
  </Container>
);

export default About;
