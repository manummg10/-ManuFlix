document.addEventListener("DOMContentLoaded", () => {
  const tituloElemento = document.querySelector(".pelicula-principal .titulo");
  const descripcionElemento = document.querySelector(".pelicula-principal .descripcion");
  const peliculaPrincipal = document.querySelector(".pelicula-principal");
  const backgroundVideo = document.querySelector(".background-video");
  const peliculas = document.querySelectorAll(".pelicula");

  peliculas.forEach(pelicula => {
    const img = pelicula.querySelector("img");

    img.addEventListener("click", function (e) {
      e.preventDefault();

      const nuevoTitulo = this.getAttribute("data-titulo");
      const nuevaDescripcion = this.getAttribute("data-descripcion");
      const nuevaImagenFondo = this.getAttribute("data-imagen-src");

      if (nuevoTitulo) tituloElemento.textContent = nuevoTitulo;
      if (nuevaDescripcion) descripcionElemento.textContent = nuevaDescripcion;

      if (nuevaImagenFondo) {
        if (backgroundVideo) backgroundVideo.style.display = "none";

        peliculaPrincipal.style.backgroundImage = `url('${nuevaImagenFondo}')`;
        peliculaPrincipal.style.backgroundSize = "cover";
        peliculaPrincipal.style.backgroundPosition = "center";
        peliculaPrincipal.style.backgroundRepeat = "no-repeat";
      } else {
        peliculaPrincipal.style.backgroundImage = "none";
        if (backgroundVideo) backgroundVideo.style.display = "block";
      }

      // Aquí el scroll suave justo cuando haces click
      peliculaPrincipal.scrollIntoView({ behavior: "smooth" });
    });
  });
});



