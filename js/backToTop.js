// Nav
// const navbar = document.querySelector(".ftco-section");
// const topDist = 36.794;

// window.addEventListener('scroll', () => {
//   (document.documentElement.scrollTop || document.body.scrollTop) >= topDist
//     ? navbar.classList.add("sticky")
//     : navbar.classList.remove("sticky");
// });

// Back to top
const btn = document.querySelector(".back-to-top");
window.onscroll = () => scrollFunction();
scrollFunction();

function scrollFunction() {
  (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)
    ? btn.style.display = "flex"
    : btn.style.display = "none";
}
