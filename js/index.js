// Cambio de palabras Slider
const palabras = document.querySelector('.sliderPalabras');

const aparecer = hijo => {
  palabras.children[hijo].style.cssText = `
    top: 0;
    transition: all 150ms ease-in;
  `;
};
const desaprecer = hijo => {
  palabras.children[hijo].style.cssText = `
    top: 3rem;
    transition: all 150ms ease-in;
  `;
  setTimeout(() => {
    palabras.children[hijo].style.cssText = `
    top: -3.5rem;
    transition: all 0ms ease-in;
  `;
  }, 1000);
};
aparecer(0);

const carouselItems = [...document.querySelectorAll('.carousel-item')];
carouselItems.forEach(item => {
  let prevClassState = item.classList.contains('active');

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.attributeName == "class") {
        const currentClassState = mutation.target.classList.contains('active');
        if (prevClassState !== currentClassState) {
          prevClassState = currentClassState;
          const parent = mutation.target.parentNode;
          const index = Array.prototype.indexOf.call(parent.children, mutation.target);
          if (currentClassState) {
            aparecer(index);
          }
          else {
            desaprecer(index);
          }
        }
      }
    });
  });

  observer.observe(item, { attributes: true });
});
