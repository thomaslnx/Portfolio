const scrollSpy = (target: NodeListOf<HTMLElement>): void => {
  const sections = Array.from(target);

  window.addEventListener('scroll', navHighlight);

  function navHighlight() {
    let scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(`.main-nav a[href*=${sectionId}]`)
          ?.parentNode?.classList.add('current');
      } else {
        document
          .querySelector(`.main-nav a[href*=${sectionId}]`)
          ?.parentNode?.classList.remove('current');
      }
    });
  }
};

export default scrollSpy;
