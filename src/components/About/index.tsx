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
          <a
            href="https://drive.google.com/file/d/1XJX-AsbRF9Tc9Qn994Ek8WiMyxYVDwsv/view?usp=sharing"
            target="_blank"
            className="btn btn--medium u-fullwidth"
            data-animate-el
            rel="noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>

    <div className="row about-expertise" data-animate-block>
      <div className="column lg-12">
        <h2 className="text-pretitle" data-animate-el>
          Expertise
        </h2>
        <ul className="skills-list h1" data-animate-el>
          <li>JavaScript</li>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>NextJS</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>GoLang - still learning</li>
        </ul>
      </div>
    </div>

    <div className="row about-timelines" data-animate-block>
      <div className="column lg-6 tab-12">
        <h2 className="text-pretitle" data-animate-el>
          Experience
        </h2>

        <div className="timeline" data-animate-el>
          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">Tog Design</h4>
              <h5 className="timeline__meta">Jr Full Stack Developer</h5>
              <p className="timeline__timeframe">August 2021 - now</p>
            </div>
            <div className="timeline__desc">
              <p>
                Helping Tog's team to deliver high-quality software to your
                customers as Jr front end developer using mainly JavaScript,
                React, and Typescript, and at the same time that I get improving
                my own hard and soft skills.
              </p>
            </div>
          </div>

          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">
                Universidade Federal do Tocantins - UFT
              </h4>
              <h5 className="timeline__meta">
                Information Technology Technician
              </h5>
              <p className="timeline__timeframe">January 2010 - August 2021</p>
            </div>
            <div className="timeline__desc">
              <p>
                In this role, I was acting as a technology technician been one
                of responsible for maintaining the health of all IT
                infrastructure, networking, and VoIP and deploying new features
                to maintain all services. I have implemented some scripts using
                shell script and python to automate some repetitive tasks. I was
                worked too with services virtualization using VMWare solutions
                like VSphere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="column lg-6 tab-12">
        <h2 className="text-pretitle" data-animate-el>
          Education
        </h2>

        <div className="timeline" data-animate-el>
          <div className="timeline__block">
            <div className="timeline__bullet" />
            <div className="timeline__header">
              <h4 className="timeline__title">Unicesumar</h4>
              <h5 className="timeline__meta">
                Systems Analysis and Development
              </h5>
              <p className="timeline__timeframe">January 2015 - January 2019</p>
            </div>
            <div className="timeline__desc">
              <p>
                The Systems Analysis and Development course aims to train
                technologists capable of analyzing, designing, documenting,
                specifying, testing, implementing and maintaining computer
                information systems, acting in a professional manner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default About;
