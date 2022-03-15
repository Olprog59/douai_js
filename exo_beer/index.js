import {getBeers} from './beerService.js';

let beers = [];

getBeers().then(r => {
    beers = r.slice();
    console.log(beers);
});

