import {BeerModel} from "./beer_model.js";

// function getBeers(numberBeer = 10) {
//     fetch("https://api.punkapi.com/v2/beers?page=1&per_page=" + numberBeer)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result);
//         })
// }

async function getBeers(numberBeer = 10) {
    const response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=" + numberBeer)
    const result = await response.json();
    return jsonToBeerModel(result);
}

function jsonToBeerModel(beersJson) {
    // créer une liste de BeerModel et la retourner
    return beersJson.map(js => {
        return new BeerModel(
            js['id'],
            js['name'],
            js['first_brewed'],
            js['description'],
            js['image_url'],
            js['abv']
        );
    });
}

export {getBeers};
