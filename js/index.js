// Back to top
const btn = document.querySelector(".back-to-top");
window.onscroll = () => scrollFunction();
scrollFunction();

function scrollFunction() {
  (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
    ? btn.style.display = "flex"
    : btn.style.display = "none";
}