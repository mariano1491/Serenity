const containerBlog = document.querySelector('.containerBlog');
const titulo = document.querySelector('.titulo');
const fechaBlog = document.querySelector('.fechaEvento');
const blogImg = document.querySelector('.blogImg');

const id = window.location.search.slice(-1);

// Devuelve un array de la fecha dada [día, mes, año]
const arrayFechas = (dia) => {
  const fecha = new Date(dia + "T00:00:00");
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return fecha
    .toLocaleString("es-ES", options)
    .split('de')
    .map(e => e.trim());
};
// Busca un blog por el id
const buscarBlog = async (id) => {
  const blogs = await (await fetch('../blogs.json')).json();
  return blogs.blogs.find(e => e.id == id);
};
// Agrega el texto al HTML
const agregarTexto = async (blog) => {
  const texto = await (await fetch('../markdown/' + blog.textoUrl)).text();
  containerBlog.innerHTML = new showdown.Converter().makeHtml(texto);
};
// Agrega toda la información del blog
const agregarInfo = async (id) => {
  const blog = await buscarBlog(id);
  const diaArr = arrayFechas(blog.fecha);

  titulo.innerHTML = `<h1>${blog.titulo}</h1>`;
  blogImg.innerHTML = `<img src="${blog.img}" alt="...">`;
  fechaBlog.textContent = `${diaArr[1]} ${diaArr[0]}, ${diaArr[2]}`;
  await agregarTexto(blog);
};

agregarInfo(id);