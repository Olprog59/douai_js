import {getBeers} from "./beer_service.js";


getBeers(10)
    .then(beers => {
        let html = beers.map(b => {
            return `
            <div id="beer-${b.id}">
                <h4>${b.name}</h4>
                <p>${b.description}</p>
                <figure>
                    <img src=${b.imageUrl} alt="${b.name}">
                </figure>
                <p>
                    <span>Premier brassage le : ${b.firstBrewed}</span>
                    <span>Taux d'alcool : ${b.abv}</span>
                </p>
            </div>
            `;
        });
        document.getElementById('beers').innerHTML = html.join("");
    })
