const pokeData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '26',

}

const {url,type,id} = pokeData;
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) => data.json())  // arrow function, takes in data as a param, and creates it into json format
    .then((pokemon) => generateHtml(pokemon))  // uses the data thats in JSON format

const generateHtml= (data) => {
    const html = `
        <div class = "name">${data.name}</div> 
        <img src = ${data.sprites.front_default}>
        <div class="details">

            <span>Height:${data.height}</span>
            <span>Height:${data.weight}</span>
        
        
        </div>
        `
        const pokemonDiv = document.querySelector('.pokemon') // querySelector gets the first element with the matching class
        pokemonDiv.innerHTML = html; // setting the html of ^ div to whatever we wrote in the generateHTML function 
}