const scrollSpy = (target: NodeListOf<HTMLElement>): void => {
  const sections = Array.from(target);

  window.addEventListener('scroll', navHighlight);

  function navHighlight() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      // Switch parentNode for parentElement in if.
      console.log(
        `scrollY: ${scrollY} > sectionTop: ${sectionTop} => `,
        scrollY > sectionTop
      );
      console.log('&&');
      console.log(
        `scrollY: ${scrollY} <= sectionTop: ${sectionTop} + sectionHeight: ${sectionHeight} => `,
        scrollY <= sectionTop + sectionHeight
      );
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        console.log('valor do section id qnd dentro do if: ', sectionId);
        document
          .querySelector(`.main-nav a[href*=${sectionId}]`)
          ?.parentElement?.classList.add('current');
      } else {
        console.log('valor do section id qnd dentro do else: ', sectionId);
        document
          .querySelector(`.main-nav a[href*=${sectionId}]`)
          ?.parentElement?.classList.remove('current');
      }
    });
  }
};

export default scrollSpy;
