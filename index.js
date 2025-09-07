// script.js

// Select all elements with data-reveal
const revealElements = document.querySelectorAll('[data-reveal]');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // adjust this to trigger sooner/later

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
}

// Run on scroll and on load
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('visible'));




//   // Optional: theme toggle (light/dark)
//   const themeToggle = document.querySelector("#theme-toggle");
//   if(themeToggle){
//     themeToggle.addEventListener("click", () => {
//       document.documentElement.dataset.theme =
//         document.documentElement.dataset.theme === "light" ? "dark" : "light";
//     });
//   }
// });
