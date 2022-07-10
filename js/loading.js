let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo-header .logo");

window.addEventListener('DOMContentLoaded', () => {
  
  setTimeout(() => {
    
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('show');
      }, (idx + 1) * 400)
    });
    
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('show');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
    }, 2000);
    
    setTimeout(() => {
      intro.style.top = '-100vh';
    }, 2300)
    
  })
})
