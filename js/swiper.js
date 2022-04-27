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

// Modal Eventos
const btnEventos = document.querySelectorAll('.btnEvento');
const modalTitle = document.querySelector('.modal-title');
const modalBody = document.querySelector('.modal-body');

async function getEvento(id) {
  const todo = await (await fetch('../eventos.json')).json();
  return todo.eventos.find(e => e.id == id);
}

btnEventos.forEach(btn => btn.addEventListener('click', async e => {
  const id = e.target.id;
  const evento = await getEvento(id);

  modalTitle.textContent = evento.titulo;
  modalBody.innerHTML = `
  <div class="w-100">
    <img class="w-100" src="${evento.img}" alt="">
  </div>
  <p>${evento.descripcion}</p>
  `;
}));