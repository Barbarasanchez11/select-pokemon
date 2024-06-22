const selectOptions = document.getElementById('pokemon-select')
const contenedorDescriptiom = document.getElementById('container-description')
const button = document.getElementById('get-pokemon')
//console.log(button)
const fetchPokemon = (pokemon) => {
    // console.log(pokemon)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((response) => {
        if (!response.ok) {
            throw new error("ha habido un error")
        } else { return response.json() }
    }).then((data) => {
        console.log(data)
        contenedorDescriptiom.innerHTML = `          <img src=${data.sprites.front_shiny} alt="${data.name}">
           <h2>${data.name}</h2>
           <p><span>Tipo:</span> ${data.types.map((poke) => {
            return poke.type.name
        }).join(", ")}</p>
           <p><span>Peso:</span>${data.weight}</p>
           <p><span>Altura:</span>${data.height}</p>`
    }).catch((error) => {
        console.error('Este es el mensaje de la linea 31: ', error.message)
    })
}
{/* <option value="squirtle">Squirtle</option> */ }
const getAllNames = () => {
    fetch('https:pokeapi.co/api/v2/pokemon').then((response) => {
        if (!response.ok) {
            throw new Error('Muy malo')
        } else {
            return response.json() 
        }   
    }).then((data) => {
        data.results.forEach((dato) => {
            let option = `<option value="${dato.name}">${dato.name}</option>`
            selectOptions.innerHTML += option
        });
    })
}
const getPokemon = () => {
    fetchPokemon(selectOptions.value)
}
button.addEventListener('click', getPokemon)
window.addEventListener('load', getAllNames)