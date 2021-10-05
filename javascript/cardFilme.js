function cardFilme(dados){
    const filme = document.createElement("session")
    filme.classList.add("filme")
    
    const poster = document.createElement("img")
    poster.classList.add("poster")
    poster.src= "https://image.tmdb.org/t/p/w200/" + dados.poster_path
    poster.alt= "poster" + dados.title
    
    const titulo = document.createElement("p")
    titulo.classList.add("titulo-filme")
    titulo.innerHTML = dados.title || dados.name
    
    const nota = document.createElement("div")
    nota.classList.add("nota")
    
    const icone = document.createElement("span")
    icone.classList.add("material-icons")
    icone.innerHTML = "star"
    
    const valor_nota = document.createElement("p")
    valor_nota.innerHTML = dados.vote_average
    
    nota.appendChild(icone)
    nota.appendChild(valor_nota)
    
    const botao = document.createElement("a")
    botao.classList.add("botao")
    botao.href="detalhe.html"
    botao.innerHTML = "Detalhes"
    
    filme.appendChild(poster)
    filme.appendChild(titulo)
    filme.appendChild(nota)
    filme.appendChild(botao)
    
    filmes.appendChild(filme)

    return filme
}