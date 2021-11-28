import { Container } from './styles';

const Works = () => (
  <Container id="works" className="s-works target-section">
    <div className="row works-portfolio">
      <div className="column lg-12" data-animate-block>
        <h2 className="text-pretitle" data-animate-el>
          Recent Works
        </h2>
        <p className="h1" data-animate-el>
          Here are some of my favorites projects I have done lately. Feel free
          to check them out.
        </p>
        <ul className="folio-list row block-lg-one-half block-stack-on-1000">
          <li className="folio-list__item column" data-animate-el>
            <a href="#work-01" className="folio-list__item-link">
              <div className="folio-list__item-pic">
                <img src="/images/about.jpg" alt="work1" />
              </div>

              <div className="folio-list__item-text">
                <div className="folio-list__item-cat">Website</div>
                <div className="folio-list__item-title">Personal Portfolio</div>
              </div>
            </a>

            <a href="#" className="folio-list__proj-link" title="project link">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          <li className="folio-list__item column" data-animate-el>
            <a href="#work-02" className="folio-list__item-link">
              <div className="folio-list__item-pic">
                <img src="/images/about.jpg" alt="work1" />
              </div>

              <div className="folio-list__item-text">
                <div className="folio-list__item-cat">Component</div>
                <div className="folio-list__item-title">
                  Credit Card Component
                </div>
              </div>
            </a>

            <a href="#" className="folio-list__proj-link" title="project link">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div id="work-01" hidden>
        <div className="modal-popup">
          <img src="/images/about.jpg" alt="" />
          <div className="modal-popup__desc">
            <h5>Personal Portfolio</h5>
            <p>Descrição que será dada ao projeto do portfolio</p>
            <ul className="modal-popup__cat">
              <li>Programming</li>
            </ul>
          </div>

          <a href="#" className="modal-popup__details">
            Project link
          </a>
        </div>
      </div>

      <div id="work-02" hidden>
        <div className="modal-popup">
          <img src="/images/about.jpg" alt="" />
          <div className="modal-popup__desc">
            <h5>Personal Portfolio</h5>
            <p>Descrição que será dada ao projeto do portfolio</p>
            <ul className="modal-popup__cat">
              <li>Programming</li>
            </ul>
          </div>

          <a href="#" className="modal-popup__details">
            Project link
          </a>
        </div>
      </div>
    </div>
  </Container>
);

export default Works;
