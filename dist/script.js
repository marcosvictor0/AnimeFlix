function adicionarAnime() {
  var campoAnimeFavorito = document.querySelector("#anime")
  var animeFavorito = campoAnimeFavorito.value
  //console.log(animeFavorito)
  if (animeFavorito.endsWith(".jpg")) {
    listarAnimeNaTela(animeFavorito)
  } else {
    alert("Imagem Inválida!")
  }
  campoAnimeFavorito.value = ""
}

function listarAnimeNaTela(animeFavorito) {
  var listaAnimes = document.querySelector("#listaAnimes")
  var elementoAnime = "<img src= " + animeFavorito + ">"
  listaAnimes.innerHTML = listaAnimes.innerHTML + elementoAnime
}