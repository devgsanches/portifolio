// CONSUMO À API - REQ HTTP (GET) AO ARQUIVO JSON

// função assíncrona / consumindo dados de uma API, convertendo-os para JSON e retornando estes dados.
async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/devgsanches/portifolio/refs/heads/main/data/profile.json"
    const fetching = await fetch(url) // retorna um promise, e tudo dependerá de recursos externos
    return await fetching.json() // método .json() também retorna uma promise, então temos que utilizar o await
}

