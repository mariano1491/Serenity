// Slider Blog
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: false,
  },
  loop: true
});

// Clicks img y titulo Eventos
const eventoImg = document.querySelectorAll('.eventoImg');
eventoImg.forEach(img => img.addEventListener('click', e => {
  const padre = e.target.parentElement.parentElement;
  padre.querySelector('.btnEvento').click();
}));

const eventoTitulo = document.querySelectorAll('.eventoTitulo');
eventoTitulo.forEach(elem => elem.addEventListener('click', e => {
  const padre = e.target.parentElement;
  padre.querySelector('.btnEvento').click();
}));

// Modal Eventos
const btnEventos = document.querySelectorAll('.btnEvento');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

async function getEvento(id) {
  const todo = await (await fetch('../eventos.json', {
    'mode': 'cors',
    'headers': {
      'Access-Control-Allow-Origin': '*',
    }
  })).json();
  return todo.eventos.find(e => e.id == id);
}

btnEventos.forEach(btn => btn.addEventListener('click', async e => {
  const id = e.target.id;
  const evento = await getEvento(id);

  modalTitle.textContent = evento.titulo;
  modalBody.innerHTML = `
  <div class="modalImg">
    <img src="${evento.img}" alt="">
  </div>
  <p>${evento.descripcion}</p>
  `;
}));