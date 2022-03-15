import {Beer} from './beer.js';

async function getBeers(numberResult = 50) {let beers = [];
    const json = await fetch('https://api.punkapi.com/v2/beers?per_page=' + numberResult);
    const res = await json.json();

    return res.map(beer => {
        return new Beer(beer['id'], beer['name'], beer['description'], beer['image_url'])
    })
}

export {getBeers};
