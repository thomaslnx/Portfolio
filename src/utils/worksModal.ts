import * as basiclightbox from 'basiclightbox';

const worksLightbox = (worksModals: NodeListOf<HTMLElement>) => {
  const folioLinks = worksModals;
  let modals = [];

  folioLinks.forEach((link) => {
    let modalBox = link.getAttribute('href') as string;
    const element = document.querySelector(modalBox);

    let isOpen = true;
    let instance;

    if (element !== null && element !== undefined) {
      instance = basiclightbox.create(element, {
        // eslint-disable-next-line no-shadow
        onShow: (instance) => {
          document.addEventListener('keydown', (event) => {
            event = event || window.event;
            if (event.code === 'Escape') {
              isOpen = false;
              instance.close();
            }
          });
          return isOpen;
        },
      });
    }

    modals.push(instance);
  });

  folioLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      modals[index].show();
    });
  });
};

export default worksLightbox;
