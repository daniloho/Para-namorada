const controls = document.querySelectorAll(".controle");
let corrente = 0;
const fotos = document.querySelectorAll(".fotos");
const maxFotos = fotos.length;

// Encontrar o índice da imagem com a classe "começo"
const indiceComeco = Array.from(fotos).findIndex(foto => foto.classList.contains("começo"));
if (indiceComeco > -1) {
  corrente = indiceComeco;
  fotos.forEach((fotos) => fotos.classList.remove("corrente"));
  fotos[indiceComeco].classList.add("corrente");
  fotos[indiceComeco].scrollIntoView({
    behavior: "smooth",
    inline: "center"
  });
}

controls.forEach((controle) => {
  controle.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("setaEsquerda");

    if (isLeft) {
      corrente -= 1;
    } else {
      corrente += 1;
    }

    if (corrente >= maxFotos) {
      corrente = 0;
    }

    if (corrente < 0) {
      corrente = maxFotos - 1;
    }

    fotos.forEach((fotos) => fotos.classList.remove("corrente"));

    fotos[corrente].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    fotos[corrente].classList.add("corrente");
  });
});
