let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

// Mostrar la primera imagen al cargar
  slides[0].classList.add('active');

// Cambiar de imagen cada 4 segundos
  setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// Validación del formulario
  const form = document.getElementById('emailForm');
  const emailInput = document.getElementById('emailInput');
  const errorMsg = document.getElementById('errorMsg');

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  if (emailInput) {
    emailInput.addEventListener('input', () => {
      errorMsg.style.display = 'none';
    });
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();

      if (!validarEmail(email)) {
        errorMsg.textContent = 'Por favor, ingresa un email válido.';
        errorMsg.style.display = 'block';
        emailInput.focus();
        return;
      }

      errorMsg.style.display = 'none';

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      const transition = document.getElementById("cinemaTransition");
      if (transition) {
        transition.classList.add("active");
      }

      setTimeout(() => {
        window.location.href = "plan.html";
      }, 600);
    });
  }
 

  /* clon netflix */

const swiper = new Swiper('.swiper', {
  speed: 800,
  spaceBetween: 20,
  slidesPerGroup: 2,
  loop: true, // si quieres que sea en bucle
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1201: {
      slidesPerView: 5,
    },
  }
});


