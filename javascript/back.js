let url = "https://api.themoviedb.org/3/trending/movie/week?api_key=d96157e71a9a85257b60a42cafcdd67e"

const filmes = document.querySelector("#filmes")
fetch(url).then((resposta) => resposta.json().then((json) =>
        json.results.forEach(filme => filmes.appendChild(cardFilme(filme)))
))

url = "https://api.themoviedb.org/3/trending/tv/week?api_key=d96157e71a9a85257b60a42cafcdd67e"

const series = document.querySelector("#series")
fetch(url).then((resposta) => resposta.json().then((json) =>
        json.results.forEach(serie => series.appendChild(cardFilme(serie)))
))