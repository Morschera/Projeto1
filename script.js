function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar tag img
  const img = document.querySelector("#Profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, selecionar imagem light
    img.setAttribute("src", "./assets/eu-light.png")
  } else {
    // se tiver dark mode, selecionar imagem normal
    img.setAttribute("src", "./assets/eu.png")
  }
}
