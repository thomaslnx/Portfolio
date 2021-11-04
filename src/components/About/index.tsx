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
            Hi, Marcos Moura here! 👋 A little bit about myself: I'm married to
            the most wonderful woman ever and I have two little beautiful
            princesses. I'm a Jr Javascript Full Stack developer with about 3
            years of experience, recently working mainly with ReactJS and NodeJS
            but I have some experience with React Native too. I'm always keeping
            in move, learning something new that is so new and exciting to me
            and which makes me more productive and valuable as a professional
            developer. I love coding because is there no boring routine from
            doing daily the same thing and as proof virtually every single day I
            learn or do something completely new to me.
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
